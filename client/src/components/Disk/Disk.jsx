import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { getFiles } from '../../actions/file';
import styles from './Disk.module.scss';

function Disk() {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.fileReducer.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className={styles.disk}>
      <div className={styles.disk__btns}>
        <button
          type='button'
          className='btn btn_animate btn_align_start btn_mb'
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </button>
        <button type='button' className='btn btn_animate'>
          Создать папку
        </button>
      </div>
    </div>
  );
}

export default Disk;
