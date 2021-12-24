/* eslint-disable require-jsdoc */
const userInterface = require("../data-access/user-queries");

async function routes(fastify, options) {
  const { authHook } = require("../services/auth-service")(fastify);
  const userAccess = userInterface(fastify);

  fastify.get(
    "/:username",
    { preValidation: authHook },
    async (request, reply) => {
      const result = await userAccess.getUserByUsername(
        request.params.username
      );
      reply.send(result["_doc"]);
    }
  );

  fastify.get("/", async (request, reply) => {
    const result = await userAccess.getUsers();
    reply.send(result);
  });
}

module.exports = routes;
