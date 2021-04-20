// React
import React, { useEffect, useRef, useState } from 'react';

// Axios
import reqResApi from '../api/reqRes';

// Interfaces
import { ReqResListado, User } from '../interfaces/reqRes.interface';

interface Props {}

const Usuarios: React.FC<Props> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  const getUsers = async () => {
    const {
      data: { data: users },
    } = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current,
      },
    });

    if (users.length > 0) {
      setUsers(users);
      pageRef.current++;
    } else {
      alert('There is no more users');
    }
  };

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
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={getUsers}>
        Next
      </button>
    </>
  );
};

export default Usuarios;
