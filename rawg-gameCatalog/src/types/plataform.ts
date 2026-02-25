export interface PlatformWrapper {
  platform: Platform;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
