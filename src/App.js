import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/home";
import MovieList from "./Components/movieList/movieList";
import Movie from "./Components/movieDetail/movie";

function App() {
  return (
    <div className="App">
    //basename="/react-dummy"
      <Router >
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route
            path="movies/:type"
            element={<MovieList/>}
          ></Route>
          <Route path="/*" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
