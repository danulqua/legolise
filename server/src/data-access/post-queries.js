/* eslint-disable require-jsdoc */

const Posts = require("../models/Posts");

const postInterface = () => {
  const getAllPosts = async () => {
    const result = await Posts.find({}).exec();
    return result;
  };

  const getPostById = async (id) => {
    const result = await Posts.find({ _id: `${id}` }).exec();
    return result;
  };

  const addPost = async (postId, body) => {
    const result = await Posts.create(body);
    return result;
  };

  const editPost = async (body) => {
    const { postId, title, description, pictures, likes } = body;
    const post = await Posts.findOne({ _id: postId });
    const update = {
      title: title,
      description: description,
      pictures: pictures,
      likes: likes,
    };
    const result = post.updateOne(update);
    return result;
  };

  const deletePost = async (id) => {
    const result = await Posts.deleteOne({ _id: id });
    return result;
  };

  return {
    getAllPosts,
    getPostById,
    addPost,
    editPost,
    deletePost,
  };
};

module.exports = postInterface;
