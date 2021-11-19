import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import './global.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route exact path="/filme/:id" element={<Movie />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
