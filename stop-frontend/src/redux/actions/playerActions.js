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

// export const createPlayer = (data) => {
//   // console.log("inside create action")
//     return (dispatch) => {
//         fetch(`http://localhost:3000/players`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ player: data }),
        
//       })
      
//         .then((res) => res.json())
//         .then((player) =>
//           dispatch({ type: "CREATE_PLAYER_SUCCESS", payload: player })
//         );
        
//     };
    

//   };

  export const createPlayer = (data) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: data })
      })
        .then((res) => res.json())
        .then((player) => {
        // debugger
          dispatch({ type: "CREATE_PLAYER_SUCCESS", payload: player.player })
        })
        .catch((error) => console.log(error))
        
    };
  };

  export const deletePlayer = (playerId) => {
    console.log("inside delete action")
    return (dispatch) => {
      fetch(`http://localhost:3000/players/${playerId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((id) => console.log(id))
        .catch((error) => console.log(error))
        
    };
  }

  export const sendTime = (time) => {
    return dispatch => {
      // debugger
      dispatch({ type: "SEND_TIME", payload: time })
    }
  }

  export const playerAns = (player) => {
    return dispatch => {
      // debugger
      dispatch({ type: "PLAYER_ANS", payload: player })
    }
  }

  export const setTime = (time) => {
    return dispatch => {
      // debugger
      dispatch({ type: "SET_TIME", payload: time })
    }
  }

  // dispatch({ type: "DELETE_PLAYER_SUCCESS", payload: id }))