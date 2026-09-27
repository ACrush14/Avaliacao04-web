import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detalhes() {
  const { id } = useParams();

  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function buscarDetalhes() {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`;

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        setFilme(dados);
      } catch (erro) {
        console.error("Erro ao buscar detalhes do filme: ", erro);
      }
    }

    buscarDetalhes();
  }, [id]);

  if (!filme) {
    return <div>Carregando informações do filme....</div>;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;

  return (
    <div className="detalhes-page">
      <img src={imageUrl} alt={filme.title} />
      <div className="info">
        <h1>{filme.title}</h1>
        <p>{filme.overview}</p>
        <p>Avaliação: {filme.vote_average} / 10</p>
      </div>
    </div>
  );
}

export default Detalhes;
