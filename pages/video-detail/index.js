// pages/video-detail/index.js
import { getMVDetail, getMVUrl, getRelatedVideo } from '../../services/api_mv'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		mvDetails: {},
		mvUrl: {},
		relatedVideo: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const { id } = options
		// console.log(id);
		this.getPageData(id)

	},

	//获取页面数据
	getPageData: async function (id) {
		const results = await Promise.allSettled([getMVDetail(id), getMVUrl(id), getRelatedVideo(id)])
		//对应data的数据字段，promise接收后根据情况和index来修改对应的数据
		const fieldsName = ['mvDetails', 'mvUrl', 'relatedVideo']
		results.forEach((result, index) => {
			console.log(result);
			if (result.status === 'fulfilled') {
				this.setData({ [fieldsName[index]]: result.value.data })
			}
		})
	},
})