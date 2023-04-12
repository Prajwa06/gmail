
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {  useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }));
        // ...
      } else {
        dispatch(logout());
      }
    });
  },[]);
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);
  return (
  
      <div className="app">
      {!user ? (<Login/>):(
        <>
        <Header/>  
        <div className="app__body"> 
          <Sidebar/>
         <Routes>
          <Route path="/mail" element={<Mail/>}/>
          <Route path="/" element={<EmailList/>}/>
         </Routes>
      </div>
      {sendMessageIsOpen && <SendMail/>}
      </>) }
      
    </div>
    
   
   
  );
}

export default App;
