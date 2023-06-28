import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Ratio from 'react-bootstrap/Ratio'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";

function TVShow({tvShow}) {
  return (
    <Col xs="3" className="mb-3">
      <Card>
        <Card.Body className="p-0">
          <Row>
            <Col xs="6" style={{height: "25vh"}}>
              {tvShow.poster_path?(
                <Image className="h-100" fluid rounded src={`https://image.tmdb.org/t/p/w220_and_h330_face/${tvShow.poster_path}`}></Image>
                  ):(
                    <div className="text-center fs-1"><FontAwesomeIcon className="position-absolute top-50 translate-middle" icon={faImage} /></div>
                  )}
            </Col>
            <Col xs="6">
              <Card.Text className="h-100 m-2"><strong className="h-50 overflow-y-hidden">{tvShow.name}</strong>
              </Card.Text>
              <Card.Text className="position-absolute bottom-0 m-2">
                Rating: {Math.round(tvShow.vote_average*10)}%<br/>
                {tvShow.first_air_date}<br/>
                <Card.Link href="#">Read more...</Card.Link>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TVShow;
