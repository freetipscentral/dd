import axios from 'axios'; 

export const QUIZ_STARTED = 'QUIZ_STARTED';
export const QUIZ_FINISHED = 'QUIZ_FINISHED';

export const QUIZ_LIST_RETREIVAL_START = 'QUIZ_LIST_RETREIVAL_START';
export const QUIZ_LIST_RETREIVAL_SUCCESS = 'QUIZ_LIST_RETREIVAL_SUCCESS';
export const QUIZ_LIST_RETREIVAL_FAILURE = 'QUIZ_LIST_RETREIVAL_FAILURE';

export const QUIZ_SET_RETREIVAL_START = 'QUIZ_SET_RETREIVAL_START';
export const QUIZ_SET_RETREIVAL_SUCCESS = 'QUIZ_SET_RETREIVAL_SUCCESS';
export const QUIZ_SET_RETREIVAL_FAILURE = 'QUIZ_SET_RETREIVAL_FAILURE';

export const quizSetRetreived = (payload) => {
    return {
        type: QUIZ_SET_RETREIVAL_SUCCESS,
        payload: payload
    }
}

export const quizSetFailedToLoad = () => {
    return {
        type: QUIZ_SET_RETREIVAL_FAILURE,
        payload: "Error retreiving quiz set.  Please try after some time"
    }
}

export const fetchQuizSetForQuizId = (quizId) => {

    return function(dispatch) {
        dispatch({type: QUIZ_SET_RETREIVAL_START});
        let url = 'https://afq77s0oa0.execute-api.us-east-1.amazonaws.com/Prod?id='+quizId;
        axios.get(url)
          .then(response => {
            dispatch(quizSetRetreived(response))
          }).catch(function (error) {
            // handle error
            console.log(error);
            dispatch(quizSetFailedToLoad())
          })
          .finally(function () {
            // always executed
          });
        };  
}

export const retreiveQuizList = () => {

    return function(dispatch) {
        dispatch({type: QUIZ_LIST_RETREIVAL_START});
        let url = 'https://7guwq97hz8.execute-api.us-east-1.amazonaws.com/Prod/';        
        return axios.get(url)
          .then(response => {
            dispatch(quizListRetreived(response.data))
          }).catch(function (error) {
            // handle error
            console.log(error);
            dispatch(quizListFailedToLoad())
          })
          .finally(function () {
            // always executed
          });
      };
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