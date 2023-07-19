import {useEffect, useState} from "react";

export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const useApi = (url: string) => {
    const [data, setData] = useState<IPhoto[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(url);

                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw new Error('Request failed');
                }
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, isLoading, error};
};
