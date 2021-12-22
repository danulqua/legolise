/* eslint-disable require-jsdoc */
class UserAccess {
  constructor(db) {
    this.db = db;
  }

  async getUsers() {
    const result = await this.db.query("SELECT * FROM users");

    if (!result.rows.length) {
      return {
        error: true,
        message: "Users are missing",
      };
    }

    return result.rows;
  }
  async getUserByUsername(username) {
    const result = await this.db.query(
      'SELECT * FROM users WHERE "username" = $1',
      [username]
    );

    if (!result.rows[0]) {
      return {
        error: true,
        message: "User not found",
      };
    }

    const { ...data } = result.rows[0];
    return data;
  }
}

module.exports = UserAccess;
