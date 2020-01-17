import * as actionTypes from './actions/actions';

const initialState = {
    quizList: [],
    errorMessage: '',
    loadingQuizList: false,
    quizSelected: false,
    selectedQuizSet: {},
    loadingQuizSet: false,
    quizInProgress: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.QUIZ_LIST_RETREIVAL_START:
            return {
                ...state,
                loadingQuizList: true
            }
        case actionTypes.QUIZ_LIST_RETREIVAL_SUCCESS:
            return {
                ...state,
                loadingQuizList: false,
                errorMessage: '',
                quizList: action.payload
            }
        case actionTypes.QUIZ_LIST_RETREIVAL_FAILURE:
            return {
                ...state,
                loadingQuizList: false,
                errorMessage: 'Error retreiving the Quiz list'
            }
        case actionTypes.QUIZ_SET_RETREIVAL_START:
            return {
                ...state,
                loadingQuizSet: true
            }
        case actionTypes.QUIZ_SET_RETREIVAL_SUCCESS:
            return {
                ...state,
                loadingQuizSet: false,
                errorMessage: '',
                quizSelected: true,
                selectedQuizSet: action.payload
            }            
        case actionTypes.QUIZ_SET_RETREIVAL_FAILURE:
            return {
                ...state,
                loadingQuizSet: false,
                errorMessage: 'Error retreiving the Quiz set'
            }
        case actionTypes.QUIZ_STARTED:
            return {
                ...state,
                quizInProgress: true
            }
        case actionTypes.QUIZ_FINISHED:
            return {
                ...state,
                quizInProgress: false
            }       
        default:
            return state
    }
}

export default reducer;