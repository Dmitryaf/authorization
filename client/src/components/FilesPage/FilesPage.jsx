import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import File from './File/File';
import { setFiles } from '../../redux/filesPage-reducer';

function FilesPage() {
  const [files, setFilesState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:5000/files')
      .then((response) => setFilesState(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  dispatch(setFiles(files));

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
