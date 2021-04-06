import React from 'react'
import NavbarFixed from './navbar/NavbarFixed'
import NavbarNormal from './navbar/NavbarNormal'
import NavbarNormalFixed from './navbar/NavbarNormalFixed'

const Navbar = () => {

  const html = 'const a = 0;';
  const css = 'const a = 0;';
  return(
    <div>
      <h1>Navbar</h1>
      <NavbarFixed/>  
      <NavbarNormal/>  
      <NavbarNormalFixed/>      
    </div>
  )
}

export default Navbar