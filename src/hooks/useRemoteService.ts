import axios from "axios";
import { useEffect, useState } from "react";

const useRemoteService = (initialUrl: string, initial: any[] | any = []) => {
  const [data, setData] = useState<any>(initial);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(false);
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [url]);

  return { data, loading, error, setUrl };
};

export default useRemoteService;
