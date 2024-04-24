import React from 'react';
import { Label } from 'flowbite-react';

const FormField = ({ id, label, type, placeholder, value, onChange, error }) => {
  return (
    <div>
      <Label value={label} />
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          rows={Math.max(value.split('\n').length, 2)} // Ajustar el número mínimo de filas a 2
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
