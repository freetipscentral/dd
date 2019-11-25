import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) => {
  return props.show ? <div className={classes.Backdrop} onClick={props.onCancel}></div> : null;
}

export default backdrop;
