import React from 'react';
import s from './Modal.module.css';

function Modal(props) {
  return (
    <div className={s.container}>
      <div className={s.modal}>
        {props.name}
        sdsd
        <button onClick={props.closeModal}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;
