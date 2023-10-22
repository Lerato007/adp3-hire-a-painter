import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import painter from '../assets/painter.jpg'


let painters = require('../components/Data.json')
function Hire()  {


    return (
        <div className='render'>
            <Header />
            <div className="cardSec">
                {painters.map(user => (
                    <Card style={{ width: '18rem', margin: 'auto', display: 'flex' }}>
                        <Card.Img variant="top" src={painter} />
                        <Card.Body>
                            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                            <Card.Text>
                                {user.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Contact: <a href={`mailto:${user.email}`}>
                                {user.email}
                            </a></ListGroup.Item>
                        </ListGroup>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                ))}
            </div>
            )
<Footer />
        </div>
    )
}
  
  export default Hire;