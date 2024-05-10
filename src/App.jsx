import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/favouritecontext.jsx";
import DetailedView from "./components/detailedview/detailedview.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import MainPage from "./components/mainpage/mainpage.jsx";
import Footer from "./components/footer/footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            exact
            path="/detailed-view/:id/:genre"
            element={<DetailedView />}
          />
        </Routes>

        <Footer />
      </FavoritesProvider>
    </Router>
  );
}

export default App;
