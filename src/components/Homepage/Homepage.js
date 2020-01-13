import React, {Component} from 'react'
import HomePageTopSection from './HomePageTopSection';
import QuizListSection from './QuizListSection';
import axios from 'axios'; 
import QuizRunner from '../../containers/QuizRunner/QuizRunner';
import {connect} from 'react-redux';
import {retreiveQuizList} from '../../store/actions/actions'

class HomePage extends Component {

    state = {
        quizList: [],
        quizSelected: false,
        quizSet: {}
    }

    fetchQuizSetForQuizId = (quizId) => {
        let url = 'https://afq77s0oa0.execute-api.us-east-1.amazonaws.com/Prod?id='+quizId;
        axios.get(url)
          .then(response => {
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
        if(this.state.quizSelected) {
            return (
                <QuizRunner selectedQuizSet={this.state.quizSet}/>
            )
        } else return(    
            <div>
                <HomePageTopSection />
                <QuizListSection quizSelect = {this.fetchQuizSetForQuizId}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        quizList: state.quizList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuizList:  dispatch(retreiveQuizList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);