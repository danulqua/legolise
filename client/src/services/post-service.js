import { deleteData, editData, getData, postData } from './requests';

export default class PostService {
  async getAllPosts() {
    return await getData('http://localhost:4000/api/posts');
  }

  async getPostById(id) {
    return await getData(`http://localhost:4000/api/posts/${id}`);
  }

  async createPost(body) {
    return await postData('http://localhost:4000/api/posts/add', body);
  }

  async editPost(id, body) {
    return await editData(`http://localhost:4000/api/posts/${id}/edit`, body);
  }

  async deletePost(id) {
    return await deleteData(`http://localhost:4000/api/posts/${id}/delete`);
  }
}
