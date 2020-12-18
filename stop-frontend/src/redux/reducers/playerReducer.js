const initialState = { time: null, allPlayers: [], playerAns: [] }
function playerReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PLAYERS_SUCCESS" :
            return { ...state, allPlayers: action.payload };
        

        case "CREATE_PLAYER_SUCCESS":
            return { ...state, allPlayers: [...state.allPlayers, action.payload] };

        case "DELETE_PLAYER_SUCCESS":
            console.log("inside delete reducer")
            return { ...state, allPlayers: state.allPlayers.filter(player => player.id !== action.payload) };

        case "SEND_TIME":
            // debugger
            return {...state, time: action.payload}

        case "PLAYER_ANS":
            // debugger
            return { ...state, playerAns: [...state.playerAns, action.payload] };
        
        case "SET_TIME":
            // debugger
            return {...state, time: action.payload}
        default:
            return state;
  
    }
}

export default playerReducer