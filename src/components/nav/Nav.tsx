import React from "react";

function Nav() {
  const links = ["ecosytem" , "ecosytem" , "ecosytem","ecosytem" , "ecosytem" , "ecosytem"];
  return (
    <nav className="nav">
      <div className="container flex items-center h-[4rem] px-[1rem] lg:px-[0] justify-between">
        <div className="logo">LOGO</div>
        <button className="block lg:hidden"><i className="ri-menu-line"></i></button>
        <div className="nav-items lg:flex flex-col lg:flex-row hidden">
          {links.map((item, index) => (
            <button key={index} className="lg:mr-[1.5rem]">{item}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
