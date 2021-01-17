import React from "react";
import {NavLink} from "react-router-dom";


export function MealWrapper({id, title,max_reservations}){
     return(
       <>
      
       <div className= "title">
        
      <NavLink to= {"/meal/"+ id}>
      <h1> {title}</h1>
     
      <h4>Maximum reservations: {max_reservations}</h4>
       </NavLink>
       </div>
       </>
) 

} 