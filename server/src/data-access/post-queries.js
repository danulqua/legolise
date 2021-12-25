/* eslint-disable require-jsdoc */

const Posts = require('../models/Posts');

const postInterface = () => {
  const getAllPosts = async () => {
    const result = await Posts.find({}).sort({ createdOn: -1 }).exec();
    return result;
  };

  const getPostById = async (id) => {
    const result = await Posts.find({ _id: `${id}` }).exec();
    console.log(result);
    return result;
  };

  const addPost = async (postId, body) => {
    const result = await Posts.create(body);
    return result;
  };

  const editPost = async (body) => {
    const { _id, title, description, pictures, likes } = body;
    const post = await Posts.findOne({ _id });
    const update = {
      title: title,
      description: description,
      pictures: pictures,
      likes: likes,
      createdOn: new Date(),
    };
    const result = post.updateOne(update);
    return result;
  };

  const deletePost = async (_id) => {
    const result = await Posts.deleteOne({ _id });
    console.log(result);
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
