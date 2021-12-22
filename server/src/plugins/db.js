/* eslint-disable require-jsdoc */
require("dotenv").config();

const dbConnection = () => {
  const pool = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  };

  return `postgres://${pool.user}:${pool.password}@${pool.host}:${pool.port}/${pool.database}`;
};

module.exports = dbConnection;
