import React from 'react';
import './Destinatii.css';

const Destinations = () => {
  return (
    <>
      <div id="container_destinatii">
        <h1 className="heading">Destinatii</h1>
        <section className="dest">
          <div className="box">
              <img src="./london.avif" alt=""/>
              <h3><span>Londra</span></h3>
          </div>
          <div className="box">
              <img src="./tokyo.jpg" alt="" />
              <h3><span>Tokyo</span></h3>
          </div>
          <div className="box">
              <img src="./paris.webp" alt="" />
              <h3><span>Paris</span></h3>
          </div>
          <div className="box">
              <img src="./viena.jpg" alt="" />
              <h3><span>Viena</span></h3>
          </div>
          <div className="box">
              <img src="./istanbul.webp" alt="" />
              <h3><span>Istanbul</span></h3>
            
          </div>
          <div className="box">
              <img src="./cairo.jpg" alt="" />
              <h3><span>Cairo</span></h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Destinations;
