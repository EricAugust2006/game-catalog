import { useEffect, useState } from "react";

// Importa apenas os TIPOS (TypeScript)
// gameList        → tipo usado no array de jogos
// gameListResponse→ tipo da resposta da API
import type { gameList, gameListResponse } from "../types/games";

// Importa a instância da API (geralmente Axios configurado)
import { api } from "../services/api";

// Componente principal da página Home
export default function Home() {
  //"games" terá todos os jogos com o tipo definido pelo "gameList"
  const [games, setGames] = useState<gameList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      // Faz uma requisição GET para o endpoint "games"
      // <gameListResponse> define o tipo esperado da resposta
      .get<gameListResponse>("games", {
        params: {
          // Envia a chave da API usando variável de ambiente do Vite
          key: import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        // Salva os jogos retornados pela API no estado
        setGames(res.data.results);
      })
      .catch((err) => {
        // Caso dê erro na requisição
        console.error("Error fetching games:", err);
      })
      .finally(() => {
        // Executa sempre, com sucesso ou erro
        // Finaliza o loading
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full h-screen p-4">
      {games.map((g) => (
        <div key={g.id}>
          <h2>{g.name}</h2>
          <p>{g.url}</p>
        </div>
      ))}
    </div>
  );
}
