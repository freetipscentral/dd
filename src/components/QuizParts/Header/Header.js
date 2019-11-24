import React from 'react';
import styles from './Header.module.css'

const header = (props) => {
  return (
    <h1 className={styles.Header}>{props.headerText}</h1>
  )
}

export default header;
