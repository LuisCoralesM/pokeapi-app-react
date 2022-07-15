import { createContext, useContext, useReducer } from "react";

const defaultState = {
  pokeBalls: [],
  berries: [],
  pokemon: [],
  pokemonDetail: undefined,
};

const initReducer = () => {
  return defaultState;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POKE_BALLS": {
      const args = action.args || [];

      return {
        ...state,
        pokeBalls: args,
      };
    }
    case "SET_BERRIES": {
      const args = action.args || [];

      return {
        ...state,
        berries: args,
      };
    }
    case "SET_POKEMON": {
      const args = action.args || [];

      return {
        ...state,
        pokemon: args,
      };
    }
    case "SET_POKEMON_DETAILS": {
      const args = action.args;

      return {
        ...state,
        pokemonDetail: args,
      };
    }

    default:
      return state;
  }
};

export const PokeContext = createContext(defaultState);
export const usePoke = () => useContext(PokeContext);
export const usePokeReducer = () => useReducer(reducer, {}, initReducer);

const ProviderPoke = ({ children }) => {
  const [state, dispatch] = usePokeReducer();

  return (
    <PokeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default ProviderPoke;
