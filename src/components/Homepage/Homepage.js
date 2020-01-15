import React, {Component} from 'react'
import HomePageTopSection from './HomePageTopSection';
import QuizListSection from './QuizListSection';
import QuizRunner from '../../containers/QuizRunner/QuizRunner';
import {connect} from 'react-redux';
import {retreiveQuizList, fetchQuizSetForQuizId} from '../../store/actions/actions'
import LoaderModal from './LoaderModal'

class HomePage extends Component {

    fetchQuizSet = (quizId) => {
        this.props.fetchQuizSet(quizId);
    }

    render() {
        if(this.props.loadingQuizSet) {
            return <LoaderModal message='Loading Quiz set' />
        } else {
            if(this.props.quizSelected) {
                return (
                    <QuizRunner selectedQuizSet={this.props.selectedQuizSet}/>
                )
            } else return(    
                <div>
                    <HomePageTopSection />
                    <QuizListSection quizSelect = {this.fetchQuizSet}/>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        quizList: state.quizList,
        quizSelected: state.quizSelected,
        selectedQuizSet: state.selectedQuizSet,
        loadingQuizSet: state.loadingQuizSet
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuizList:  dispatch(retreiveQuizList()),
        fetchQuizSet:  (quizId) => dispatch(fetchQuizSetForQuizId(quizId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);