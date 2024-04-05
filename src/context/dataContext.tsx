import React, { createContext, useContext } from "react";
import { useFetch } from "../customHooks/useFetch";

interface Data {
  // Define la estructura de tu objeto de datos si es necesario
}

interface ContextProps {
  data: Data[] | null;
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
  const { data, loading, error } = useFetch(
    `${popularMoviesUrl}`
  );
  console.log(error)
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
