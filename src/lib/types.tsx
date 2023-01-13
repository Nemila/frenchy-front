export type Anime = {
  genres: string[];
  id: number;
  nb_eps: string;
  others: string;
  popularity: number;
  score: string;
  start_date_year: string;
  status: string;
  title: string;
  title_english: string;
  title_french: string | null;
  title_romanji: string;
  type: string;
  url: string;
  url_image: string;
};

export type Episode = {
  episode: string;
  time: string;
  title: string;
  url: string;
  url_image: string;
};

export type AnimeDetailsType = {
  banner: string;
  eps: Episode[];
  synop: string;
  trailer: string;
};
