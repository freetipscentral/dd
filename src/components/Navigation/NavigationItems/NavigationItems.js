import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem active link="/" active>Home</NavigationItem>
      <NavigationItem active link="/">About Us</NavigationItem>

    </ul>
  )
};

export default navigationItems;
