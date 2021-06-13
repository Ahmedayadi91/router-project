import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import React from 'react'
import '../App.css';


export default function CardItem (props) {
    
    return (
        
        <div className="Card">
            
                <Card style={{ width: '22rem', backgroundColor:"#7FFFD4" }}>
                <Card.Img variant="top" src={props.src} height="400px" />
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                    <a href={props.link}> <Button variant="primary">watch</Button> </a>
                </Card.Body>
                </Card>
            </div>
    ) }