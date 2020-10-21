import React from "react";
//import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { Router } from "react-router-dom";
 import Scrollchor from 'react-scrollchor';
//import { Pricing, Router } from 'react-router-dom';
//import NavItems from "../NavigationBar/NavItems";

function navbar(){
    return(
        <div class=" " >
                          
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top  ">
               
                   <Scrollchor to="#home" animate={{offset: 20, duration: 600}} class="navbar-brand " >tindog </Scrollchor> 
                                
               {/* <Link to="../components/BodySection/Pricing/#pricing" class="navbar-brand">Pricing</Link> 
                 <NavLink
                to="../components/BodySection/#pricing"
                activeClassName="selected"
                // etc...
                >Link to Hash Fragment</NavLink> */}
                
               {/* <Scrollchor to="/Pricing" className="nav-link">Pricing</Scrollchor> */}

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse  " id="navbarTogglerDemo03">
                
                <ul class="navbar-nav ml-auto ">
                <li class="nav-item ">

                    <Scrollchor to="#pricing" class="nav-link" >Pricing</Scrollchor>
                      
                    {/* <a class="nav-link" href="#pricing">Pricing</a> */}
                    {/* <Link to="#Pricing">Pricing</Link> */}
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#cta"> Download</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>

                </div>

               
            </nav>
        
          
        
            
        </div>
    );
}
export default navbar;