import { getData, editData, postData, deleteData } from './requests';
import LocalStorageService from '../helpers/storageService';

export default class AuthService {
  async register(body) {
    const result = await postData('http://localhost:4000/api/auth/register', body);
    return result;
  }

  async login(body) {
    const result = await postData('http://localhost:4000/api/auth/login', body);
    return result;
  }

  checkAuth() {
    if (LocalStorageService.getAccessToken()) {
      return true;
    }
    return false;
  }

  async logout() {
    LocalStorageService.clearToken();
    const result = await getData('http://localhost:4000/api/auth/logout');
    return result;
  }
}
