import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchUrl() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
