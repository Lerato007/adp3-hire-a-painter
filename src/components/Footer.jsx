import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import '../syles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Hire A Painter &copy; {currentYear}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;