import * as actionTypes from './actions/actions';

const initialState = {
    quizList: [],
    errorMessage: "",
    quizListRetreivalInProgress: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.QUIZ_LIST_RETREIVAL_START:
            return {
                ...state,
                quizListRetreivalInProgress: true
            }
        case actionTypes.QUIZ_LIST_RETREIVAL_SUCCESS:
            return {
                ...state,
                quizListRetreivalInProgress: false,
                errorMessage: ''
            }
        case actionTypes.QUIZ_LIST_RETREIVAL_FAILURE:
            return {
                ...state,
                quizListRetreivalInProgress: false,
                errorMessage: 'Error retreiving the Quiz list'
            }
        default:
            return state
    }
}

export default reducer;