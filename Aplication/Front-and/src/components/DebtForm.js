import React, { useState } from 'react';

function DebtForm({ addDebt }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDebt({ name, amount, dueDate });
    setName('');
    setAmount('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nome da Dívida</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Valor</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Data de Vencimento</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Dívida</button>
    </form>
  );
}

export default DebtForm;
