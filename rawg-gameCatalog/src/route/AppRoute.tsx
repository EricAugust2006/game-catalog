import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Details/:name"} element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
