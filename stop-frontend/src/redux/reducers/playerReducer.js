const initialState = { time: null, allPlayers: [] }
function playerReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PLAYERS_SUCCESS" :
            return { ...state, allPlayers: action.payload };
        

        case "CREATE_PLAYER_SUCCESS":
            return { ...state, allPlayers: [...state.allPlayers, action.payload] };

        case "SEND_TIME":
            // debugger
            return {...state, time: action.payload}

        // case "PLAYER_INFO":
        //     return {...state, player: action.payload}
        default:
            return state;
  
    }
}

export default playerReducer