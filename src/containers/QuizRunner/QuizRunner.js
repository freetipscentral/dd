import React, {Component} from 'react'
import Auxillury from '../../hoc/Auxillury'
import QuizNotification from '../../components/QuizParts/QuizNotification/QuizNotification'
import Question from '../../components/QuizParts/Question/Question'
import Answers from '../../components/QuizParts/Answers/Answers'
import Modal from '../../components/UI/Modal/Modal'
import {startQuiz, showQuizResult} from '../../store/actions/actions'
import {connect} from 'react-redux'

class QuizRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      question: [],
      quizHeader: 'General AWS Quiz',
      quizDetails: 'S3 is one of the most important topics in AWS cloud.  This quiz will test you S3 knowledge.',      
      currentQuestion:0,
      showResultPopup: false,
      totalCorrectAnswers : 0
    }
  }

  componentDidMount() {
    this.setState({quizHeader:this.props.selectedQuizSet.quizName});
    let question = [];
    JSON.parse(this.props.selectedQuizSet.data).map((questionSet, index) => {
      question.push({
        questionId:index+1,
        questionText: questionSet.question,
        answers: questionSet.answers,
        rightAnswer: questionSet.rightAnswer
      });
    });

    this.setState({question:question});
    this.props.startQuiz();
  }

  nextQuestion = (e) => {
    const currentQuestion = this.state.currentQuestion + 1;
    this.setState({currentQuestion: currentQuestion});
  }

  showResult = (e) => {
    this.props.showResult();
    this.setState({showResultPopup: true});
  }

  startQuiz = (e) => {
    this.props.startQuiz();
  }

  cancelPopupHandler = () => {
    this.setState({showResultPopup: false, currentQuestion:0, totalCorrectAnswers:0});
  } 

  updateCorrectAnswers = (e) => {
    let currentCorrectAnswers = this.state.totalCorrectAnswers;
    let updateCorrectAnswers = currentCorrectAnswers + 1;
    this.setState({totalCorrectAnswers:updateCorrectAnswers});
  }

  render() {      
      let isLastQuestion = this.state.currentQuestion + 1 === this.state.question.length;          
      if(!this.props.quizInProgress) {
        return (null);
      } else {
      return(
        <Auxillury>
          <main>                        
            <Modal show={this.state.showResultPopup} onCancel={this.cancelPopupHandler}>
              <div>You scored {this.state.totalCorrectAnswers} out of {this.state.question.length}</div>
            </Modal>
            <Question questionText={this.state.question[this.state.currentQuestion].questionText} />
            <Answers answers={this.state.question[this.state.currentQuestion].answers}
                rightAnswer={this.state.question[this.state.currentQuestion].rightAnswer}
                nextQuestion={this.nextQuestion}
                questionId={this.state.question[this.state.currentQuestion].questionId}
                isLastQuestion = {isLastQuestion}
                showResult={this.showResult}
                updateCorrectAnswers={this.updateCorrectAnswers}/>
          </main>
        </Auxillury>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
      quizInProgress: state.quizInProgress,
      showResult: state.quizResult
  }       
}

const mapDispatchToProps = dispatch => {
  return {
      startQuiz: () => dispatch(startQuiz()),
      showResult: () => dispatch(showQuizResult())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizRunner);