import React, { useState } from "react";
import { usePoke } from "../../context/pokeStore";
import { capitalize } from "../../utils/capitalizeString";
import { Card } from "../Card";

const PokemonList = () => {
  const { pokemon } = usePoke();
  const [clickedName, setClickedName] = useState();

  const handlePokemonClick = (pokemonName) => {
    clickedName === pokemonName
      ? setClickedName(undefined)
      : setClickedName(pokemonName);
  };

  return (
    <div className="pt-3">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {pokemon.map(({ name, sprites, types, stats }) => (
          <div
            className="cursor-pointer"
            key={name}
            onClick={() => handlePokemonClick(name)}
          >
            <Card>
              <li className="text-center text-base font-medium">
                {capitalize(name)}
              </li>
              <li>
                <img
                  className="my-0 mx-auto h-24 w-24"
                  src={sprites.front_default}
                  alt={name}
                />
              </li>
              {clickedName === name ? (
                <ul className="flex flex-col items-center text-left">
                  <li className="text-base font-medium">
                    Type: {capitalize(types[0].type.name)}
                  </li>
                  {types[1] ? (
                    <li className="text-base font-medium">
                      Type 2: {capitalize(types[1].type.name)}
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="text-base font-medium">
                    Hp: {stats[0].base_stat}
                  </li>
                  <li className="text-base font-medium">
                    Attack: {stats[1].base_stat}
                  </li>
                  <li className="text-base font-medium">
                    Defense: {stats[2].base_stat}
                  </li>
                </ul>
              ) : null}
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
