import { IconButton } from '@mui/material';
import React from 'react'
import './css/emailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
export default function EmailRow(props) {
    const dispatch=useDispatch();
    const {id,title,subject,description,time}=props;
    const navigate=useNavigate();
    const openMail=()=>{
        dispatch(selectMail({
            id,title,subject,description,time
        }));
        navigate('/mail')
    }

  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow__options">
                <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
        </div>
        <h3 className="emailRow__title">
                {title}
        </h3>
        <div className="emailRow__message">
                <h4>{subject} 
                <span className='emailRow__description'>
                    {"- "}{description}
                </span></h4>
        </div>
        <div className="emailRow__time">
            <p>{time}</p>
        </div>
    </div>
  )
}
