import mRequire from './index'
import mRequest from './index'

export function getSearchHot() {
	return mRequire.get('/search/hot')
}

export function getSearchSuggest(keyword) {
	return mRequire.get('/search/suggest', {
		keyword,
		type: 'mobile'
	})
}