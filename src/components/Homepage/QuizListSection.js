import React, {Component} from 'react'
import QuizCard from './QuizCard'
import {connect} from 'react-redux';
import {retreiveQuizList} from '../../store/actions/actions'
import Spinner from 'react-bootstrap/Spinner'
import LoaderModal from './LoaderModal'

class QuizListSection extends Component {

    state = {
        quizSelected: false,
        quizSet: {}
    }

    componentDidMount() {
        this.props.loadQuizList();
    }

    render() {
        const xx=false
        if(this.props.loadingQuizList) {
            return (
                <LoaderModal />
            )
        }
        else return (
            <QuizCard quizList={this.props.quizList} quizSelect={this.props.quizSelect}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingQuizList: state.loadingQuizList,
        quizList: state.quizList
    }       
}

const mapDispatchToProps = dispatch => {
    return {
        loadQuizList: () => dispatch(retreiveQuizList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizListSection);
