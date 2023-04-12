import React from 'react';
import './css/sidebarOption.css';
export default function SidebarOption(props) {
    const{Icon,title,number,selected}=props;
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'} ?`}>
      <Icon className="icon"/>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}
