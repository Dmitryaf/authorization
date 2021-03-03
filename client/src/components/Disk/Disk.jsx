import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <button type='button' className='btn btn--animate btn--mr'>
          Создать папку
        </button>
        <button type='button' className='btn btn--animate'>
          Назад
        </button>
      </div>
    </div>
  );
}

export default Disk;
