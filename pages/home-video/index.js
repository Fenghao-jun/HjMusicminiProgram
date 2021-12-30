import { getMV } from '../../services/api_mv'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //更改为await
    const res = await getMV(0)
    this.setData({ topMVs: res.data })
  },
})