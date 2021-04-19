// React
import React, { useReducer } from 'react';

interface Props {}

const initialState: AuthState = {
  loading: false,
  user: {
    nickname: null,
    name: null,
    token: null,
  },
};

interface AuthState {
  loading: boolean;
  user: User;
}

interface User {
  nickname: null | string;
  name: null | string;
  token: null | string;
}

type LoginPayload = {
  nickname: string;
  name: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        loading: false,
        user: {
          nickname: null,
          name: null,
          token: null,
        },
      };
    case 'login':
      return {
        loading: false,
        user: {
          nickname: action.payload.nickname,
          name: action.payload.name,
          token: 'asdaw121212dawdawd12asdawdawdawd',
        },
      };
    default:
      return state;
  }
};

const LoginPrueba: React.FC<Props> = () => {
  const [
    {
      loading,
      user: { nickname, token },
    },
    dispatch,
  ] = useReducer(authReducer, initialState);

  const login = () => {
    dispatch({ type: 'login', payload: { nickname: 'Oli', name: 'Steven' } });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  if (loading) {
    return (
      <>
        <div className="alert alert-info">Loading...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">
          Autenticado! como: {nickname} 👍
        </div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default LoginPrueba;
