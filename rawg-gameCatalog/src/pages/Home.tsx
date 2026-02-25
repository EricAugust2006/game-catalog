import { useEffect, useState } from "react";
import type { Game, gameList, gameListResponse } from "../types/games";
import { api } from "../services/api";

export default function Home() {
  const [games, setGames] = useState<gameList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<gameListResponse>("games", {
        params: {
          key: import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching games:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
  //     </div>
  //   );
  // }

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
