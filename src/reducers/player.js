import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}

let date = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  var today = dd+'/'+mm+'/'+yyyy;
  return today
}


export default function Player(state=initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return {
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            created: date(),
            updated: null
          }
        ],
        selectedPlayerIndex: state.selectedPlayerIndex
      };
      
      case PlayerActionTypes.REMOVE_PLAYER: 
        return {
          players: [
            ...state.players.slice(0, action.index),
            ...state.players.slice(action.index + 1)
          ],
          selectedPlayerIndex: -1
        };
      
      
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return {
      players: 
        state.players.map((player, index) => {
          if(index === action.index) {
            return {
            ...player,
            score: player.score + action.score,
            updated: date()
            };
          }
        return player;
        })
      ,
      selectedPlayerIndex: state.selectedPlayerIndex
    }
      
    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index
      }
      
    default:
      return state;
  }
}
