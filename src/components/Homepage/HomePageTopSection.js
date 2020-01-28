import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

const homePageTopSection = props => (
    <Jumbotron style={{backgroundColor: '#0074d9', color:'white'}}>
        <h1>Howdy AWS Enthusiasts!</h1>
        <br/>
        <p>
            If you are looking for AWS quizzes, whether to prepare for interview, or certification or for self improvemnt, you are at the right place.
        </p>
        <p>
            AWS Quiz Time has hundreds of questions which were created to test your skills and in the process improve them and keep them in your memory.
        </p>
    </Jumbotron>
);

export default homePageTopSection;