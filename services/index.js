const BASE_URL = "http://123.207.32.32:9001";

class MRequire {
  request(url, method, params) {
    return new Promise((reslove, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: params,
        method: method,
        success: (result) => {
          console.log(result.data);
          reslove(result.data);
        },
        fail: reject,
      });
    });
  }

  get(url, params) {
    return this.request(url, "GET", params);
  }

  post(url, data) {
    return this.request(url, "POST", data);
  }
}

const mRequire = new MRequire();

export default mRequire;
export * from './api_mv'
export * from './api_search'
