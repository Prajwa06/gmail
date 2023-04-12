import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RedoIcon from "@mui/icons-material/Redo";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InboxIcon from '@mui/icons-material/Inbox';
import './css/emailList.css'
import EmailRow from "./EmailRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function EmailList() {
  const[emails,setEmails]=useState([]);

  useEffect(()=>{
    const q = query(collection(db, "emails"),orderBy("timestamp","desc"));
      onSnapshot(q,(snapshot)=>{
          const temp=[];
          snapshot.forEach((doc)=>{
              temp.push({
                  id:doc.id,
                  data:doc.data()
              });
          });
          setEmails(temp);
      });
  },[]);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
        <IconButton>
        <CheckBoxOutlineBlankIcon className="checkBox" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title='Primary' color='red' selected/>
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className="emailList__list">
        {emails.map((email)=>{
          const {id,data}=email;
          const{to,subject,message,timestamp}=data;
        return(
          <EmailRow 
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp ?.seconds*1000).toLocaleString()}
          />)
        })}
      
      </div>
    </div>
  );
}
