// React
import React from 'react';

// Custom Hooks
import useForm from '../hooks/useForm';

interface Props {}

const Formularios: React.FC<Props> = () => {
  const { email, password, state, onChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  return (
    <div>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Formularios;
