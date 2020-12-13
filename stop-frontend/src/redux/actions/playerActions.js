export const getPlayers = () => {
    return (dispatch) => {
        fetch(`http://locahost:3000/players`)
        .then((res) => res.json())
        .then((players) =>
        dispatch({ type: "FETCH_PLAYERS-SUCCESS", payload: players })
        )
    }
}

export const createPlayer = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player: data }),
      })
        .then((res) => res.json())
        .then((player) =>
          dispatch({ type: "CREATE_PLAYER_SUCCESS", payload: player })
        );
    };
  };