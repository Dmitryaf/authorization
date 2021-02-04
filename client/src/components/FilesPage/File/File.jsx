import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { faFileDownload, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toogleModal } from '../../../redux/filesPage-reducer';
import styles from './File.module.scss';

function File(props) {
  const { id, name, handleDownload } = props;
  const dispatch = useDispatch();

  return (
    <tr className={styles.file}>
      <td className={styles.file__td}>
        <span className={styles.file__name}>{name}</span>
      </td>
      <td colSpan='5' className={styles.file__td}>
        <div className={styles.file__options}>
          <button
            type='button'
            className={`${styles.file__edit} ${styles.file__optionsIcon}`}
            onClick={() => {
              dispatch(toogleModal(id));
              handleDownload(name);
            }}
          >
            <FontAwesomeIcon className={styles.editIco} icon={faPencilAlt} />
          </button>
          <button
            type='button'
            className={`${styles.file__download} ${styles.file__optionsIcon}`}
          >
            <FontAwesomeIcon
              className={styles.downloadIco}
              icon={faFileDownload}
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default File;
