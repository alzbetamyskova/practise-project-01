import React from 'react';
import Card from '../UI/Card';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
  <Card>
    <form onSubmit={addUserHandler}>

      <label htmlFor='username'>Uživatelské jméno</label>
      <input id='username' type='text' />

      <label htmlFor='age'>Věk (roky)</label>
      <input id='age' type='number' />
      
      <button type='submit'>Přidat uživatele</button>

    </form>
  </Card>
  );
};

export default AddUser;