import axios from "axios";
import { URL } from "../request/url";
import { message } from "antd";
import CONST from "./constant";
const instance = axios.create({
  // baseURL: "evo-apigw/evo-biosafe/1.0.0/",
  baseURL: "cims/1.0.0",
  timeout: "50000",
  headers: {
    userId: CONST.userId,
    userName: CONST.userName,
    token: CONST.token
  }
});
//配置消息
message.config({
  maxCount: 1
});
// 添加请求拦截器
instance.interceptors.request.use(
  request => {
    // message.loading('处理中...', 0)
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response.data;
    }
    message.error(response.data.errMsg, 2);
    if (response.data.code === "0000001") {
      window.location.href = URL.COMMON.timeOut;
    }
    return response.data;
  },
  err => {
    let errMsg = "未知错误";
    if (err) {
      switch (err.response ? err.response.status : "") {
        case 408:
          window.location.href = URL.COMMON.timeOut;
          break;
        case 404:
          errMsg = "请求错误,未找到该资源";
          break;
        case 500:
          errMsg = "服务器异常";
          break;
        case 504:
          errMsg = "网关超时";
          break;
        default:
          errMsg = err.message;
      }
    } else {
      errMsg = "连接到服务器失败";
    }
    message.error(errMsg, 2);
    return [err, null];
  }
);
export default instance;
