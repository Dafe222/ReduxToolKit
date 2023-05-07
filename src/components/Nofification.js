import React from "react";
import {Alert} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { uiActons } from "./store/ui-slice";

export default function Notification ({type, message}){
    const dispatch = useDispatch
    const notification = useSelector((state)=> state.ui.notification); 
   

    const handleClose=()=>{
         dispatch(uiActons.shwoNotification({
            open: false
         })
         );
         
    }

    return(
        <div>
          { notification.open && (         
          <Alert severity={type} onClose= {handleClose}>
            {message} </Alert> 
            )}  

                {/* <Alert severity={type}>{message}</Alert> */}


        </div>
    )
} 
