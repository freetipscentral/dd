import React from 'react';
import Auxillury from '../../hoc/Auxillury'

const quizOption = (props) => {

  return (
    <Auxillury>
      <div>
        {props.id} -- {props.quizName} -- {props.quizDetails}
      </div>
    </Auxillury>
  )
};

export default quizOption;
