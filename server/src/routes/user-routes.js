/* eslint-disable require-jsdoc */
const UserAccess = require("../data-access/user-queries");

async function routes(fastify, options) {
  const { authHook } = require("../services/auth-service")(fastify.db);
  const userAccess = new UserAccess(fastify.db);

  fastify.get(
    "/:username",
    { preValidation: authHook },
    async (request, reply) => {
      const result = await userAccess.getUserByUsername(
        request.params.username
      );
      reply.send(result);
    }
  );

  fastify.get("/", async (request, reply) => {
    const result = await userAccess.getUsers();
    reply.send(result);
  });
}

module.exports = routes;
