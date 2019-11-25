import React, {Component} from 'react'
import Auxillury from '../../hoc/Auxillury'
import QuizNotification from '../../components/QuizParts/QuizNotification/QuizNotification'
import Question from '../../components/QuizParts/Question/Question'
import Answers from '../../components/QuizParts/Answers/Answers'
import Modal from '../../components/UI/Modal/Modal'
import styles from './QuizRunner.module.css'

class QuizRunner extends Component {
  state = {
    quizStarted: false,
    quizHeader: 'General AWS Quiz',
    quizDetails: 'S3 is one of the most important topics in AWS cloud.  This quiz will test you S3 knowledge.',
    questions: [
      {
        questionId:1,
        questionText: "What is Docker",
        answers : [
          {label: 'Docking station for Apple products'},
          {label: 'A platform as a service product'},
          {label: 'Propreity AWS product to show current clients connected to AWS'},
          {label: 'All of the above'}
        ],
        rightAnswer: '2'
     },
     {
       questionId:2,
       questionText: "What is EC2",
       answers : [
         {label: 'A Short Circuit'},
         {label: 'Amazon movie'},
         {label: 'Elastic Cloud Compute'},
         {label: 'File Extension'}
       ],
       rightAnswer: '3'
     },
     {
       questionId:3,
       questionText: "What is Cloud Watch",
       answers : [
         {label: 'A Logging mechanism in AWS'},
         {label: 'Drone Technology'},
         {label: 'Amazon movie'},
         {label: 'Latest binoculars launched by Amazon'}
       ],
       rightAnswer: '1'
     },
     {
       questionId:4,
       questionText: "What is API Gateway",
       answers : [
         {label: 'Allows creating of APIs'},
         {label: 'Allows caching of API responses'},
         {label: 'Allows monitoring and securing REST and WebSocket APIs at any scale.'},
         {label: 'All of the above'}
       ],
       rightAnswer: '4'
     }
   ],
    currentQuestion:0,
    showResultPopup: false,
    totalCorrectAnswers : 0
  }

  nextQuestion = (e) => {
    const currentQuestion = this.state.currentQuestion + 1;
    this.setState({currentQuestion: currentQuestion});
  }

  showResult = (e) => {
    this.setState({showResultPopup: true});
  }

  startQuiz = (e) => {
    this.setState({quizStarted: true});
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
      let isLastQuestion = this.state.currentQuestion + 1 === this.state.questions.length;
      if(!this.state.quizStarted) {
        return (<QuizNotification headerText={this.state.quizHeader} startQuiz={this.startQuiz}
          info={this.state.quizDetails}/>)
      } else {
      return(
        <Auxillury>
          <main>
            <Modal show={this.state.showResultPopup} onCancel={this.cancelPopupHandler}>
              <div>Congratulations!  You scored {this.state.totalCorrectAnswers} out of {this.state.questions.length}</div>
            </Modal>

            <Question questionText={this.state.questions[this.state.currentQuestion].questionText} />
            <Answers answers={this.state.questions[this.state.currentQuestion].answers}
                rightAnswer={this.state.questions[this.state.currentQuestion].rightAnswer}
                nextQuestion={this.nextQuestion}
                questionId={this.state.questions[this.state.currentQuestion].questionId}
                isLastQuestion = {isLastQuestion}
                showResult={this.showResult}
                updateCorrectAnswers={this.updateCorrectAnswers}/>
          </main>
        </Auxillury>
      )
    }
  }
}

export default QuizRunner;
