import React from "react";

export function Footer(){

    return(
        <div className= "footer" >
           <div className= "container">
               <div className= "row">
               <div className= "col">
                  <h4>Address</h4>
                  <ul className= "list-unstyled">
                      
                      <li>Copenhagen</li>
                      <li>Danmark</li>
                  </ul>
                </div>
                <div className= "col">
                  <h4>Contact</h4>
                  <ul className= "list-unstyled">
                      <li> 12345678</li>
                      <li>abc@gmail.com</li>
                      
                 </ul>
                 </div>
               </div>
               <hr />
               <div className="row">
                   <p className= "col-sm">
                   &copy;{new Date().getFullYear()}| All rights reserved
                   </p>
               </div>
               </div> 
        </div>
    )
}