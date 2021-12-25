import { editData } from './requests';
import LocalStorageService from '../helpers/storageService';

export default class UserService {
  async getUserInfo() {
    const token = LocalStorageService.getAccessToken();
    const result = await fetch(`http://localhost:4000/api/users/me`, {
      headers: {
        Authorization: `${token}`
      }
    });
    return await result.json();
  }

  async getUserInfoById(id) {
    const result = await fetch(`http://localhost:4000/api/users/${id}`);
    return await result.json();
  }

  async updateUserInfo(id, body) {
    return await editData(`http://localhost:4000/api/users/${id}/edit`, body);
  }
}
