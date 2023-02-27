import React from 'react';
import { pageLinks } from '../data';

export default function PageLinks(props) {
  return (
    
      <ul className={props.parentClass}>
      {pageLinks.map((link)=>{
        const {id, href, text} = link;
        return(
          <li key={id}>
          <a href={href}  className={props.itemClass}>{text}</a>
        </li>
        )
      })}
      
      
    </ul>
    
  )
}
