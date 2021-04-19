// React
import React, { useEffect } from 'react';

// Axios
import reqResApi from '../api/reqRes';

interface Props {}

const Usuarios: React.FC<Props> = () => {
  const getUsers = async () => {
    const {
      data: { data },
    } = await reqResApi.get('/users');
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Usuarios;
