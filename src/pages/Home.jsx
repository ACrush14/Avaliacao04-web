import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`;

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        setFilmes(dados.results || []);
      } catch (erro) {
        console.error("Erro ao buscar filmes da API: ", erro);
      }
    }

    buscarFilmes();
  }, []);
  return (
    <div>
      <h1>Catálogo de Filmes Populares</h1>
      <div className="movies-grid">
        {filmes.map((filme) => (
          <MovieCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
}

export default Home;
