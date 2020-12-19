import { API_ROOT } from '../../constants/index';


export const getPlayer = (playerId) => {
  console.log(playerId)
  console.log("inside the getPlayer action")
    return (dispatch) => {
      console.log("inside dispatch")
        fetch(`${API_ROOT}/players/${playerId}`)
        .then((res) => res.json())
        .then((player) => dispatch({ type: "FETCH_PLAYER_SUCCESS", payload: player }))
        .catch((error) => console.log(error))
        
        
    }
}


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
    console.log(playerId)
    return (dispatch) => {
      console.log(playerId)
      fetch(`http://localhost:3000/players/${playerId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(({id}) => dispatch({ type: "DELETE_PLAYER_SUCCESS", payload: id }))
        .catch((error) => console.log(error))
    }   
    
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

 

  