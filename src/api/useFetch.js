import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data,setData] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);



  useEffect(()=>{
    console.log("url",url)

    const fetchData = async ()=>{
        setLoading(true)

        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json)
        } catch (error) {
            setError(error);
        }
        finally{
          setLoading(false);
        }
    }
    fetchData()

  },[url])

  return {loading,error,data};
}

export default useFetch;
