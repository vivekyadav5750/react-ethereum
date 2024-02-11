import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Transaction.css';
import IconButtonWithBadge from './Nav';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TransactionPage() {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ethereumAddress = searchParams.get('address');

  useEffect(() => {
    const fetchBalanceAndTransactions = async () => {
      try {
        // Fetch balance and transactions concurrently
        const [balanceResponse, transactionsResponse] = await Promise.all([
          axios.get(`https://ethereum-backend-api.onrender.com/api/ethereum/balance/${ethereumAddress}`),
          axios.get(`https://ethereum-backend-api.onrender.com/api/ethereum/transactions/${ethereumAddress}`)
        ]);

        setBalance(balanceResponse.data.balance);
        setTransactions(transactionsResponse.data.transactions);
      } catch (error) {
        console.error('Error fetching Ethereum data:', error);
      }
    };

    if (ethereumAddress) {
      fetchBalanceAndTransactions();
    }
  }, [ethereumAddress]);

  const handleNotificationClick = () => {
    // Handle notification click event
    console.log('Notification clicked!');
    alert("Received 0.2 ETH on 0xbbsksjsa");
  };

  return (


    <>
    <div className='nav-bar'>
      
        <Link to="/">Home</Link>
        <IconButtonWithBadge icon={<FaBell />} onClick={handleNotificationClick} />
      </div>
    <div className='transaction-page'>
      
      <h1>Ethereum Transactions</h1>

      {balance && (
        <div className='balance'>
          <h3>Balance : {balance}</h3>
        </div>
      )}
      <div className="table-container">

        <table>
          <thead className='cell-highlight'>
            <tr>
              <th>Hash</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.hash}</td>
                <td>{transaction.from}</td>
                <td>{transaction.to}</td>
                <td>{transaction.eth}</td>
                <td>{transaction.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default TransactionPage;