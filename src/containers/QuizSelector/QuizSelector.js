import React, {Component} from 'react'
import axios from 'axios'; 
import QuizOptions from '../../components/QuizOptions/QuizOptions'
import QuizRunner from '../QuizRunner/QuizRunner'

class QuizSelector extends Component {

    state = {
        quizList: [],
        quizSelected: false
    }

    componentDidMount() {    
        // Make a request for a user with a given ID
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
        let quizzes = "";
        if(this.state.quizList != []) {
            return <QuizOptions quizList={this.state.quizList} />
        }
        else if(this.state.quizSelected) {
            return <QuizRunner />
        }
    }    
}
export default QuizSelector;