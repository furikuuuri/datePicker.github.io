import { useEffect, useState } from 'react';
import logo from './img/logo.png';
import "./styles/timeBlock.css"
export default function TimeBlock(props) {
  useEffect(() => {
    return function cleanupSelectedTime() {
      props.onClick("",{})
    };
  },[]);
  const [isHover,setIsHover]=useState()
  return (
       <div className="timeBlock_container"
        onClick={()=>props.onClick(props.id,props.time_string)}
        style={{
              border:props.isSelected?"3px solid #f94015":"3px solid #193250",
              backgroundColor:props.isSelected?"#f94015":isHover?"#193250":"white",
              color:props.isSelected?"white":isHover?"white":"#193250",
              transform: props.isSelected?"scale(1.03)":"scale(1)",
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
           <div className="timeBlock_string">{props?.time_string?.startTime?.slice(0,5)}-{props?.time_string?.endTime?.slice(0,5)}</div>
       </div>
  );
}
