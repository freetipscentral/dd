import React from 'react'
import styles from './ActionButton.module.css'
import Grid from '@material-ui/core/Grid';

const actionButton = (props) => {
  return (
    <Grid container justify="center" >
      <button className={styles.Button} onClick={props.clickAction}>{props.buttonLabel}</button>
    </Grid>
  )
}

export default actionButton;
