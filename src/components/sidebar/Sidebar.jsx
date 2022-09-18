import React, { useState } from 'react';
import './Sidebar.css';
import { motion } from 'framer-motion';
import Logo from '../../imgs/logo.png'
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons"

import { SidebarData } from '../../Data/Data'; 

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth)
    return (
      <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <UilBars style={{opacity:'1 !important', fontSize:'larger'}} />
        </div>
      <motion.div className='Sidebar'
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
            {/* {Logo} */}
            <div className="logo">
                <img src={Logo} alt="" />
                <span>MyShop</span>
            </div>

            {/* {Menu} */}
            <div className="menu">
                {/* We will map through the array of meny we created in the data.js file */}
                {SidebarData.map((item, index) => 
                    <div className={selected===index ? "menuItem active" : "menuItem"} key={index}
                    onClick={()=>setSelected(index )}
                    >
                        <item.icon />
                        <span>{item.title}</span>
                    </div>
                )}

                <div className="menuItem">
                    <UilSignOutAlt />
                    <span>Sign Out</span>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default Sidebar