import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NewNavBar() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{marginLeft:"500px",marginTop:"2px !important"}}>
            <img
              alt=""
              src="favicon.ico"
              width="20px"
              height="20px"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NewNavBar;