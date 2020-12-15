function playerReducer(state = {all: []}, action) {
    switch(action.type) {
        case "FETCH_PLAYERS_SUCCESS" :
            return { ...state, all: action.payload };
        

        case "CREATE_PLAYER_SUCCESS":
            return { ...state, all: [...state.all, action.payload] };
        default:
            return state;
  
    }
}

export default playerReducer