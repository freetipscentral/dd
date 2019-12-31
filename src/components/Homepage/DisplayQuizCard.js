import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const displayQuizCard = props => {
    const borderStyle = { borderColor:'Orange', borderWidth: '.2rem' };
    const cardTitleStyle = {backgroundColor: '#4a154b', color:'Orange', textAlign: 'center' };
    
    return (
        <Col sm={12} lg={4} md={6}>
            <Card lg={4} sm={12} style={borderStyle}>
                <Card.Header style = {cardTitleStyle}>{props.quizName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.quizDetails}
                    </Card.Text>
                    <Button variant="primary">Start Quiz</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>           
    );
}

export default displayQuizCard;