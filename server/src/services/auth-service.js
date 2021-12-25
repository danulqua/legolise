const bcrypt = require("bcryptjs");
const Users = require("../models/Users");

const authService = (fastify) => {
  const register = async (body) => {
    const candidate = await Users.find({ email: `${body.email}` }).exec();

    if (candidate.length) {
      return {
        error: true,
        message: "User with this email already exists",
      };
    }

    const newUser = {
      bio: body.bio,
      username: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      gender: body.gender,
      dateOfBirth: body.dateOfBirth,
      createdOn: body.createdOn,
    };

    const result = await Users.create(newUser);
    return result;
  };

  const login = async (body, reply) => {
    const candidate = await Users.find({ email: `${body.email}` }).exec();

    if (!candidate.length) {
      return {
        error: true,
        message: "Incorrect credentials",
      };
    }

    const user = candidate[0];

    if (!(await bcrypt.compare(body.password, user.password))) {
      return {
        error: true,
        message: "Incorrect password",
      };
    }

    const token = fastify.jwt.sign(
      { id: user._id },
      process.env.JWT_ACCESS_SECRET
    );
    reply.setCookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });

    return {
      token,
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

    const claims = fastify.jwt.verify(token, process.env.JWT_ACCESS_SECRET);
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

  const getInfoHook = async (request) => {
    const token = request.headers.authorization;
    const data = fastify.jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const candidate = await Users.find({ _id: `${data.id}` }).exec();
    return candidate[0];
  };

  return {
    register,
    login,
    logout,
    authHook,
    getInfoHook,
  };
};

module.exports = authService;
