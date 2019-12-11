import React, {Component} from 'react';
import QuizOption from './QuizOption';
import styles from './QuizOptions.module.css';

class QuizOptions extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            quizList: this.props.quizList,
            selectedQuizId: this.props.quizList[0].id
        };
    }

    rightAnswerChangeHandler = (e) => {
        this.setState({selectedQuizId: e.target.value})
    }

    submitQuizDetails = (e) => {
        e.preventDefault();
        this.props.onSelect(this.state.selectedQuizId);
    }

    render() {       
        if(this.state.quizList) {
            const quizzes = this.state.quizList.map((eachQuiz, i) => {
                return (
                    <option value={eachQuiz.id}>{eachQuiz.quizName}</option>
                )
            });

            return (                
                <div className={styles.QuizOptions}>
                    <form onSubmit={this.submitQuizDetails}>
                        <div>
                            <label>Available Quizzes:</label>
                        </div>
                        <div> 
                            <select value={this.state.selectedQuiz} 
                                onChange={e => this.rightAnswerChangeHandler(e)}>{quizzes}
                            </select>
                        </div>
                        <div>                        
                            <input type="submit" value="Select Quiz"/>
                        </div>
                    </form>
                </div>                
            )
        }
    }
}

export default QuizOptions;