// React
import React from 'react';

// Custom Hooks
import useUsers from '../hooks/useUsers';

// Interfaces
import { User } from '../interfaces/reqRes.interface';

interface Props {}

const Usuarios: React.FC<Props> = () => {
  const { users, nextPage, previousPage } = useUsers();

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
      <button className="btn btn-danger" onClick={previousPage}>
        Back
      </button>{' '}
      <button className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
    </>
  );
};

export default Usuarios;
