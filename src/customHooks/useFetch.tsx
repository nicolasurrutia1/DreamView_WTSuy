import { useEffect, useState } from "react";

export function useFetch(url: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const newData = await response.json();
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
