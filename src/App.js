import React from 'react';
import Layout from './components/Layout/Layout';
import QuizSelector from './containers/QuizSelector/QuizSelector';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer'

function App() {
  return (
    
    <div>
        <Navbar />
        <HomePage /> 
        <QuizSelector />
        <Footer />
    </div>    
  );
}

export default App;
