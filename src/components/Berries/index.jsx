/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { listBerries } from "../../sdk/pokeApi";
import { usePoke } from "../../context/pokeStore";
import { Card } from "../Card";
import { capitalize } from "../../utils/capitalizeString";

export const Berries = () => {
  const { berries, dispatch } = usePoke();

  const getBerries = useCallback(async () => {
    const data = await listBerries();
    dispatch({ type: "SET_BERRIES", args: data.filter((a) => a.id <= 190) });
  }, []);

  useEffect(() => {
    getBerries();
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {berries.map((items) => (
          <div key={items.id}>
            <Card>
              <li className="text-center text-base font-medium">
                {capitalize(items.name).replace("-", " ")}
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
