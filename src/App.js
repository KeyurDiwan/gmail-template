import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mail from './Mail';

function App() {
  return (
  
    <div className="app">
     
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path = '/mail' element = { <Mail />} > </Route>

             <Route path = '/' element = {<EmailList />} ></Route>
          </Routes>
       
        </div>
     
      </div>
   
  );
}

export default App;
