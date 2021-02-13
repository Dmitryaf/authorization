import React from 'react';

function Registration() {
  return (
    <div className='auth-container'>
      <form className='form'>
        <div className='form__field'>
          <label className='form__label' htmlFor='emailInput'>
            Email
          </label>
          <input
            id='emailInput'
            type='text'
            name='email'
            className='input'
          ></input>
        </div>

        <div className='form__field'>
          <label className='form__label' htmlFor='passwordInput'>
            Password
          </label>
          <input
            id='passwordInput'
            type='text'
            name='password'
            className='input'
          ></input>
        </div>

        <button className='form__btn btn btn--registration'>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Registration;
