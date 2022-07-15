import { Berries } from "../components/Berries";
import Home from "../components/Home";
import { PokeBalls } from "../components/PokeBalls";


const RoutesComponent = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/berries",
    component: Berries,
  },
  {
    path: "/poke-balls",
    component: PokeBalls,
  },
];

export default RoutesComponent;
