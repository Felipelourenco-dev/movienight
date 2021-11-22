import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './global.css';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route exact path="/filme/:id" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
         
          
        </Routes>
        <ToastContainer autoClose={3000} />
      </Router>
    </>
  );
}

export default App;
