import React from 'react';
import Auxillury from '../../../../hoc/Auxillury'
import styles from './Answer.module.css'

const answer = (props) => {

  function showAlert(e) {
    e.preventDefault();
    //alert(e.target.id);
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
