import React, { createContext, useContext } from "react";
import { useFetch } from "../customHooks/useFetch";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface ContextProps {
  data: MovieResponse | null;
  loading: boolean;
  error: Error | null;
}

const DataContext = createContext<ContextProps>({
  data: null,
  loading: false,
  error: null
});

export const useDataContext = () => {
  return useContext(DataContext);
};

const baseURL = "https://api.themoviedb.org/3"; //SACAR w 
const apiKey = import.meta.env.VITE_API_KEY;
const popularMoviesUrl = `${baseURL}/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;


export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useFetch<MovieResponse>(
    `${popularMoviesUrl}`
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
