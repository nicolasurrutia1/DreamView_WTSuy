import { useState, useEffect } from 'react';

const usePosterUrl = (posterPath: string | null) => {
  const [posterUrl, setPosterUrl] = useState<string>('');

  useEffect(() => {
    const baseUrl = 'https://image.tmdb.org/t/p';
    const posterSize = 'w400';

    if (posterPath) {
      const fullPosterUrl = `${baseUrl}/${posterSize}${posterPath}`;
      setPosterUrl(fullPosterUrl);
    }
  }, [posterPath]);

  return posterUrl;
};

export default usePosterUrl;
