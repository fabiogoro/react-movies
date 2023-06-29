import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLoaderData } from 'react-router-dom'
import { fetchMovie } from './util/Api'
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'

function Movie() {
  let [movie, setMovie] = useState(undefined)
  const id = useLoaderData();

  const fetchData = async () => {
      const result = await fetchMovie(id)
      setMovie(result)
      console.log(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {movie?(
            <Card>
              <Row>
                <Col>
                  <Carousel variant="dark" className="vh-50 text-center">
                    {movie.images.posters.map((img,i)=>(
                      <Carousel.Item>
                        <img
                          fluid
                          src={`https://image.tmdb.org/t/p/w500/${img.file_path}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>
                      {movie.title} ({(new Date(movie.release_date)).getFullYear()})
                      <br/>
                      Rating: {Math.round(movie.vote_average*10)}%
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <strong>Genres: </strong>
                        {movie.genres.map((genre,i)=>(
                          <span>{`${i?', ':''}${genre.name}`}</span>
                        ))}
                      </p>
                      <p>
                        <strong>Overview:</strong>
                        <br/>
                        {movie.overview}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ):null}
        </Col>
      </Row>
    </Container>
  );
}

export default Movie;
