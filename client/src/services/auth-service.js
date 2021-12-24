import { getData, editData, postData, deleteData } from './requests';

export default class AuthService {
  async register(body) {
    const result = await postData('http://localhost:4000/api/auth/register', body);
    return result;
  }

  async login(body) {
    const result = await postData('http://localhost:4000/api/auth/login', body);
    return result;
  }
}
