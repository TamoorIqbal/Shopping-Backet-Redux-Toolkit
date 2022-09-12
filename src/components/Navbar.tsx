import React from 'react'

export const Navbar = () => {
  return (<div>

<nav className="navbar bg-light">
  <div className="container-fluid" style={{justifyContent:"center"}}>
    <a className="navbar-brand" href="#" >
      <img src="log.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top mr-2"/>
      <span style={{fontSize:"1.5rem" ,marginLeft:"8px"}} >
        Shopping Basket
        </span>
    </a>
  </div>
</nav>
    </div>)
}
