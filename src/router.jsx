import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { HomePage } from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import FavouritePage from "./Pages/FavouritePage";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path=":id" element={<MovieDetail />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/favourites" element={<FavouritePage />} />
    
      <Route path="/singup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
