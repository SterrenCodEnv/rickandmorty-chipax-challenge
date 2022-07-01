import { useEffect, useState } from 'react';
import { ramApi } from '../api';

export const useAxios = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const getAxios = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const res = await ramApi.get(url);
      const { data } = res.status === 200 ? res : null;
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      console.error(error);
      setState({
        ...state,
        isLoading: false,
        hasError: `Ocurrió un error al consultar la API: ${url}`,
      });
    }
  };

  useEffect(() => {
    getAxios();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
