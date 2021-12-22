/* eslint-disable require-jsdoc */
const { v4: uuidv4 } = require("uuid");
const PostAccess = require("../data-access/post-queries");

async function routes(fastify) {
  const postAccess = new PostAccess(fastify.db);

  fastify.get("/", async (request, reply) => {
    const result = await postAccess.getAllPosts();
    reply.send(result.rows);
  });

  fastify.get("/:id", async (request, reply) => {
    const result = await postAccess.getPostById(request.params.id);
    reply.send(result.rows[0]);
  });

  fastify.post("/add", async (request, reply) => {
    const postId = uuidv4();
    const result = await postAccess.addPost(postId, request.body);
    reply.send(result.rows[0]);
  });

  fastify.put("/:id/edit", async (request, reply) => {
    const result = await postAccess.editPost(request.body);
    reply.send(result.rows[0]);
  });

  fastify.delete("/:id/delete", async (request, reply) => {
    const postId = request.params.id;
    const result = await postAccess.deletePost(postId);
    reply.send(result.rows[0]);
  });
}

module.exports = routes;
