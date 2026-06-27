const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
      </div>

    </div>
  );
};

export default MovieCard;