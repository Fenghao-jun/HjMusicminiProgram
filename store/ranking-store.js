import { HYEventStore } from "hy-event-store";

import { getRankingSongs } from "../services/api_music";
const typeMap = {
  0:'hotRanking',
  1:'newRanking',
  2:'originalRanking',
  3:'soarRanking'
}

const store = new HYEventStore({
  state: {
    hotRanking: {},
    newRanking:{},
    //原创
    originalRanking:{},
    //飙升  
    soarRanking:{}
  },
  actions: {
    getRankingActionData(ctx) {
      for(let i =0;i<4;i++){
        getRankingSongs(i).then((res) => {
          const targetField = typeMap[i]
          ctx[targetField]= res.playlist;
        });
      }
    },
  },
});

export { store };
