// pages/home-music/index.js
import { getMusicBanner, getMenuListSongs } from "../../services/api_music";
import { queryRect } from "../../utils/query-rect";
import { throttle } from "../../utils/throttle";
import { store } from "../../store/index";

const throttleQueryRect = throttle(queryRect);
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerData: [],
    swiperHeight: 0,
    recommendSongs: [],
    hotSongMenu: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getPageData();
    //请求推荐歌曲数据
    store.dispatch("getRankingActionData");
    store.onState("hotRanking", (nValue) => {
      if (!nValue.tracks) {
        return;
      }
      const recommendSongs = nValue.tracks.slice(0, 6);
      this.setData({ recommendSongs });
    });
  },
  /**
   * 点击了搜索框的处理
   */
  handleSearchClick: function () {
    wx.navigateTo({
      url: "../search-detail/index",
    });
  },
  /**
   * 请求数据
   */
  getPageData: function () {
    getMusicBanner().then((res) => {
      this.setData({ bannerData: res.banners });
    });
    getMenuListSongs().then((res) => {
      console.log(res);
      this.setData({ hotSongMenu: res.playlists });
    });
  },
  /**
   * 根据image组件mode处理后的图片高度规定swper组件
   */
  handleImageSize: function () {
    throttleQueryRect(".image").then((res) => {
      this.setData({ swiperHeight: res[0].height });
    });
  },
});
