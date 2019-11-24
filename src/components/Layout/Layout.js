import React from 'react';
import Auxillury from '../../hoc/Auxillury'
import styles from './Layout.module.css'

const layout = (props) => {
  return (
    <Auxillury>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={styles.Content}>
        {props.children}
      </main>
    </Auxillury>
  )
};

export default layout;
