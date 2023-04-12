import React from "react";
import "./css/sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
 
export default   function   SendMail() {
    const gmail= collection(db,"emails");
    const time=serverTimestamp();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
   
    dispatch(closeSendMessage());
    addDoc(gmail,{
            to:data.to,
            subject:data.subject,
            message:data.message,
            timestamp:time,
    });
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={handleClick} className="sendMail__close" />
      </div>
      <form onClick={handleSubmit(onSubmit)}>
      {errors.to && <p className="sendMail__errors"> To is Required</p>}
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
       {errors.subject && (
          <p className="sendMail__errors"> Subject is Required</p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
         {errors.message && (
          <p className="sendMail__errors"> Message is Required</p>
        )}
        <input className="sendMail__message" placeholder="Message..." type="text"    {...register("message", { required: true })}/>

        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}
