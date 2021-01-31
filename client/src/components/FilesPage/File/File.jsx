import React from 'react';
import {
  faPencilAlt,
  faTimes,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './File.module.scss';

function File(props) {
  const { id, name } = props;

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
          >
            <FontAwesomeIcon className={styles.editIco} icon={faPencilAlt} />
          </button>
          <button
            type='button'
            className={`${styles.file__delete} ${styles.file__optionsIcon}`}
          >
            <FontAwesomeIcon className={styles.deleteIco} icon={faTimes} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default File;
