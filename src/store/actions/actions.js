export const QUIZ_STARTED = 'QUIZ_STARTED';
export const QUIZ_FINISHED = 'QUIZ_FINISHED';

export const QUIZ_LIST_RETREIVAL_START = 'QUIZ_LIST_RETREIVAL_START';
export const QUIZ_LIST_RETREIVAL_SUCCESS = 'QUIZ_LIST_RETREIVAL_SUCCESS';
export const QUIZ_LIST_RETREIVAL_FAILURE = 'QUIZ_LIST_RETREIVAL_FAILURE';

export const retreiveQuizList = () => {
    return {
        type: QUIZ_LIST_RETREIVAL_START
    }
}

export const quizListRetreived = (payload) => {
    return {
        type: QUIZ_LIST_RETREIVAL_SUCCESS,
        payload: payload
    }
}

export const quizListFailedToLoad = () => {
    return {
        type: QUIZ_LIST_RETREIVAL_FAILURE,
        payload: "Error retreiving quiz list.  Please try after some time"
    }
}

export const quizStarted = () => {
    return {
        type: QUIZ_STARTED        
    }
}

export const quizFinished = () => {
    return {
        type: QUIZ_FINISHED        
    }
}