import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
// import { HomePage } from "./Pages/HomePage";

// import FavouritePage from "./Pages/FavouritePage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/favourites" element={<FavouritePage />} />
  //     </Routes>
  //   </Router>
  // );
  <>
  <RouterProvider router={router} />

  </>
  );
}

export default App;
