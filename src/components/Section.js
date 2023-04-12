import React from 'react'
import './css/section.css'
export default function Section(props) {
    const {Icon,title,color,selected}=props;
  return (
    <div className={`section ${selected && 'section--selected'}`}
     style={{
        borderBottom: `3px solid ${color}`,
        color:`${selected && color}`,
      }}>
        <Icon/>
        <h4>{title}</h4>
    </div>
  )
}
