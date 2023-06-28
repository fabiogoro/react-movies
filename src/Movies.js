import { useRef, useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from './Movie'
import Filter from './Filter'
import SortSelector from './SortSelector'
import {fetchMovies} from './util/Api.js'

function Movies() {
  let [movies, setMovies] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  let [page, setPage] = useState(1)
  let [sort_by, setSort_by] = useState('popularity.desc')
  let [genres, setGenres] = useState(['',''])

  const fetchData = async (sort_by='popularity.desc', page=0, genres=['','']) => {
    setIsLoading(true)
    try {
      page++
      const results = await fetchMovies({page, sort_by, genres})
      setSort_by(sort_by)
      setGenres(genres)
      setMovies([...movies, ...results])
      setPage(page)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return
    }
    fetchData(sort_by, page, genres)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  async function changeSorting(e){
    movies = []
    fetchData(e.target.value, 0, genres)
  }

  async function changeFilters(e){
    movies = []
    if(genres[e.target.getAttribute(['position'])]){
      genres[e.target.getAttribute(['position'])] = ''
    } else {
      genres[e.target.getAttribute(['position'])] = e.target.value
    }
    fetchData(sort_by, 0, genres)
  }

  return (
    <Container fluid>
      <Row className="text-center m-3">
        <Col xs={{ span: 8, offset: 2 }}>
          <h1>Movies</h1>
        </Col>
        <SortSelector onChange={changeSorting}></SortSelector>
      </Row>
      <Row>
        <Filter clickHandler={changeFilters}></Filter>
        <Col>
          <Row>
            {movies.length?movies.map((movie, i)=>(
              <Movie key={i} movie={movie}></Movie>
            )):(
              <Col>
                Loading...
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Movies;
