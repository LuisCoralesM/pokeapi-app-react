import React from "react";
import { usePoke } from "../../context/pokeStore";
import { capitalize } from "../../utils/capitalizeString";
import { Card } from "../Card";

const PokemonDetails = () => {
  const { pokemonDetail: pokemon } = usePoke();
  return (
    <div className="pt-8">
      <Card>
        <div className="flex justify-around flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-center">
            <img className="w-24 h-24" src={pokemon.img} alt={pokemon.img} />
            <p className="text-base font-medium">{capitalize(pokemon.name)}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-base font-medium text-gray-500">Type 1: {capitalize(pokemon.type1)}</p>
            {pokemon.type2 === "" ? "" : <p className="text-base font-medium text-gray-500">Type 2: {capitalize(pokemon.type2)}</p>}
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-base font-medium text-yellow-500">Hp: {pokemon.hp}</p>
            <p className="text-base font-medium text-yellow-500">Attack: {pokemon.attack}</p>
            <p className="text-base font-medium text-yellow-500">Defense: {pokemon.defense}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-base font-medium text-blue-500">Special Attack: {pokemon.specialAttack}</p>
            <p className="text-base font-medium text-blue-500">Special Defense: {pokemon.specialDefense}</p>
            <p className="text-base font-medium text-blue-500">Speed: {pokemon.speed}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PokemonDetails;
