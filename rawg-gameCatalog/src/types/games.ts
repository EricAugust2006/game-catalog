// Importa os tipos usados dentro desta interface
// PlatformWrapper representa as plataformas (PC, PS, Xbox, etc.)
import type { PlatformWrapper } from "./plataform";

// Genre representa os gêneros do jogo (Action, RPG, etc.)
import type { Genre } from "./genre";

// Interface usada para uma lista simples de jogos
// Geralmente usada em listagens mais básicas
export interface gameList {
  id: string;
  name: string; // Nome do jogo
  url: string; // URL relacionada ao jogo (ex: página da API)
}

// Interface que representa a resposta da API
// quando retorna uma lista de jogos
export interface gameListResponse {
  id: string;
  count: number;
  next: string | null;
  previous: string | null;
  results: gameList[]; // Array de jogos
}

// Interface principal que representa um jogo completo
// com todos os detalhes usados na aplicação
export interface Game {
  id: number; // ID único do jogo
  name: string; // Nome do jogo
  slug: string; // Identificador usado em URLs
  released: string; // Data de lançamento
  background_image: string; // Imagem principal do jogo
  rating: number; // Avaliação média
  rating_count: number; // Quantidade de avaliações
  rating_top: number; // Nota máxima possível
  updated: string; // Data da última atualização
  genres: Genre[]; // Lista de gêneros do jogo
  platforms: PlatformWrapper[]; // Lista de plataformas disponíveis
}
