export default function useReducerTwo() {
  const [state, dispatch] = useReducer(reducer, {
    score_1: 0,
    score_2: 0,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SCORE1":
        return {
          score_1: state.score_1 + 1,
          score_2: state.score_2,
        };
      case "SCORE2":
        return {
          score_2: state.score_2 + 1,
          score_1: state.score_1,
        };
      case "RESET":
        return {
          score_1: (state.score_1 = 0),
          score_2: (state.score_2 = 0),
        };
    }
  }

  // ------------------------------------------
  function adicionar1() {
    dispatch({ type: "SCORE1" });
  }

  function adicionar2() {
    dispatch({ type: "SCORE2" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />
      <h3>Player 1 : {state.score_1}</h3>
      <h3>Player 2 : {state.score_2}</h3>

      <button onClick={adicionar1}>Player 1</button>
      <button onClick={adicionar2}>Player 2</button>
      <button onClick={reset}>Reset Score</button>
    </>
  );
}
