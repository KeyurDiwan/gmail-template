import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import EmailList from './Components/EmailList';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mail from './Components/Mail';
import SendMail from './Components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
       { sendMessageIsOpen && <SendMail />}
      </div>
   
  );
}

export default App;
