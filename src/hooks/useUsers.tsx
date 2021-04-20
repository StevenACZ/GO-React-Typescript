// React
import { useEffect, useRef, useState } from 'react';

// Axios
import reqResApi from '../api/reqRes';

// Interfaces
import { ReqResListado, User } from '../interfaces/reqRes.interface';

const useUsers = () => {
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
    } else {
      alert('There is no more users');
      pageRef.current--;
    }
  };

  const nextPage = () => {
    pageRef.current++;
    getUsers();
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    nextPage,
    previousPage,
  };
};

export default useUsers;
