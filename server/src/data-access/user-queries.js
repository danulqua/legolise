/* eslint-disable require-jsdoc */

const Users = require("../models/Users");

const userInterface = () => {
  const getUsers = async () => {
    const result = await Users.find({}).exec();

    if (!result.length) {
      return {
        error: true,
        message: "Users are missing",
      };
    }

    return result;
  };
  const getUserByUsername = async (username) => {
    const result = await Users.find({ username: `${username}` }).exec();

    if (!result[0]) {
      return {
        error: true,
        message: "User not found",
      };
    }

    const { ...data } = result[0];
    return data;
  };

  const getUserById = async (id) => {
    const result = await Users.find({ _id: `${id}` }).exec();

    if (!result[0]) {
      return {
        error: true,
        message: "User not found",
      };
    }

    const { ...data } = result[0];
    return data;
  };

  return {
    getUsers,
    getUserByUsername,
    getUserById,
  };
};

module.exports = userInterface;
