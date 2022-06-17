import { useReducer } from "react";

export default function useReducerOne() {
  //  reducer
  const [state, dispatch] = useReducer(reducer, {
    valor: 1000,
    mostrar: true,
  });

  // função reducer
  function reducer(state, action) {
    switch (action.type) {
      case "ADICIONAR":
        return {
          valor: state.valor + 1,
          mostrar: state.mostrar,
        };
      case "VISIBILIDADE":
        return {
          valor: state.valor,
          mostrar: !state.mostrar,
        };
      default:
        return state;
    }
  }

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />

      {state.mostrar ? (
        <>
          <p>Valor: {state.valor}</p>
          <button onClick={() => dispatch({ type: "ADICIONAR" })}>
            Adicionar
          </button>
        </>
      ) : (
        <p> Mostrar </p>
      )}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "VISIBILIDADE" });
        }}
      >
        Mostrar/Esconder
      </button>
    </>
  );
}
