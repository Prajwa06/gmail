import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'
import './css/login.css'
export default function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          dispatch(login({
           displayName: user.displayName,
           email:user.email,
           photoUrl:user.photoURL,
          }));
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt="" />
        <Button className='btn' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}
