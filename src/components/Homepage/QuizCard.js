import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import DisplayQuizCard from './DisplayQuizCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const quizCard = props => {
    
    const quizzes = props.quizList.map((eachQuiz, i) => {
        return (
            <DisplayQuizCard quizName={eachQuiz.quizName} id = {eachQuiz.id} quizDetails = {eachQuiz.quizDetails} quizSelect={props.quizSelect}/>            
        )
    });
    return (
        <CardDeck>
            <Container>
                <Row >
                    {quizzes}
                </Row>
            </Container>           
        </CardDeck>
    );
}

export default quizCard;