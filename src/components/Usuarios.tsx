// React
import React, { useEffect, useState } from 'react';

// Axios
import reqResApi from '../api/reqRes';

// Interfaces
import { ReqResListado, User } from '../interfaces/reqRes.interface';

interface Props {}

const Usuarios: React.FC<Props> = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const {
      data: { data: users },
    } = await reqResApi.get<ReqResListado>('/users');

    setUsers(users);
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
