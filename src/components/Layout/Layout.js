import React from 'react';
import Auxillury from '../../hoc/Auxillury'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
const layout = (props) => {
  return (
    <Auxillury>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>
        {props.children}
      </main>
    </Auxillury>
  )
};

export default layout;
