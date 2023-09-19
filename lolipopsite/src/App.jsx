import React from 'react';
import './App.css';

function App() {
  return (
    <div className="background">
      {/* Header */}
      <header>
        <h1 className="rainbow-text"> Lolipop Store </h1>
      </header>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li> <a href="/" className="magenta-link">Shop </a></li>
          <li> <a href="/about" className="magenta-link">About</a> </li>
          <li> <a href="/flavors" className="magenta-link">Flavors</a> </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main>
        <section>
          <h2 className="rainbow-text">Welcome to our Online Shop</h2>
        
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p className="black-text">&copy; {new Date().getFullYear()} Capstone Project</p>
      </footer>
    </div>
  );
}

export default App;

