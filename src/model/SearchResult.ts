import { Movie } from "./Movie";
export type SearchResult = {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
};

export type MovieSearchResult = {
  completed: boolean;
  hasData: boolean;
  movies: Movie[];
};
