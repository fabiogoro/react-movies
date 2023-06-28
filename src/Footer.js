import Container from 'react-bootstrap/Container'

function Footer() {
  return (
    <Container fluid className="fixed-bottom bg-light">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-0 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            Movies
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="/movies">Movies</a></li>
          <li className="ms-3"><a className="text-body-secondary" href="/tv">TV Shows</a></li>
        </ul>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="http://github.com/fabiogoro/react-movies">Github</a></li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;


