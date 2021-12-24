const LocalStorageService = (() => {
  const _setToken = (accessToken) => {
    localStorage.setItem('access_token', accessToken);
  };

  const _getAccessToken = () => {
    return localStorage.getItem('access_token');
  };

  const _clearToken = () => {
    localStorage.removeItem('access_token');
  };

  return {
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken
  };
})();
export default LocalStorageService;
