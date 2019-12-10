import React from 'react';
import Auxillury from '../../../../hoc/Auxillury'

const answer = (props) => {

  function showAlert(e) {
    e.preventDefault();
  }

  return (
    <Auxillury>
      <div style={props.classToApply} id={props.id} onClick={props.onAnswer} value={props.label}>
        {props.label}
      </div>
    </Auxillury>
  )
};

export default answer;
