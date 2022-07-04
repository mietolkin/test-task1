// custom hook for fetching data from the api
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: [], loading: false, error });
      });
  }, []);

  return state;
}
