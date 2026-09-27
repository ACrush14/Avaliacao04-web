import { Link } from "react-router-dom";

function MovieCard({ filme }) {
  const imageUrl = filme.poster_path
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : `https://via.placeholder.com/500x750?text=Sem+Imagem`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={filme.title} />
      <h3>{filme.title}</h3>
      <Link to={`/detalhes/${filme.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default MovieCard;
