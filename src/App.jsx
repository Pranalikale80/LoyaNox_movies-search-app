import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import axios from "axios";

const API_KEY = "c791d4f7";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      setMovies(res.data.Search || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      
      <h1 className="text-4xl font-bold text-center mb-6">
        🎬 Movie Search App
      </h1>

      <SearchBar onSearch={searchMovies} />

      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}

export default App;