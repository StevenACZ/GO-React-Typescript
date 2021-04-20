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

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </td>
        <td>
          {first_name} - {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

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
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <button className="btn btn-danger">Back</button>{' '}
      <button className="btn btn-primary">Next</button>
    </>
  );
};

export default Usuarios;
