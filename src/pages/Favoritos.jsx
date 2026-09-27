import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@catalogoFilmes");

    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  return (
    <div className="favoritos-page">
      <h1>Meus Filmes Favoritos </h1>
      {filmes.length === 0 ? (
        <p>Você ainda não tem filmes salvos.</p>
      ) : (
        <div className="movies-grid">
          {filmes.map((filme) => (
            <MovieCard key={filme.id} filme={filme} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
