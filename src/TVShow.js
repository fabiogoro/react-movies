import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLoaderData } from 'react-router-dom'
import { fetchTVShow } from './util/Api'
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

function TVShow() {
  let [tvShow, setTvShow] = useState(undefined)
  const id = useLoaderData();

  const fetchData = async () => {
      const result = await fetchTVShow(id)
      setTvShow(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {tvShow?(
            <Card>
              <Row>
                <Col>
                  <Carousel variant="dark" className="vh-50 text-center">
                    {tvShow.images.posters.map((img,i)=>(
                      <Carousel.Item>
                        <img
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
                      {tvShow.name} ({(new Date(tvShow.first_air_date)).getFullYear()})
                      <br/>
                      Rating: {Math.round(tvShow.vote_average*10)}%
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <strong>Genres: </strong>
                        {tvShow.genres.map((genre,i)=>(
                          <span key={i}>{`${i?', ':''}${genre.name}`}</span>
                        ))}
                      </p>
                      <p>
                        <strong>Overview:</strong>
                        <br/>
                        {tvShow.overview}
                      </p>
                      <p>
                        <strong>Creators: </strong>
                        <Row className="text-center">
                        {tvShow.created_by.map((creator,i)=>(
                          <Col key={i}>{creator.name}</Col>
                        ))}
                        </Row>
                        <Row className="text-center">
                        {tvShow.created_by.map((creator,i)=>(
                          <Col key={i}><Image roundedCircle src={`https://image.tmdb.org/t/p/w45/${creator.profile_path}`}/></Col>
                        ))}
                        </Row>
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

export default TVShow;
