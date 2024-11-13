import React, { useEffect, useState } from 'react';
import './styles/CotacoesSection.css';

function CotacoesSection() {
  // Estado para armazenar as cotações
  const [cotacoesData, setCotacoesData] = useState([]);

  // Função para verificar se a data é mais antiga que uma semana
  const isOldQuote = (date) => {
    const quoteDate = new Date(date);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return quoteDate < oneWeekAgo;
  };

  // Função para buscar cotações reais da API Exchangerate.host
  const fetchUpdatedCotacoes = async () => {
    try {
      const response = await fetch(`https://api.exchangerate.host/latest?base=USD`);
      console.log('Status da resposta:', response.status); // Verifica o status da resposta

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data); // Log dos dados recebidos da API

      if (data && data.rates) {
        const newCotacoes = [
          { codigo: "USD", valor: data.rates.USD || 1, data: new Date().toISOString().split('T')[0] },
          { codigo: "EUR", valor: data.rates.EUR, data: new Date().toISOString().split('T')[0] },
          { codigo: "JPY", valor: data.rates.JPY, data: new Date().toISOString().split('T')[0] },
          { codigo: "GBP", valor: data.rates.GBP, data: new Date().toISOString().split('T')[0] },
          { codigo: "CAD", valor: data.rates.CAD, data: new Date().toISOString().split('T')[0] },
        ];
        setCotacoesData(newCotacoes);
      } else {
        throw new Error("Erro na resposta da API");
      }
    } catch (error) {
      console.error('Erro ao buscar cotações:', error);
      alert('Não foi possível atualizar as cotações. Tente novamente mais tarde.');
    }
  };

  // useEffect para carregar as cotações inicialmente
  useEffect(() => {
    fetchUpdatedCotacoes(); // Carrega as cotações reais ao montar o componente
  }, []);

  return (
    <div className="section cotacoes-section">
      <h1>
        <img src="/logo.png" alt="Logo" className="logo-icon" /> {/* Logo à esquerda */}
        Cotações de Moedas
        <img src="/logo.png" alt="Logo" className="logo-icon" /> {/* Logo à direita */}
      </h1>
      <button onClick={fetchUpdatedCotacoes} className="refresh-button">Atualizar Cotações</button> {/* Botão para atualizar cotações */}
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
              <td>{cotacao.valor.toFixed(2)}</td>
              <td>{cotacao.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CotacoesSection;
