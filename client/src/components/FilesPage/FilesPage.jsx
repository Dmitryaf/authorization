import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import File from './File/File';
import { setFiles } from '../../redux/filesPage-reducer';
import Modal from './Modal/Modal';

function FilesPage() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.filesPage.files);
  const modal = useSelector((state) => state.filesPage.modal);

  const [fileText, setFileText] = useState('');
  let handleDownload = async (fileName) => {
    const text = await axios
      .post(
        'http://localhost:5000/uploads',
        { fileName },
        { responseType: 'text' }
      )
      .then((response) => {
        console.log(response);
        return response.data;
      });
    setFileText(text);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/files')
      .then((response) => {
        dispatch(setFiles(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
      <table className='files'>
        <caption className='files__title'>Список файлов</caption>

        <tbody className='files__list'>
          {files.map((file) => {
            return (
              <File
                id={file._id}
                name={file.name}
                key={file._id}
                handleDownload={handleDownload}
              />
            );
          })}
        </tbody>
      </table>
      {files.map((file) => {
        if (modal.isOpen && modal.currentItemId === file._id) {
          return (
            <Modal
              id={file._id}
              name={file.name}
              text={fileText}
              key={file._id}
            />
          );
        }
      })}
    </div>
  );
}

export default FilesPage;
