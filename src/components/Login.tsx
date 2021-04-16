// React
import React, { useEffect, useReducer } from 'react';

interface AuthState {
  success: boolean;
  user: User;
}

interface User {
  nickName: null | string;
  name: null | string;
  token: null | string;
}

const initialState: AuthState = {
  success: true,
  user: {
    nickName: null,
    name: null,
    token: null,
  },
};

type AuthAction = {
  type: 'logout';
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        success: false,
        user: {
          nickName: null,
          name: null,
          token: null,
        },
      };

    default:
      return state;
  }
};

interface Props {}

const Login: React.FC<Props> = () => {
  const [{ success }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  if (success) {
    return (
      <>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-danger">No autenticado...</div>
      <div className="alert alert-success">Autenticado...</div>
      <button className="btn btn-primary">Login</button>{' '}
      <button className="btn btn-danger">Logout</button>
    </>
  );
};

export default Login;
