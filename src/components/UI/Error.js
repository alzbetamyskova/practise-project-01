import React from 'react';
import Button from './Button';
import Card from './Card';

import styles from './Error.module.css';

const Error = (props) => {

  return (
    <>
      <div className={styles.backdrop} onClick={props.onErrorHandler}/>
      <Card className={styles.modal}>

        <header className={styles.header}>
          <h2>
            {props.title}
          </h2>
        </header>

        <div className={styles.content}>
          <p>
            {props.message}
          </p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={props.onErrorHandler}>Potvrdit</Button>
        </footer>

      </Card>
    </>
  );
};

export default Error;
