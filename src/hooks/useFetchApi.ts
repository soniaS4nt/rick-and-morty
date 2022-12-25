import { ICharacter } from "pages/Characters/interface";
import { useEffect, useState } from "react";


const useFetchApi = () => {
    const [character, setCharacter] = useState<ICharacter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchData() {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const { results } = await data.json();
        setCharacter(results);
        setLoading(false);
      }
      fetchData();
    }, [page]);
    
  return {
    character,
    page,
    setPage,
    loading,
  }
}

export default useFetchApi