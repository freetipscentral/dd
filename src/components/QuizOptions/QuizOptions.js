import React, {Component} from 'react';
import QuizOption from './QuizOption';
import styles from './QuizOptions.module.css'

class QuizOptions extends Component {
    render() {         
        if(this.props.quizList) {            
            const quizList = this.props.quizList.map((eachQuiz, i) => {
                return (
                    <QuizOption
                        id={eachQuiz.id}
                        quizName={eachQuiz.quizName}
                        quizDetails={eachQuiz.quizDetails}                    
                    />
                )
            });
            return (   
                <div className={styles.QuizOptions}>{quizList}</div>
            )
        }
    }
}

export default QuizOptions;