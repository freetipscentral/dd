import React from 'react';
import Layout from './components/Layout/Layout';
import QuizSelector from './containers/QuizSelector/QuizSelector';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';

function App() {
  return (
    
    <div>
        <Navbar />
        <HomePage /> 
        <QuizSelector />
    </div>    
  );
}

export default App;
