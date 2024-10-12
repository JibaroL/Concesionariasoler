import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderNovedades.css";
import logo1 from "../img.public/imagenesdeAutos/th (8).jpeg";
import logo2 from "../img.public/Strada/DSCF0133.jpg";
import logo3 from "../img.banner/Encabezado-Web-Prestamo-Automotor.jpg";
import img4 from "../img.public/p308/DSCF0269-Mejorado-NR.jpg";

export function Novedades() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2, // Número de tarjetas a mostrar al mismo tiempo
    slidesToScroll: 1,
    autoplay: true, // Activar el autoplay
    autoplaySpeed: 3000, // Velocidad del autoplay en milisegundos (4 segundos en este caso)
    responsive: [
      {
        breakpoint: 500, // En pantallas de 500px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000, // En pantallas de 1000px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container-carousel">
      <div className="info">
        <h3> Buen Negocio Automotor tu 0km o Usado </h3>
      </div>
      <Slider {...sliderSettings} className="slider">

        <div className="car" >
          <img src={logo2} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
          <br></br>
            <h5 className="card-title">Consultanos!!</h5>
            <p className="card-text">De lun a vie de 8 a 20 hs.</p>
          </div>
        </div>
        <div className="car" >
          <img src={logo1} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
          <br></br>
            <h5 className="card-title">"Cotizamos tu usado al mejor precio."</h5>
            

          </div>
        </div>
        <div className="car" >
          <img src={img4} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
          <br></br>
            <h5 className="card-title">"Conoce nuestro showroom"</h5>
            <p className="card-text">Av. Agustín Garzón 5142</p>

          </div>
        </div>
        <div className="car" >
          <img src={logo3} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
            <br></br>
            <h5 className="card-title">Generamos tu credito </h5>
            <p className="card-text">De lun a vie de 8 a 20 hs.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
