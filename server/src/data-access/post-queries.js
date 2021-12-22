/* eslint-disable require-jsdoc */
class PostAccess {
  constructor(db) {
    this.db = db;
  }

  async getAllPosts() {
    const result = await this.db.query(
      `SELECT * FROM posts ORDER BY "date" DESC`
    );
    return result;
  }

  async getPostById(id) {
    const result = await this.db.query(
      `SELECT * FROM posts WHERE "postId" = $1`,
      [id]
    );
    return result;
  }

  async addPost(postId, body) {
    const {
      type,
      title,
      description,
      district,
      address,
      ownerPhone,
      price,
      originLink,
    } = body;

    const result = await this.db.query(
      `
                INSERT INTO posts ("postId", "type", "title", "description", "originLink", "district", "address", "ownerPhone", "price")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *
            `,
      [
        postId,
        type,
        title,
        description,
        originLink,
        district,
        address,
        ownerPhone,
        price,
      ]
    );

    return result;
  }

  async editPost(body) {
    const {
      postId,
      type,
      title,
      description,
      district,
      address,
      ownerPhone,
      price,
      originLink,
    } = body;

    const result = await this.db.query(
      `
                UPDATE posts SET
                "type" = $1,
                "title" = $2,
                "description" = $3,
                "district" = $4,
                "address" = $5,
                "ownerPhone" = $6,
                "price" = $7,
                "originLink" = $8
                WHERE "postId" = $9
                RETURNING *
            `,
      [
        type,
        title,
        description,
        district,
        address,
        ownerPhone,
        price,
        originLink,
        postId,
      ]
    );

    return result;
  }

  async deletePost(id) {
    const result = await this.db.query(
      `
                DELETE FROM posts
                WHERE "postId" = $1
                RETURNING *
            `,
      [id]
    );

    return result;
  }
}

module.exports = PostAccess;
