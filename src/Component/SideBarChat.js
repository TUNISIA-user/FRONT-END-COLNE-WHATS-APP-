import React from 'react'
import "./SideBarChat.css"
import Avtar from './Avtar'
const SideBarChat = () => {
  return (
    <div className='sidebarChat'>

        <div className='imgAvtar'> 
        <span class="material-symbols-outlined imageAcoountCirelce"  >account_circle</span>
          
        </div>
        
        <div className='sidebarChat__info'>
            <h2>Room name </h2>
            <p>This is the last message </p>
        </div>


    </div>
  )
}

export default SideBarChat