// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './HomePage';
import TransactionPage from './TransactionPage';

function App() {

  return (
    <Router>

      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route exact path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/transactions" element={<TransactionPage />} /> {/* Use element prop instead of component */}
      </Routes> {/* Use Routes instead of Switch */}
    </Router>
  );
}

export default App;
