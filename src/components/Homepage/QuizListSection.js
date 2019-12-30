import React, {Component} from 'react'
import QuizCard from './QuizCard'
import axios from 'axios'; 

class QuizListSection extends Component {

    state = {
        quizList: [],
        quizSelected: false,
        quizSet: {}
    }

    componentDidMount() {
        let url = 'https://7guwq97hz8.execute-api.us-east-1.amazonaws.com/Prod/';        
        axios.get(url)
          .then(response => {
            this.setState({quizList: response.data});
          }).catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    render() {
        return (
            <QuizCard quizList={this.state.quizList}/>
        )
    }
}

export default QuizListSection;
