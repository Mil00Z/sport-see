import {useState,useEffect} from 'react'


/**
 * Composant useFetching
 * @param {string} url  => URL de l'API à interroger
 * @returns {Object} => Objet de données retourné et un state de chargement
 */


/**
 * Types des states
 * @typedef {Object} useFetching
 * @property {Object} dataFetched => Objet de données retourné
 * @property {boolean} isLoaded => State de chargement
 * @property {boolean} error => State d'erreur
 */



const useFetching = (url) => {
  
  const [dataFetched,setDataFetched] = useState({});
  const [isLoaded,setLoaded] = useState(false);
  const [error, setError] = useState(false)


  async function fetchDatas(url) {

    try{

      const response = await fetch(url)
      const datas = await response.json()

      setDataFetched((dataFetched) => datas.data ?? null)

      setLoaded(true)

      // return datas 

    } catch(err) {

      // console.error(err)

      setError(true)

    }

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

