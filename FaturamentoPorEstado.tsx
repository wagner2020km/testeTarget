import React, { useState } from 'react';

interface Percentual {
  estado: string;
  percentual: string;
}

const FaturamentoPorEstado = () => {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const [percentuais, setPercentuais] = useState<Percentual[] | null>(null);

  const calcularPercentuais = () => {
    const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

    const percentuaisCalculados = Object.entries(faturamentoEstados).map(([estado, valor]) => ({
      estado,
      percentual: ((valor / total) * 100).toFixed(2),
    }));

    setPercentuais(percentuaisCalculados);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Percentual de Faturamento por Estado</h1>
      <button onClick={calcularPercentuais} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Calcular Percentuais
      </button>
      {percentuais && (
        <div style={{ marginTop: '30px', textAlign: 'left', display: 'inline-block' }}>
          <h2>Resultados:</h2>
          <ul style={{ fontSize: '18px' }}>
            {percentuais.map(({ estado, percentual }) => (
              <li key={estado}>
                <strong>{estado}:</strong> {percentual}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FaturamentoPorEstado;