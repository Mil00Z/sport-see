import {useState,useEffect} from 'react'


const useFetching = (url) => {
  
  const [data,setData] = useState({});
  const [isLoaded,setLoaded] = useState(false);
  const [error, setError] = useState(false)


  async function fetchDatas(url){

   
    try{

      const response = await fetch(url)
      const datas = await response.json()

      setData(datas)

      setLoaded(!isLoaded)

    } catch(err) {

      console.error(err)

      setError(!error)

    }

  }


  useEffect(() => {

    if (!url) {
      return ;
    } else {

      fetchDatas(url)

    }

  },[url])


  return { data, isLoaded}
}

export default useFetching

