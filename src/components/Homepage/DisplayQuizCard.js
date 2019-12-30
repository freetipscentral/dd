import React from 'react';
import Card from 'react-bootstrap/Card';

const displayQuizCard = props => {
    const borderStyle = { borderColor:'Orange', borderWidth: '.2rem' };
    return (
        <Card style={borderStyle}>
            <Card.Body>
            <Card.Title>{props.quizName}</Card.Title>
            <Card.Text>
                {props.quizDetails}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
}

export default displayQuizCard;