// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
function HomePage() {
  const [ethereumPrice, setEthereumPrice] = useState(null);
  const [ethereumAddress, setEthereumAddress] = useState('');

  useEffect(() => {
    // Fetch Ethereum price from Node.js API
    axios.get('https://ethereum-backend-api.onrender.com/api/ethereum/price')
      .then(response => setEthereumPrice(response.data.ethereumPrice))
      .catch(error => console.error('Error fetching Ethereum price:', error));
  }, []);

  const handleAddressChange = (event) => {
    setEthereumAddress(event.target.value);
  };

  return (
    <div className='home-page'>
      <header>
        <h1>Ethereum</h1>
        {ethereumPrice && <p>Price: ${ethereumPrice}</p>}
      </header>
      <main>
        <input type="text" value={ethereumAddress} onChange={handleAddressChange} placeholder="Enter Ethereum address" />
        <Link to={`/transactions?address=${ethereumAddress}`}>
          <button className='button-1'>Submit</button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
