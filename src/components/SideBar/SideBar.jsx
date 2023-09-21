import React,{useState} from 'react'
import './SideBar.css'
import Logo from '../Assets/lock-solid.svg'
import { SidebarData } from '../../Data/data'
import {UilSignOutAlt} from '@iconscout/react-unicons'


const SideBar = () => {
  const [selected,setSelected]=useState(0)
  return (
    <div className='SideBar'>
      {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>Augustine<span> Schools</span></span>
      </div>
      {/*menu*/}
      <div className="menu">
        {SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menuItem active':"menuItem"}
            key={index}
            onClick={()=>setSelected(index)}
            >
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
    </div>
  )
}

export default SideBar
