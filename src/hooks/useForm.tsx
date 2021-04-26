// React
import { useState } from 'react';

const useForm = <T extends Object>(formulario: T) => {
  const [state, setFormulario] = useState(formulario);

  const onChange = (value: string, campo: keyof T) => {
    setFormulario({
      ...state,
      [campo]: value,
    });
  };

  return { ...state, state, onChange };
};

export default useForm;
