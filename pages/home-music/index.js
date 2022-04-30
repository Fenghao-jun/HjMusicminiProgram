// pages/home-music/index.js
import { getMusicBanner } from '../../services/api_music'
import { queryRect } from '../../utils/query-rect'
import { throttle } from '../../utils/throttle'
import { store } from '../../store/index'

const test = ()=>{
  console.log(1);
}
const throttleQueryRect = throttle(queryRect)
const throttleTest = throttle(test)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerData:[],
    swiperHeight:0,
    recommendSongs:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.handleBannerOnLoad()
    //请求推荐歌曲数据
    store.dispatch('getRankingActionData')
    store.onState('hotRanking',(nValue)=>{
      if(!nValue.tracks){ return }
      const recommendSongs = nValue.tracks.slice(0,6)
      this.setData({recommendSongs})
    })
  },
  /**
   * 点击了搜索框的处理
   */
  handleSearchClick :function (){
    wx.navigateTo({
      url: '../search-detail/index',
    })
  },
  /**
   * 请求数据
   */
  handleBannerOnLoad:async function(){
    const {banners} = await getMusicBanner()
    this.setData({bannerData:banners})
  },
  /**
   * 根据image组件mode处理后的图片高度规定swper组件
   */
  handleImageSize: function(){
    throttleQueryRect('.image').then((res)=>{
      this.setData({swiperHeight:res[0].height})
    })
  }
});
