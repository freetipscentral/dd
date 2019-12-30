import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import DisplayQuizCard from './DisplayQuizCard';

const quizCard = props => {
    
    const quizzes = props.quizList.map((eachQuiz, i) => {
        return (
            <DisplayQuizCard quizName={eachQuiz.quizName} id = {eachQuiz.id} quizDetails = {eachQuiz.quizDetails}/>            
        )
    });
    return (
        <CardDeck>
            {quizzes}
           
        </CardDeck>
    );
}

export default quizCard;