import React from 'react'
import "./sidebar.css"
import Avtar from './Avtar'
import SideBarChat from './SideBarChat'
const SideBar = () => {
  return (
    <div className='sidebar'>
         
        <div className='sidebar_header'>
       <Avtar src ={"https://picsum.photos/id/237/200/300"} />
            <div className='sidebar_headerRight'>
            <span class="material-symbols-outlined">donut_large</span>
            <span class="material-symbols-outlined">chat</span>
            <span class="material-symbols-outlined">more_vert</span>
            </div>
        </div>

        <div className='sidebar_search'> 
            <div className='sidebar_search_Container'>
            <span class="material-symbols-outlined">search</span>
            <input type='text' placeholder='Search For the new Chat'/>
            </div>
        </div>
        <div className='sidebar__chats'>
             <SideBarChat/>
             <SideBarChat/>
             <SideBarChat/>
        </div>
    </div>
  )
}

export default SideBar