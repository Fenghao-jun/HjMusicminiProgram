import mRequire from './index'
export  function getMV( offset, limit = 10 ) {
  return mRequire.get('/top/mv',{
    offset,
    limit
  })
}