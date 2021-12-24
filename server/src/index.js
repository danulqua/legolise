const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth-routes");
const postRoutes = require("./routes/post-routes");
const userRoutes = require("./routes/user-routes");

try {
  mongoose.connect(`${process.env.MONGODB_URI}`);
} catch (e) {
  console.error(e);
}
fastify.register(require("fastify-cookie"));
fastify.register(require("fastify-cors"), {
  credentials: true,
  origin: ["http://localhost:3000"],
});
fastify.register(require("fastify-jwt"), {
  secret: "secret",
});

fastify.register(postRoutes, { prefix: "/api/posts" });
fastify.register(authRoutes, { prefix: "/api/auth" });
fastify.register(userRoutes, { prefix: "/api/users" });

const PORT = process.env.PORT || 4000;

fastify.listen(PORT, (err, address) => {
  console.log(err);
  console.log(`Server is running on ${address}`);
});

module.exports = fastify;
