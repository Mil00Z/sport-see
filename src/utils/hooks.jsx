import {useState,useEffect} from 'react'


const useFetching = (url) => {
  
  const [dataFetched,setDataFetched] = useState({});
  const [isLoaded,setLoaded] = useState(false);
  const [error, setError] = useState(false)


  async function fetchDatas(url){

    try{

      const response = await fetch(url)
      const datas = await response.json()

      return datas 

    } catch(err) {

      console.error(err)

      setError(true)

    }

    setDataFetched((dataFetched) => datas ?? null)

    setLoaded(true)

  }


  useEffect(() => {

    if (!url) {

      return ;

    } else {

      fetchDatas(url)

    }

  },[url])


  return { dataFetched, isLoaded}
}

export default useFetching

