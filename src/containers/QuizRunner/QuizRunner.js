import React, {Component} from 'react'
import Auxillury from '../../hoc/Auxillury'
import Question from '../../components/QuizParts/Question/Question'
import Answers from '../../components/QuizParts/Answers/Answers'
import {startQuiz, showQuizResult, dontShowQuizResult, reinitializeQuiz} from '../../store/actions/actions'
import {connect} from 'react-redux'
import ResultModal from './ResultModal'

class QuizRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      question: [],
      quizHeader: 'General AWS Quiz',
      quizDetails: 'S3 is one of the most important topics in AWS cloud.  This quiz will test you S3 knowledge.',      
      currentQuestion: 0,
      totalCorrectAnswers : 0,
      redirect: false
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
  }

  startQuiz = (e) => {
    this.props.startQuiz();
  }

  cancelPopupHandler = () => {
    this.props.dontShowQuizResult();
    this.setState({currentQuestion:0, totalCorrectAnswers:0});
  }

  selectNewQuizHandler = () => {
    this.props.dontShowQuizResult();
    this.props.reinitializeQuiz();    
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
      let detailsToShow = '';
      if(this.props.showQuizResultPopup) {
          return (
                  <ResultModal show={this.props.showQuizResultPopup} 
                      totalCorrectAnswers={this.state.totalCorrectAnswers}
                      totalQuestions={this.state.question.length}
                      onCancel={this.cancelPopupHandler}
                      selectNewQuiz={this.selectNewQuizHandler}>
                  </ResultModal>
          ) 
        } else if (this.state.question.length == 0) {
          return (null);
        } else {          
          return (
            
            <Auxillury>
              <main>                
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
}

const mapStateToProps = state => {
  return {
      quizInProgress: state.quizInProgress,
      showQuizResultPopup: state.showQuizResultPopup
  }       
}

const mapDispatchToProps = dispatch => {
  return {
      startQuiz: () => dispatch(startQuiz()),
      showResult: () => dispatch(showQuizResult()),
      dontShowQuizResult: () => dispatch(dontShowQuizResult()),
      reinitializeQuiz: () => dispatch(reinitializeQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizRunner);