import { URL } from "./url";
import qs from "qs";
import instance from "./config";

const request = (url, params, isGet, type, isCon) => {
  let method = isGet ? "get" : type ? type : "post";
  if (isCon) {
    url = url + "/" + params;
  }
  if (!(params instanceof Array)) {
    params = Object.assign({ _: +new Date() }, params || {});
  }
  url = isGet ? `${url}?${qs.stringify(params)}` : `${url}`;
  return instance({
    url,
    method,
    data: params
  });
};
const getDicTypePage = data => request(URL.systemSet.dicTypePage, data, true);
const getDicDetailPage = data =>
  request(URL.systemSet.dicDetailPage, data, true);
const dicDetailAdd = data => request(URL.systemSet.dicAdd, data, false);
export { getDicTypePage, getDicDetailPage, dicDetailAdd };
