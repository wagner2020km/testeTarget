import React, { useState } from 'react';

const InverterString = () => {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');

  const inverterString = (str: any) => {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const resultado = inverterString(entrada);
    setSaida(resultado);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Inverter String</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Digite uma string"
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Inverter
        </button>
      </form>
      {saida && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Resultado:</strong> {saida}
        </div>
      )}
    </div>
  );
};

export default InverterString;

