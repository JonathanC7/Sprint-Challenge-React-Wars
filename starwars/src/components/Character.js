// Write your Character component here
import React from 'react'
import { Card, CardTitle, CardText, Container, Row, Col} from 'reactstrap'

function Character(props){
    const test = 'Test'
    return(
            <Col xs="6" sm="4" lg={{size: 'auto'}}>
                <Card body>
                    <CardTitle textSize="10">{props.data.name}</CardTitle>
                    <CardText>{props.data.status}</CardText>
                    <CardText>{props.data.species}</CardText>
                </Card>
            </Col>
    )
}

export default Character;