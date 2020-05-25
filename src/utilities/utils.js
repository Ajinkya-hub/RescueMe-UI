import Cookie from "js-cookie"

export default {
  
  getCookies() {
    return Cookie.get('token') || false
  },
   setCookies(token) {
      const expInHours = new Date(new Date().getTime() + 3600 * 60 * 1000);
      Cookie.set('token', token, { expires: expInHours })
    
  },

}
