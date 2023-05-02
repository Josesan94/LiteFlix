export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface PopularMovie {
  id: number;
  title: string;
  backdrop_path: string;
  release_date:string;
  vote_average:number
  
}

export interface MovieEndpoint {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Ko = "ko",
  Nl = "nl",
}
