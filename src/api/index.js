import Axios from 'axios';
import baseURL, { URLS } from './URLS';

const appkey = 'pengqunfang_1617187141543';
const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

request.interceptors.response.use((value) => value.data);

// 获取侧边导航的接口
const getSideList = (type) => request.get(
  URLS.getSide,
  { params: { type } },
);
// 获取商品列表的接口
const getGoodsList = (type, size, sort, page) => request.get(
  URLS.getGoodsList,
  {
    params: {
      type, size, sort, page,
    },
  },
);

export default {
  getSideList,
  getGoodsList,
};
