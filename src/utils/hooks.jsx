import {useState,useEffect} from 'react'

/**
 * Custom hook for fetching data from a URL
 * @param {string} url - The URL to fetch data from
 * @returns {Object} An object containing:
 *   - dataFetched: The fetched data or null if no data
 *   - isLoaded: Boolean indicating if the data has finished loading
 */
const useFetching = (url) => {
  
  const [dataFetched,setDataFetched] = useState({});
  const [isLoaded,setLoaded] = useState(false);
  const [error, setError] = useState(false)


  /**
   * Fetches data from the provided URL
   * @param {string} url - The URL to fetch data from
   */
  async function fetchDatas(url){

    try{

      const response = await fetch(url)
      const datas = await response.json()

      setDataFetched((dataFetched) => datas ?? null)

      setLoaded(true)

      // return datas 

    } catch(err) {

      console.error(err)

      setError(true)

    }

  }


  /**
   * Effect hook to fetch data when the URL changes
   */
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
