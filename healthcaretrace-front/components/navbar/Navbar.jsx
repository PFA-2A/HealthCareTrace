import React from 'react'
import Image from 'next/image';
import logo from '/images/scrum2.png'
import Navitem from './Navitem';

const MENU_LIST = [
    {
        text: "Log out",
        href: "/"
    }
]

const Navbar = () => {
  return (
    <header className='navbarHeader'>
      <nav className='nav'>
            <div className='logo'>
                <Image
                    src={logo}
                    alt="Logo"
                    width="40px"
                    height="40px"
                />
                <div> <h1 className='logotext'> Healthcare Trace </h1> </div>
            </div>
            <div className='nav__menu-bar'>
                <div></div>
            </div>
            <div className='nav__menu-list'>
                {
                    MENU_LIST.map( (menu, idx) => {
                        return (
                            <div key={menu.text}>
                                <Navitem {...menu} />
                            </div>
                        );
                    }) 
                }
            </div>
      </nav>
  </header> 
  )
}

export default Navbar