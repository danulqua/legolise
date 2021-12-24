/* eslint-disable require-jsdoc */
const { v4: uuidv4 } = require("uuid");
const postInterface = require("../data-access/post-queries");

async function routes(fastify) {
  const postAccess = postInterface();

  fastify.get("/", async (request, reply) => {
    const result = await postAccess.getAllPosts();
    reply.send(result);
  });

  fastify.get("/:id", async (request, reply) => {
    const result = await postAccess.getPostById(request.params.id);
    reply.send(result);
  });

  fastify.post("/add", async (request, reply) => {
    const postId = uuidv4();
    const result = await postAccess.addPost(postId, request.body);
    reply.send(result);
  });

  fastify.put("/:id/edit", async (request, reply) => {
    const result = await postAccess.editPost(request.body);
    reply.send(result);
  });

  fastify.delete("/:id/delete", async (request, reply) => {
    const postId = request.params.id;
    const result = await postAccess.deletePost(postId);
    reply.send(result);
  });
}

module.exports = routes;
