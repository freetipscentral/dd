import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxillury from '../../../hoc/Auxillury'

const modal = (props) => {
  return (
  <Auxillury>
    <Backdrop show={props.show} onCancel={props.onCancel}/>
    <div className={classes.Modal}
      style={
        {
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }
      }
      >
      {props.children}
    </div>
  </Auxillury>
  )
}

export default modal;
