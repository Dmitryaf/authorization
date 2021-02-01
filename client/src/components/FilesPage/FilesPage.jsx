import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import File from './File/File';
import { setFiles } from '../../redux/filesPage-reducer';

function FilesPage() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.filesPage.files);
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
            return <File id={file._id} name={file.name} key={file._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FilesPage;
