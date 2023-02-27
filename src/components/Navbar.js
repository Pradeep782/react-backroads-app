import React from 'react';
import { socialLinks } from '../data';
import logo from '../images/logo.svg';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
   <nav className="navbar">
     <div className="nav-center">
         <div className="nav-header">
           <img src={logo} className="nav-logo" alt="backroads" />
           <button type="button" className="nav-toggle" id="nav-toggle">
           <i className="fas fa-bars"></i>
           </button>
         </div>
       {/* <!-- left this comment on purpose --> */}
       {/* commenting to try the alternative approach */}
       {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link)=>{
            return(
              <li key={link.id}>
              <a href={link.href} className="nav-link">{link.text}</a>
             </li>
            );
          })}
           
        </ul>    */}
        
        {/* Alternative approach by creating a component */}
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
         


       <ul className="nav-icons">
          {socialLinks.map((link)=>{
            const {id, href, icon} = link;
            return(
             <li key={id}>
              <a href={href} rel="noreferrer" target="_blank" className="nav-icon"><i className={icon}></i>
              </a>
             </li>
            );
          })}
         
        </ul>
    </div>
  </nav>
  )
}

export default Navbar
