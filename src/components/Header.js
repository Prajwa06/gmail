import React from 'react'
import './css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Header() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
        signOut(auth);
    }
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
        </div>
        <div className="header__middle">
            <SearchIcon className='searchIcon'/>
            <input placeholder="Search Mail" type="text" />
            <ArrowDropDown className='header__inputCaret'/>
        </div>
        <div className="header__right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={handleLogout} src={user?.photoUrl}/>
        </div>
    </div>
  )
}
