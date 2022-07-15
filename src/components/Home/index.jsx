import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { usePoke } from "../../context/pokeStore";
import { listPokemon } from "../../sdk/pokeApi";
import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";
import { SearchPokemon } from "./SearchPokemon";

const Home = () => {
  const { dispatch, pokemonDetail } = usePoke();
  const [page, setPage] = useState(0);

  const getPokemon = useCallback(async () => {
    const data = await listPokemon(page);
    dispatch({ type: "SET_POKEMON", args: data });
  }, [page]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <div>
      <SearchPokemon />
      {pokemonDetail ? (
        <PokemonDetails />
      ) : (
        <>
          <PokemonList />
          <div className="flex justify-between mt-3">
            <button
              onClick={() => setPage(Math.max(page - 20, 0))}
              type="button"
              className="w-28 justify-center inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowNarrowLeftIcon className="h-5 w-5 mr-1" />
              Previous
            </button>
            <button
              onClick={() => setPage((prev) => prev + 20)}
              type="button"
              className="w-28 justify-center inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
              <ArrowNarrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
