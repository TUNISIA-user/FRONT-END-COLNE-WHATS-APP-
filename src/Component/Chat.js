import React, { useState } from 'react'
import "./chat.css"
import Avtar from './Avtar'
import axios from './axios'
const Chat = ({messages}) => {
  const [data,setData]  = useState("")
   
  const HandelThisDataClcikFomAxios = async(e)=>{
    e.preventDefault()
    console.log(data)
    axios.post("/messages/new", {
      
        message: data,
        name: "DEMP APP",
        timestamp: "just now ....",
        received: true
    
    })
    .then(res => console.log(res))
    .catch(err => console.error("Error:", err));
     
  }
  return (
    <div className='chat'>

         <div  className='chat__header'>
      <div className='chatHeadrRight'> 
          <span class="material-symbols-outlined imageAcoountCirelce"  >account_circle</span>
          
         <div className='chat_headerInfo'>
          <h3>Room name </h3>
          <p>Last seen at ...</p>
         </div>
         </div>
         <div className='chat_headerRight'>
         <span class="material-symbols-outlined">search </span>
         <span class="material-symbols-outlined">more_vert </span>
         <span class="material-symbols-outlined">attach_file </span>
         
         </div>

         
         </div>

     <div className='chat__body'>
 
{
messages.map(index=> 
   <p className={`chat__message ${index.received && "chat__reciever"} `}>
  <span className='chat__name'>{messages.name}</span>
   {index.message}
  <span className='chat__timestamp'>
   {index.timestamp}
  </span>
 </p>
 )

}
  

     
     </div> 
     <hr/>
     <div className='chat__footer'>

     <span class="material-symbols-outlined">sentiment_satisfied</span>
       <form>
        <input  value={data} onChange={(e)=>{setData(e.target.value)}} input="text" placeholder='Type a message' />
       
       </form>
       <span class="material-symbols-outlined">mic</span>
       <button  type='sumbit' onClick={HandelThisDataClcikFomAxios}>Send a Message</button>  
     </div>
 
    </div>
   
  )
}

export default Chat