import "./App.css";
import { HomePage } from "./Pages/HomePage";

import FavouritePage from "./Pages/FavouritePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
