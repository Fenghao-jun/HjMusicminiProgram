import mRequire from './index'
/**
 * 获取mv列表
 * @param {number} offset 偏移量
 * @param {number} limit 请求数量
 */
export  function getMV( offset, limit = 10 ) { 
  return mRequire.get('/top/mv',{ 
    offset, 
    limit 
  }) 
}  
/**
 * 获取mv详情
 * @param {number} mvid mv的id
 */
export function getMVDetail(mvid) {
  return mRequire.get('/mv/detail',{
    mvid
  })
}

/**
 * 获取mv具体播放地址
 * @param {number} id mv的id 
 */
export function getMVUrl(id) {
  return mRequire.get('/mv/url',{
    id
  })
}

/**
 * 获取mv相关的视频
 * @param {number} id 相关视频
 */
export function getRelatedVideo(id) {
  return mRequire.get('/related/allvideo',{
    id
  })
}