
import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <div>
       <Header />
       <MainContent />
       <Footer />
        <h1>My React App</h1>
        <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;

