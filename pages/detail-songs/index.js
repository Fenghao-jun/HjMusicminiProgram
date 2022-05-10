// pages/detail-songs/index.js
import { store } from '../../store/index'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		rankingSongs:[],
		rankingName:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const { rankName } = options
		store.onState(rankName,this.handleRankName)
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	handleRankName:function(value){
		this.setData({rankingSongs:value.tracks})
		this.setData({rankingName:value.name})
	}
})