/* eslint-disable require-jsdoc */
const userInterface = require("../data-access/user-queries");

async function routes(fastify, options) {
  const { getInfoHook } = require("../services/auth-service")(fastify);
  const userAccess = userInterface(fastify);

  fastify.get("/me", async (request, reply) => {
    const result = await getInfoHook(request);
    reply.send(result);
  });

  fastify.get("/", async (request, reply) => {
    const result = await userAccess.getUsers();
    reply.send(result);
  });

  fastify.get("/:id", async (request, reply) => {
    const result = await userAccess.getUserById(request.params.id);
    reply.send(result);
  });

  fastify.put("/:id/edit", async (request, reply) => {
    const result = await userAccess.updateUserById(
      request.params.id,
      request.body
    );
    reply.send(result);
  });
}

module.exports = routes;
