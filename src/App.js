import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Nofification"; 
import { uiActons } from "./components/store/ui-slice";


function App() { 
  const dispatch = useDispatch();  
  const notification = useSelector((state)=> state.ui.notification);
 
 
 
  const cart = useSelector((state) => state.cart);
 const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn); 

 
  
  // =============Sending a http Request====== 

  useEffect(()=> { 
   
  const sendRequest = async ()=>{
     // sending request==== 
     dispatch(uiActons.shwoNotification({
       open: true, 
       message: 'connecting', 
       type: 'warning',
     }))
    const res = await  fetch('https://reduxapp--http-default-rtdb.firebaseio.com/cartItems.json', 
      {
      method: "PUT", 
      body: JSON.stringify(cart), 
      }
    ); 
    const data = await res.json(); 
     // sending request is successful
     dispatch(uiActons.shwoNotification({
      open: true, 
      message: 'connected', 
      type: 'success',
    }))
    console.log(data)
  }
  sendRequest().catch(err => {
    // 'send error'===
    dispatch(uiActons.shwoNotification({
      open: true, 
      message: 'something went wrong', 
      type: 'error',
    }))
  } );
   
  }, [cart]);

  return (
        <div className="App"> 
     {notification &&  <Notification type={notification.type} message= {notification.message}/>} 


          {!isLoggedIn && <Auth />}
          {isLoggedIn && <Layout />}
        
        </div>
  );
}

export default App;
