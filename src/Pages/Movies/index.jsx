import { useEffect, useState } from 'react';
import ListMovies from "./ListMovies"
import Box from '../../components/BoxFlex'
import axios from 'axios'


const Movies = () => {
  const API_URL = "https://api.themoviedb.org/3/";
  const API_KEY = "e9da1b9b1bf2935bf963f9c98fd51e01";

  const [data, setData] = useState([])
  const [currentPage] = useState(1)


  useEffect(() => {
    const endpoint = async () => {
      const resp = await axios(
        `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      )
      console.log(resp.data.results, 'caraio')
      setData(resp.data.results)
    }

    endpoint()

  }, [currentPage])

  console.log(data, 'cade')

  return (
    <>
      <Box>
        {
          data.map(movies => (
            <ListMovies {...movies} key={movies.id} />
          ))
        }
      </Box>
    </>
  )
}

export default Movies