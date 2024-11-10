import React, { useEffect, useState } from 'react';
import cotacoes from '../data/cotacoes.json'; 
import './styles/CotacoesSection.css';

function CotacoesSection() {
  const [cotacoesData, setCotacoesData] = useState([]);


  const isOldQuote = (date) => {
    const quoteDate = new Date(date);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return quoteDate < oneWeekAgo;
  };

  useEffect(() => {
    setCotacoesData(cotacoes);
  }, []);

  return (
    <div className="section cotacoes-section">
      <h1>
        <img src="/assets/logo.png" alt="Logo" className="logo-icon" /> 
        Cotações de Moedas
        <img src="/assets/logo.png" alt="Logo" className="logo-icon" /> 
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Código Moeda</th>
            <th>Valor Cotação</th>
            <th>Data Cotação</th>
          </tr>
        </thead>
        <tbody>
          {cotacoesData.map((cotacao) => (
            <tr
              key={cotacao.codigo}
              style={{
                color: isOldQuote(cotacao.data) ? 'red' : 'green',
              }}
            >
              <td>{cotacao.codigo}</td>
              <td>{cotacao.valor}</td>
              <td>{cotacao.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CotacoesSection;
