import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import './Navbar.css';
import { SidebarData } from './sidebar';

function Navbar() {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <nav className={'nav-menu'}>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;











// import React from 'react'
// import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <div className="navbar">
//             <Link to="#">
//                 <FaIcons.FaBars/>
//             </Link>    
//         </div>
//     )
// }


// export default Navbar;