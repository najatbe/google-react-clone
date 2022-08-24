import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic)=>(

        <div className="sidebar__recentItem" >
          <p> {topic} </p>
        </div>
      )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src='https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png' alt=''/> 
        <Avatar className='sidebar__avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLSUBeGq1itaC3EghXR4nQTAk46RO_fS8NQ&usqp=CAU'/> 
        <h4> Bonjour Najat </h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Relations</p>
                <p className='sidebar__statNumber'>2.453</p>
            </div>
            <div className='sidebar__stat'>
                <p>Vues de votre profile</p>
                <p className='sidebar__statNumber'>2.448</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recents</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developper')}
        </div>
        
    </div>
  )
}

export default Sidebar