import React, { useState } from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <div className='auth-container'>
      <form className='form' onSubmit={(e) => submitHandler(e)}>
        <h2 className='form__title'>Log in your account</h2>
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

        <button type='submit' className='form__btn btn btn--animate'>
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
