import React  from "react";

const NavBar = props =>{
  return(
    <nav className="navbar navbar-light" style={{background: '#00AEC6'}}>
      <a className="navbar-brand" style={{color: '#B8DB4F'}}>Navbar</a>
      <form  onSubmit={props.getCharacter} className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "characterName"/>
      <button className="btn btn-light" style={{background: '#B8DB4F' }} type="submit">Search</button>
    </form>
  </nav>
  );
};

export default NavBar;
