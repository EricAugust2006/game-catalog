import type { PlatformWrapper } from "./plataform";
import type { Genre } from "./genre";

export interface games {
  id: Number;
  name: String;
  slug: String;
  released: String;
  background_image: String;
  rating: Number;
  rating_count: Number;
  rating_top: Number;
  updated: String;
  genres: Genre[];
  platforms: PlatformWrapper[];
}
