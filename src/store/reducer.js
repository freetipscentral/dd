import * as actionTypes from './actions/actions';

const initialState = {
    quizList: [],
    errorMessage: '',
    loadingQuizList: false
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
        default:
            return state
    }
}

export default reducer;