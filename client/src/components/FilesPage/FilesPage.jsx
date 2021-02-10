import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import File from './File/File';
import { newModalText, setFiles } from '../../redux/filesPage-reducer';
import Modal from './Modal/Modal';
import Preloader from '../common/Preloader';

function FilesPage() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.filesPage.files);
  const modal = useSelector((state) => state.filesPage.modal);

  const [fileText, setFileText] = useState('');
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/files')
      .then((response) => {
        if (response.status === 200) {
          dispatch(setFiles(response.data));
          setIsloading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Список файлов</h2>
      {isLoading ? (
        <table className='files'>
          <tbody className='files__list'>
            {files.length ? (
              files.map((file) => {
                return <File id={file._id} name={file.name} key={file._id} />;
              })
            ) : (
              <tr className='files__empty'>
                <td>Файлы отсутсвуют</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <Preloader />
      )}

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
