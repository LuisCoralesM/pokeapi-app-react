const listPokeBalls = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/item/`);
  const dataPokemon = await response.json();

  const massiveConsult = await Promise.all(
    dataPokemon.results.map(async ({ url }) => {
      const dataFetch = await fetch(url);
      const dataJson = await dataFetch.json();
      return dataJson;
    })
  );

  return massiveConsult;
};

const listBerries = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/item/?limit=64&offset=125`);
  const dataPokemon = await response.json();

  const massiveConsult = await Promise.all(
    dataPokemon.results.map(async ({ url }) => {
      const dataFetch = await fetch(url);
      const dataJson = await dataFetch.json();
      return dataJson;
    })
  );

  return massiveConsult;
};

const listPokemon = async (page = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`
  );
  const dataPokemon = await response.json();

  const massiveConsult = await Promise.all(
    dataPokemon.results.map(async ({ url }) => {
      const dataFetch = await fetch(url);
      const dataJson = await dataFetch.json();
      return dataJson;
    })
  );

  return massiveConsult;
};

const detailPokemon = async (name) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const response = await data.json();

  return {
    name,
    type1: response.types[0].type.name,
    type2: response.types[1] ? response.types[1].type.name : "",
    hp: response.stats[0].base_stat,
    attack: response.stats[1].base_stat,
    defense: response.stats[2].base_stat,
    specialAttack: response.stats[3].base_stat,
    specialDefense: response.stats[4].base_stat,
    speed: response.stats[5].base_stat,

    img: response.sprites.front_shiny,
  };
};

export { listPokeBalls, listPokemon, detailPokemon, listBerries };
