import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import style from './DownloadPage.module.scss';

function DownloadPage() {
  let formData = new FormData();
  const [file, setFile] = useState(null);
  const [isDownload, setIsdownload] = useState(false);
  const notificationText = isDownload ? 'Файл загружен' : null;
  const inputRef = useRef(null);

  const download = () => {
    inputRef.current.click();
  };

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };
  useEffect(() => {
    if (file) {
      formData.append('file', file);
      axios
        .post('http://localhost:5000/download', formData)
        .then((response) => {
          if (response.status === 201) {
            setIsdownload(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsdownload(false);
        });
    }
  }, [file]);

  return (
    <div className='container'>
      <form className={style.downloadPage}>
        <h2 className='title'>Загрузите файл</h2>
        <p className={style.notification}>{notificationText}</p>
        <input
          className={style.input}
          ref={inputRef}
          type='file'
          onChange={handleChangeFile}
        />
        <button type='button' className='btn' onClick={download}>
          Загрузить
        </button>
      </form>
    </div>
  );
}

export default DownloadPage;
