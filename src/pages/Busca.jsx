import { useState } from "react";
import { MovieCard } from "../components/MovieCard";

function Busca() {
  const [termoBusca, setTermoBusca] = useState("");
  const [filmes, setFilmes] = useState([]);

  async function realizarBusca(e) {
    e.preventDefault();

    if (!termoBusca) return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&langauge=pt=BR&query=${termoBusca}`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
      setFilmes = dados.results || []);
    } catch (erro) {
      console.error("Erro ao buscar filmes: ", erro;)
    }
  }

  return (
    <div>
      <h1>Buscar Filmes</h1>

      <form onSubmit={realizarBusca} className="form-busca">
        <input type="text" placeholder="Que filme procura?" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)}
      />
      <button type="submit">pesquisar</button>
      </form>
    </div>
  );
}

export default Busca;
