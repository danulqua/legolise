const bcrypt = require("bcryptjs");

const authService = (db) => {
  const register = async (body) => {
    const candidate = await db.query(
      `
                SELECT * FROM users
                WHERE "email" = $1
            `,
      [body.email]
    );

    if (candidate.rows.length) {
      return {
        error: true,
        message: "User with this email already exists",
      };
    }

    const newUser = {
      username: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      gender: body.gender,
      dateOfBirth: body.dateOfBirth,
    };

    const result = await db.query(
      `
                INSERT INTO users (
                    "username",
                    "email",
                    "password",
                    "gender",
                    "dateOfBirth"
                )
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `,
      [
        newUser.username,
        newUser.email,
        newUser.password,
        newUser.gender,
        newUser.dateOfBirth,
      ]
    );

    return result.rows[0];
  };

  const login = async (body, reply) => {
    const candidate = await db.query(
      `
                SELECT * FROM users
                WHERE "email" = $1
            `,
      [body.email]
    );

    if (!candidate.rows.length) {
      return {
        error: true,
        message: "Incorrect credentials",
      };
    }

    const user = candidate.rows[0];

    if (!(await bcrypt.compare(body.password, user.password))) {
      return {
        error: true,
        message: "Incorrect password",
      };
    }

    const token = jwt.sign(
      { userId: user.userId },
      process.env.JWT_ACCESS_SECRET
    );
    reply.setCookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });

    return {
      message: "Logged in successfully",
    };
  };

  const logout = async (reply) => {
    reply.setCookie("jwt", "", { maxAge: 0, path: "/" });
    return {
      message: "success",
    };
  };

  const authHook = (request, reply, done) => {
    const token = request.cookies.jwt;

    if (!token) {
      request.userId = null;
      reply.send({
        error: true,
        message: "Not authorized",
      });
    }

    const claims = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    if (!claims) {
      request.userId = null;
      reply.send({
        error: true,
        message: "Not authorized",
      });
    }

    request.userId = claims.userId;
    done();
  };

  return {
    register,
    login,
    logout,
    authHook,
  };
};

module.exports = authService;
