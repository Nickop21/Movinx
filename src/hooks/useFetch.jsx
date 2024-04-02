import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading.....");
    setData(null);
    setError(null);
    console.log(url);
    fetchDataFromApi(url).then((res) => {
      console.log(res);
      setLoading(false)
      setData(res)

    }).catch((err) => {
      setLoading("loading.....");
      setError("something wents wrong");
    })
  }, [url])

  return (
    data, loading, error
  )
}

export default useFetch