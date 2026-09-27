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

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@catalogoFilmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id,
    );

    if (hasFilme) {
      alert("Este filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@catalogoFilmes", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso!");
  }

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
        <button onClick={salvarFilme}>Salvar nos Favoritos</button>
      </div>
    </div>
  );
}

export default Detalhes;
