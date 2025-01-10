
import React, { useState } from 'react';

const FibonacciChecker = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const isFibonacci = (num: any) => {
    const isPerfectSquare = (x: any) => {
      const s = Math.sqrt(x);
      return s * s === x;
    };

    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      setMessage('Por favor, insira um número válido.');
      return;
    }

    if (isFibonacci(parsedNumber)) {
      setMessage(`O número ${parsedNumber} pertence à sequência de Fibonacci.`);
    } else {
      setMessage(`O número ${parsedNumber} não pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Verificador de Fibonacci</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Digite um número"
          style={{ padding: '10px', fontSize: '16px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Verificar
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', fontSize: '18px' }}>{message}</p>}
    </div>
  );
};

export default FibonacciChecker;