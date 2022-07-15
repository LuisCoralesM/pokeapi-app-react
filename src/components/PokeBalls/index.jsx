import React, { useCallback, useEffect } from "react";
import { usePoke } from "../../context/pokeStore";
import { listPokeBalls } from "../../sdk/pokeApi";
import { capitalize } from "../../utils/capitalizeString";
import { Card } from "../Card";

export const PokeBalls = () => {
  const { pokeBalls, dispatch } = usePoke();

  const getPokeBalls = useCallback(async () => {
    const data = await listPokeBalls();
    dispatch({ type: "SET_POKE_BALLS", args: data.filter((a) => a.id <= 16) });
  }, []);

  useEffect(() => {
    getPokeBalls();
  }, [getPokeBalls]);

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {pokeBalls.map((items) => (
          <div key={items.id}>
            <Card>
              <li className="text-center text-base font-medium">
                {capitalize(items.name)}
              </li>
              <li>
                <img
                  className="my-0 mx-auto h-8 w-8"
                  src={items.sprites.default}
                  alt={items.name}
                />
              </li>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};
