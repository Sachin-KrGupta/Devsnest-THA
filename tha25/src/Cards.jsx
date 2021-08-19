import React from 'react'
import {Card, Button} from "react-bootstrap"

export default function Cards(props) {
    return (
        <Card style={{ width: '18rem', backgroundColor:'lightgray', height: '400px' , marginBottom:'20px'}}>
            <Card.Img style={{height: '200px'}} variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.desc}
                </Card.Text>
                <Button variant="primary">{props.price}</Button>
            </Card.Body>
        </Card>
    )
}
