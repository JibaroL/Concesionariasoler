import React from 'react';
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="container-footer">
            <div className='seccion1'>
                <div className='contacto'>
                    <h2>Contacto</h2>
                    
                    <p><FaWhatsapp className="whatsapp-icon " /> 351 226-5637</p>

            
                    <p><FaPhone className="telefono-icon" /> 351 226-5637</p>
                
                </div>
                <div className='redes'>
                    <a className='face' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                        <FaFacebook className="facebook-icon" />
                        <span className="tooltip">Visita nuestro perfil</span>
                   
                    </a>

                    <a className='inst' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="instagram-icon grande" />
            
                        <span className="tooltip">Visita nuestro perfil</span>
                    </a>
                    
                </div>
            </div>
            <div className='seccion2'>
                <p>  copyrigth 2024</p>
                <p>No te detengas</p>
            </div>
        </div>
    )
}

export default Footer;