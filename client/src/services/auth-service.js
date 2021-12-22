import { getData, editData, postData, deleteData } from './requests';

export default class AuthService {
  async register(body) {
    return await postData('http://localhost:8080/api/auth/register', body);
  }

  async login(body) {
    return await postData('/api/auth/login', body);
  }
}
