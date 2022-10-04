import { useEffect, useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Transaction added successfully.');

export const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
    notify();
  };

  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Submit Transaction</button>
        <Toaster />
      </form>
    </>
  );
};
