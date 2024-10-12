import React from "react";
import gif from "../img.banner/actgifeo150x150px.gif";
import "./header.css";


export function Header() {
    return (
       
        <div className="header">
             <img className="gif" src={gif} alt="Logo animado"/> 
             <p>Consultanos por los Créditos Bancor</p>
                
        </div>  
    )

}
export default Header;
