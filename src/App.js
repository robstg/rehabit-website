import React from 'react';
import './App.css';
import rehabitLogo from './assets/rehabit-logo.jpg';
// Force GitHub Pages refresh - April 24, 2025 v8
function App() {
  return (
    <div className="App">
      <img src={rehabitLogo} alt="Rehabit logo with phoenix" className="rehabit-logo" />
      <header>
        <h1>Rehabit: Your Journey to Recovery or Greatness</h1>
        <p>Track daily habits, rebuild your life, and stay accountable.</p>
        <a href="https://play.google.com/store/apps/details?id=com.yourapp.rehabit" target="_blank">
          <button>Download on Google Play</button>
        </a>
      </header>
      <footer>
        <p>© 2025 Rehabit by RDS Software Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
