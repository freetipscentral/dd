import React from 'react';
import quizLogo from '../../assets/images/quizTime.jpg'
import styles from './Logo.module.css'

const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={quizLogo} />
    </div>
  )
};

export default logo;
