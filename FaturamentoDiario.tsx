import React, { useState } from 'react';

interface Resultados {
  menor?: number;
  maior?: number;
  media?: string;
  diasAcimaDaMedia?: number;
  error?: string;
}

const FaturamentoDiario = () => {
  const [faturamento, setFaturamento] = useState('');
  const [resultados, setResultados] = useState<Resultados>({});

  const calcularResultados = (dados: string[]) => {
    const valores = dados.map(Number).filter((v) => !isNaN(v) && v > 0);

    if (valores.length === 0) {
      return { error: 'Nenhum valor válido fornecido.' };
    }

    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const soma = valores.reduce((acc, val) => acc + val, 0);
    const media = soma / valores.length;

    const diasAcimaDaMedia = valores.filter((v) => v > media).length;

    return {
      menor,
      maior,
      media: media.toFixed(2),
      diasAcimaDaMedia,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dados = faturamento.split(',').map((v) => v.trim());
    const resultadosCalculados = calcularResultados(dados);

    if (resultadosCalculados.error) {
      setResultados({ error: resultadosCalculados.error });
    } else {
      setResultados(resultadosCalculados);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Faturamento Diário</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={faturamento}
          onChange={(e) => setFaturamento(e.target.value)}
          placeholder="Insira os valores de faturamento diário separados por vírgula"
          style={{ width: '80%', height: '100px', fontSize: '16px', marginBottom: '20px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Calcular
        </button>
      </form>

      {resultados && (
        <div style={{ marginTop: '30px', textAlign: 'left', display: 'inline-block' }}>
          {resultados.error ? (
            <p style={{ color: 'red' }}>{resultados.error}</p>
          ) : (
            <ul style={{ fontSize: '18px' }}>
              <li><strong>Menor valor de faturamento:</strong> R$ {resultados.menor}</li>
              <li><strong>Maior valor de faturamento:</strong> R$ {resultados.maior}</li>
              <li><strong>Média mensal:</strong> R$ {resultados.media}</li>
              <li><strong>Dias acima da média:</strong> {resultados.diasAcimaDaMedia}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FaturamentoDiario;
