import { getMV } from '../../services/api_mv'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },
  getTopMVData: async function (limit = 0 , reload = false) {
    if( reload ){
      this.setData({ topMVs:[], hasMore: true })
    }
    if( !this.data.hasMore ) return
    const res = await getMV(limit)
    console.log(res);
    this.setData({ topMVs: this.data.topMVs.concat(res.data), hasMore: res.hasMore })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getTopMVData()
  },

  onPullDownRefresh: async function (params) {
    this.getTopMVData(0,true)
  },

  //生命周期下拉到底加载更多
  onReachBottom: async function () {
    this.getTopMVData( this.data.topMVs.length )
  },


})