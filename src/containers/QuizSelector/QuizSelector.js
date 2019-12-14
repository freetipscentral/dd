import React, {Component} from 'react'
import axios from 'axios'; 
import QuizOptions from '../../components/QuizOptions/QuizOptions'
import QuizRunner from '../QuizRunner/QuizRunner'

class QuizSelector extends Component {

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

    fetchQuizSetForQuizId = (quizId) => {
        let url = 'https://afq77s0oa0.execute-api.us-east-1.amazonaws.com/Prod?id='+quizId;
        axios.get(url)
          .then(response => {
            //alert(response.data)
            this.setState({quizSet: response});
            this.setState({quizSelected:true});
          }).catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });        
    }

    render() {                
        if(this.state.quizList.length > 0 && !this.state.quizSelected) {            
            return <QuizOptions quizList={this.state.quizList} onSelect={this.fetchQuizSetForQuizId}/>
        } else if(this.state.quizSelected) {
            alert("aa "+this.state.quizSet);
            // alert("bb ->"+JSON.parse(this.state.quizSet));
            return <QuizRunner selectedQuizSet={this.state.quizSet}/>
        } else {
            return "";
        }
    }    
}
export default QuizSelector;