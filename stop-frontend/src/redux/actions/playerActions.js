export const getPlayers = () => {
    return (dispatch) => {
        fetch(`http://locahost:3000/players`)
        .then((res) => res.json())
        .then((players) =>
        dispatch({ type: "FETCH_PLAYERS-SUCCESS", payload: players })
        )
    }
}