import React, { useEffect, useState } from "react"
import SideBar from "./Component/SideBar"
import Chat  from "./Component/Chat"
import "./app.css"
import  Pusher from "pusher-js"
import axios  from "./Component/axios"
const App = ()=>{
const [messages,setMessages] = useState([])

 useEffect(()=>{
         axios.get("/message/sync")
         .then(reponse =>{
          console.log(reponse)
          setMessages(reponse.data)
        })
 },[])

console.log(messages)

  useEffect(()=>{
    const  pusher = new Pusher('63ee1225bb81547a684d', {
      cluster: 'eu'
    });

    const  channel = pusher.subscribe('messsages');
    channel.bind('inserted', (newMessage) =>{
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
     return ()=>{channel.unbind_all()
          channel.unsubscribe()
     }

  },[messages])


  return(
    <div className="app">

        <div className="app__body"> 

        <SideBar />
        <hr/>
        <Chat messages ={messages} />

        </div>
  
    </div>
  )
}

export default App