import { getData } from './requests';


export default class UserService {
    async getUserInfo() {
        const result = await postData('http://localhost:4000/api/auth/register', body);
        return result;
    }
}
