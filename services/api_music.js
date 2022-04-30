import mRequire from './index'
import mRequest from './index'

/**
 * 获取音乐的轮播图
 */
export function getMusicBanner(){
	return mRequire.get('/banner',{
		type:2
	})
}

export function getRankingSongs(idx=0) {
	return mRequire.get('/top/list',{
		idx
	})
	
}