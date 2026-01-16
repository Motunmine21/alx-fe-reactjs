
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>My React App</h1>

      {/* Using the UserProfile component */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys painting and traveling" 
      />
    </div>
  );
}

export default App;

