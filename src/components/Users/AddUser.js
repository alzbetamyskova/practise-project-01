import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Error from '../UI/Error';

import styles from './AddUser.module.css';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().lenght === 0) {
      setError({
        title: 'Neplatné jméno nebo věk',
        message: 'Prosím zadejte platné jméno a věk (vyplňte všechna pole).'
      });
      return;
    };

    if (enteredAge < 1) {
      setError({
        title: 'Neplatný věk',
        message: 'Prosím vyplňte platný věk (> 0).'
      });
      return;
    };

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <Error title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>

          <label htmlFor='username'>Uživatelské jméno</label>
          <input 
            id='username'
            type='text'
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <label htmlFor='age'>Věk (roky)</label>
          <input
            id='age'
            type='number'
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type='submit'>Přidat uživatele</Button>

        </form>
      </Card>
    </>
  );
};

export default AddUser;