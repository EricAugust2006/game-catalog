import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/GameDetails";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
