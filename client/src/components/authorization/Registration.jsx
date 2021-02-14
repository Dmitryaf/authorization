import React from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration() {
  return (
    <div className='auth-container'>
      <form className='form'>
        <div className='form__field'>
          <input
            type='text'
            name='email'
            className='form__input'
            placeholder='email'
          />
          <span className='form__input-focus'></span>
          <span className='form__input-icon'>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>

        <div className='form__field'>
          <input
            type='text'
            name='password'
            className='form__input'
            placeholder='password'
          />
          <span className='form__input-focus'></span>
          <span className='form__input-icon'>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>

        <button className='form__btn btn btn--registration'>Sign up</button>
      </form>
    </div>
  );
}

export default Registration;
