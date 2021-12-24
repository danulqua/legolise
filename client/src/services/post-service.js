import { deleteData, editData, getData, postData } from './requests';

export default class PostService {
  async getAllPosts() {
    return await getData('/api/posts');
  }

  async getPostById(id) {
    return await getData(`http://127.0.0.1:4000/api/posts/${id}`);
  }

  async createPost(body) {
    return await postData('/api/posts/add', body);
  }

  async editPost(id, body) {
    return await editData(`/api/posts/${id}/edit`, body);
  }

  async deletePost(id) {
    return await deleteData(`/api/posts/${id}/delete`);
  }
}
