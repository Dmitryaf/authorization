import React, { useState } from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='auth-container'>
      <form className='form'>
        <div className='form__field'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            className='form__input'
            placeholder='password'
          />
          <span className='form__input-focus'></span>
          <span className='form__input-icon'>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>

        <button className='form__btn btn btn--login'>Sign in</button>
      </form>
    </div>
  );
}

export default Login;
