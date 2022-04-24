// pages/home-music/index.js
import { getMusicBanner } from '../../services/api_music'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerData:[],
    swiperHeight:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.handleBannerOnLoad()
  },
  /**
   * 点击了搜索框的处理
   */
  handleSearchClick :function (){
    wx.navigateTo({
      url: '../search-detail/index',
    })
  },
  handleBannerOnLoad:async function(){
    const {banners} = await getMusicBanner()
    this.setData({bannerData:banners})
  },
  handleImageSize:function(event){
    const query = wx.createSelectorQuery()
    query.select('.image').boundingClientRect()
    query.exec((res)=>{       
      this.setData({swiperHeight:res[0].height})
    })
  }
});
