import { useEffect, useState } from "react";

interface ApiResponse<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
  }

export function useFetch<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const newData = await response.json() as T;
                setData(newData);                
            } catch(e: unknown) {
                if (e instanceof Error) { 
                    setError(e);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    return { data, loading, error };
}
