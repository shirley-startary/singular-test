import React, { useState } from 'react';

interface NumberInputFormProps {
  onSubmit: (number: number) => void;
}

export const NumberInputForm: React.FC<NumberInputFormProps> = ({ onSubmit }) => {
  const [number, setNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedNumber = parseInt(number, 10);
    if (!isNaN(parsedNumber)) {
      onSubmit(parsedNumber);
      setNumber('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
    <label>
      Number:
      <input type="text" value={number} onChange={handleChange} />
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}