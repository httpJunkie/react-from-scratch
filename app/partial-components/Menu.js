import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AppContext } from '../context/AppContext'

import Hamburger from '../ui-components/hamburger/Hamburger'

const Menu = () => {
  const context = useContext(AppContext)
  const handleClick = () => {
    context.toggleSidenav(!context.navOpen)
  }
  return (
    <ul style={{userSelect: 'none'}}>
      <li className='link'>
        <NavLink className='text_link' tabIndex='2' exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink className='text_link' tabIndex='3' activeClassName='active' to='/events'>Events</NavLink>
      </li>
      <li className='link'>
        <a className='text_link' tabIndex='4' href='https://github.com/httpJunkie/react-from-scratch'>
          Source Code
        </a>
      </li>
      <li className='menu'>
        <Hamburger onClick={handleClick} />
      </li>
    </ul>
  )
}

export default Menu