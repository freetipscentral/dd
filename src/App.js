import React from 'react';
import Layout from './components/Layout/Layout';
import QuizSelector from './containers/QuizSelector/QuizSelector';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer'
import {BrowserRouter,  Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Faq from './components/Faq/Faq'

function App() {
  return (
    
    <BrowserRouter>
        <Navbar />
        <Route path='/aboutUs' exact component={AboutUs} />
        <Route path='/' exact component={HomePage} />
        <Route path='/faq' exact component={Faq} />
        
        {/* <HomePage /> 
        <QuizSelector /> */}
        <Footer />
        
    </BrowserRouter>    
  );
}

export default App;
