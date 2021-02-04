import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleModal } from '../../../redux/filesPage-reducer';
import style from './Modal.module.scss';

function Modal(props) {
  const { id, name, text } = props;
  const dispatch = useDispatch();

  return (
    <div className={style.modal}>
      <div className={style.modal__body}>
        <h2 className={style.modal__title}> {name} </h2>
        <form className={style.modal__form}>
          <textarea
            type='text'
            value={text}
            className={style.modal__textarea}
          ></textarea>

          <div className={style.modal__btns}>
            <button className='btn' type='submit'>
              Сохранить
            </button>
            <button
              type='button'
              className='btn'
              onClick={() => dispatch(toogleModal(null))}
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
