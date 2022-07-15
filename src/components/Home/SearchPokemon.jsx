import { SearchIcon } from "@heroicons/react/solid";
import React, { useCallback, useEffect, useState } from "react";
import { usePoke } from "../../context/pokeStore";
import { detailPokemon } from "../../sdk/pokeApi";

export const SearchPokemon = () => {
  const { dispatch } = usePoke();
  const [search, setSearch] = useState();

  const getPokeSearch = useCallback(
    async (e) => {
      e.preventDefault();

      const data = await detailPokemon(search);
      dispatch({ type: "SET_POKEMON_DETAILS", args: data });
    },
    [dispatch, search]
  );

  useEffect(() => {
    if (!search || !search.length) {
      dispatch({ type: "SET_POKEMON_DETAILS", args: undefined });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <form onSubmit={(e) => getPokeSearch(e)}>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600 border rounded">
          <button
            onClick={() => getPokeSearch()}
            className="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer"
          >
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <input
            id="search-field"
            className=" block w-full h-full pl-12 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
