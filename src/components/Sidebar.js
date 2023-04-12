import { Button, IconButton } from '@mui/material'
import React from 'react'
import './css/sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTimeFilled';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

export default function Sidebar() {
  const dispatch=useDispatch();

  const handleClick =()=>{
    dispatch(openSendMessage());
  }
  return (
    <div className='sidebar'>
      <Button className='sidebar__compose' startIcon={<AddIcon/>} fontSize='large' onClick={handleClick}>COMPOSE</Button>
      <SidebarOption selected={true} Icon={InboxIcon} title="Inbox" number="50"/>
      <SidebarOption Icon={StarIcon} title="Starred" number="45"/>
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="58"/>
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="50"/>
      <SidebarOption Icon={NearMeIcon} title="Sent" number="50"/>
      <SidebarOption Icon={NoteIcon} title="Draft" number="50"/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number="50"/>
      
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <PersonIcon/>
            </IconButton>
            <IconButton>
                <DuoIcon/>
            </IconButton>
            <IconButton>
                <PhoneIcon/>
            </IconButton>
        </div>
      </div>
    </div>


  )
}
