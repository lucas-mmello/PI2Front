const CookiesService = {
  createCookie: (name, userName, permission, email, jwt) => {
    const data = {
      userName,
      permission,
      email,
      jwt,
    };

    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const expires = `expires=${date.toUTCString()}`;
    const cookieValue = `${name}=${JSON.stringify(data)}; ${expires}; path=/`;
    document.cookie = cookieValue;
  },

  getCookie: (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        const cookieValue = cookie.substring(cookieName.length, cookie.length);
        return JSON.parse(cookieValue);
      }
    }
    return null;
  },

  deleteCookie: (name) => {
    const expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = `${name}=; ${expires}; path=/`;
  },
};

export default CookiesService;
