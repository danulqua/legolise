class LocalStorageService {
  static setToken = (accessToken) => {
    localStorage.setItem('access_token', accessToken);
  };

  static getAccessToken = () => localStorage.getItem('access_token');

  static clearToken = () => {
    localStorage.removeItem('access_token');
  };
}

export default LocalStorageService;
