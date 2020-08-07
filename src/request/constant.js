
/* eslint-disable */
function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}
let CONST = {
    getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },
    userId: getUrlKey("userId") ? getUrlKey("userId") : (localStorage.getItem('userId') ? localStorage.getItem('userId') : "1"),
    userName: getUrlKey("userName") ? getUrlKey("userName") : (localStorage.getItem('userName') ? localStorage.getItem('userName') : "system"),
    token: getUrlKey("token") ? getUrlKey("token") : (localStorage.getItem('token') ? localStorage.getItem('token') : "a477a6cfb1e5e1e12bc18e5a06831cf9"),
}
export default CONST