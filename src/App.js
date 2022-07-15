import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import RoutesComponent from "./routes/Routes";
import ProviderPoke from "./context/pokeStore";

function App() {
  return (
    <div>
      <ProviderPoke>
        <BrowserRouter>
          <Layout>
            <Routes>
              {RoutesComponent.map((route, index) => (
                <Route
                  path={route.path}
                  key={index}
                  element={React.createElement(route.component)}
                />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProviderPoke>
    </div>
  );
}

export default App;
