import { HYEventStore } from 'hy-event-store'

import { getRankingSongs } from '../services/api_music'

const store = new HYEventStore({
	state:{
		hotRanking:[]
	},
	actions:{
		getRankingActionData(ctx){
			getRankingSongs(1).then((res)=>{
				ctx.hotRanking = res.playlist
			})
		}
	}
})

export {
	store
}