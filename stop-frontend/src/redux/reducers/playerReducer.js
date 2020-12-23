const initialState = { time: null, allPlayers: [], playerAns: [], answer: {}, requesting: false}

function playerReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PLAYER_SUCCESS" :
        //    debugger
            return {...state, answer: action.payload, requesting: false }

        case "LOADING_PLAYER" :
            return {...state, requesting: true}
            
        case "CREATE_PLAYER_SUCCESS":
            return { ...state, allPlayers: [...state.allPlayers, action.payload] };

        case "DELETE_PLAYER_SUCCESS":
            console.log("inside delete reducer")
            return { ...state, playerAns: state.playerAns.filter(player => player.id !== action.payload) };

        case "SEND_TIME":
            // debugger
            return {...state, time: action.payload}

        case "PLAYER_ANS":
            // debugger
            return { ...state, playerAns: [...state.playerAns, action.payload] };

        case "RESET":
        // debugger
            return initialState
    
        default:
            return state;
  
    }
}

export default playerReducer