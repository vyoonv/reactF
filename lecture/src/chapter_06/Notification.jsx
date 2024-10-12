import { render } from '@testing-library/react';
import React from 'react'
import styles from './../App.module.css'

class Notification extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {}; 
    }
}

render() {
  return (
    <div className={styles.wrapper}>
        <span className={styles.messageText}>{this.props.message}</span>
    </div>
  );
}

export default Notification