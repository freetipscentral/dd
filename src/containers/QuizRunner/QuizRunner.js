import React, {Component} from 'react'
import Auxillury from '../../hoc/Auxillury'
import QuizNotification from '../../components/QuizParts/QuizNotification/QuizNotification'
import Question from '../../components/QuizParts/Question/Question'
import Answers from '../../components/QuizParts/Answers/Answers'
import Modal from '../../components/UI/Modal/Modal'

class QuizRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      quizStarted: false,
      quizHeader: 'General AWS Quiz',
      quizDetails: 'S3 is one of the most important topics in AWS cloud.  This quiz will test you S3 knowledge.',
      questions: [
        {
          questionId:1,
          questionText: "What is Docker",
          answers : [
            'Docking station for Apple products',
            'A platform as a service product',
            'Propreity AWS product to show current clients connected to AWS',
            'All of the above'
          ],
          rightAnswer: '2'
      },
      {
        questionId:2,
        questionText: "What is EC2",
        answers : [
          'A Short Circuit',
          'Amazon movie',
          'Elastic Cloud Compute',
          'File Extension'
        ],
        rightAnswer: '3'
      },
      {
        questionId:3,
        questionText: "What is Cloud Watch",
        answers : [
          'A Logging mechanism in AWS',
          'Drone Technology',
          'Amazon movie',
          'Latest binoculars launched by Amazon'
        ],
        rightAnswer: '1'
      },
      {
        questionId:4,
        questionText: "What is API Gateway",
        answers : [
          'Allows creating of APIs',
          'Allows caching of API responses',
          'Allows monitoring and securing REST and WebSocket APIs at any scale.',
          'All of the above'
        ],
        rightAnswer: '4'
      },
      {
        questionId:5,
        questionText: "Which of the following is a message queue or transaction system for distributed Internet-based applications?",
        answers : [
          'Amazon Elastic Compute Cloud',
          'Amazon Simple Queue Service',
          'Amazon Simple Notification Service',
          'Amazon Simple Storage System'
        ],
        rightAnswer: '2'
      },
      {
        questionId:6,
        questionText: "Which of the following is a Web service that can publish messages from an application and deliver them to other applications or to subscribers?",
        answers : [
          'Amazon Elastic Compute Cloud',
          'Amazon Simple Queue Service',
          'Amazon Simple Notification Service',
          'Amazon Simple Storage System'
        ],
        rightAnswer: '3'
      }
    ],
      currentQuestion:0,
      showResultPopup: false,
      totalCorrectAnswers : 0
    }
  }

  componentDidMount() {
    //this.setState({quizDetails:this.props.selectedQuizSet.quizDetails});
    this.setState({quizHeader:this.props.selectedQuizSet.quizName});
    //let questionSet = JSON.parse(this.props.selectedQuizSet);
    //alert(questionSet[0].question);
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
      let isLastQuestion = this.state.currentQuestion + 1 === this.state.question.length;          
      if(!this.state.quizStarted) {
        return (<QuizNotification headerText={this.state.quizHeader} startQuiz={this.startQuiz}
          info={this.state.quizDetails}/>)
      } else {
      return(
        <Auxillury>
          <main>            
            
            <Modal show={this.state.showResultPopup} onCancel={this.cancelPopupHandler}>
              <div>Congratulations!  You scored {this.state.totalCorrectAnswers} out of {this.state.question.length}</div>
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

export default QuizRunner;
