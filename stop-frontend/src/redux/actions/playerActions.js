import { API_ROOT } from '../../constants/index';

export const getPlayers = () => {
    return (dispatch) => {
        fetch(`${API_ROOT}/players`)
        .then((res) => res.json())
        .then((players) =>
        dispatch({ type: "FETCH_PLAYERS-SUCCESS", payload: players })
        )
    }
}

export const createPlayer = (data) => {
  console.log("inside create action")
    return (dispatch) => {
        fetch(`${API_ROOT}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: data }),
        
      })
      
        // .then((res) => res.json())
        // .then((player) =>
        //   dispatch({ type: "CREATE_PLAYER_SUCCESS", payload: player })
        // );
    };
  };