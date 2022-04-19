import { getMV } from '../../services/api_mv'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },
  //获取数据
  getTopMVData: async function (limit = 0 , reload = false) {
    if( reload ){
      this.setData({ topMVs:[], hasMore: true })
    }
    //判断是否还有数据，没有数据则不请求
    if( !this.data.hasMore ) return
    wx.showNavigationBarLoading()
    const res = await getMV(limit)
    console.log(res);
    //设置数据
    this.setData({ topMVs: this.data.topMVs.concat(res.data), hasMore: res.hasMore })
    wx.hideNavigationBarLoading()
    //由于我们开启了loading动画，所以我们加载完成后动画也还是会在的，手动触发一下向上滑这个动作，关闭他
    wx.stopPullDownRefresh()
  },
  //处理页面跳转
  handleVideoItemClick(event){
    console.log(event);
    const { id } = event.currentTarget.dataset.item
    console.log(id);
    wx.navigateTo({
      url: `../video-detail/index?id=${id}`,
    })
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