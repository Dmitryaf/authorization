import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newModalText, toogleModal } from '../../../redux/filesPage-reducer';
import style from './Modal.module.scss';

function Modal(props) {
  const { id, name, text, handleUpdate } = props;
  const modalText = useSelector((state) => state.filesPage.modal.content);
  const dispatch = useDispatch();
  const textareaRef = useRef();

  const handleChange = () => {
    let text = textareaRef.current.value;
    dispatch(newModalText(text));
  };

  return (
    <div className={style.modal}>
      <div className={style.modal__body}>
        <h2 className={style.modal__title}> {name} </h2>
        <form
          className={style.modal__form}
          onSubmit={() => {
            handleUpdate(name, modalText);
          }}
        >
          <textarea
            ref={textareaRef}
            type='text'
            className={style.modal__textarea}
            onChange={handleChange}
            value={modalText}
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
