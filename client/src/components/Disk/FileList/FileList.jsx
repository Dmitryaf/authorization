import React from 'react';

export default function FileList() {
  return (
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
  );
}
