import {Link} from "react-router-dom"
import React from 'react'
// img
import logorest from '../images/logorest.png'
import about from '../img/about.jpg'
import lobsterbisque from '../img/menu/lobsterbisque.jpg'
import breadbarrel from '../img/menu/breadbarrel.jpg'
import cake from '../img/menu/cake.jpg'
import greeksalad from '../img/menu/greeksalad.jpg'
import lobsterroll from '../img/menu/lobsterroll.jpg'
import mozzarella from '../img/menu/mozzarella.jpg'
import spinachsalad from '../img/menu/spinachsalad.jpg'
import tuscangrilled from '../img/menu/tuscangrilled.jpg'
import caesar from '../img/menu/caesar.jpg'
import gallery1 from '../img/gallery/gallery1.jpg'
import gallery2 from '../img/gallery/gallery2.jpg'
import gallery3 from '../img/gallery/gallery3.jpg'
import gallery4 from '../img/gallery/gallery4.jpg'
import gallery5 from '../img/gallery/gallery5.jpg'
import gallery6 from '../img/gallery/gallery6.jpg'
import gallery7 from '../img/gallery/gallery7.jpg'
import gallery8 from '../img/gallery/gallery8.jpg'


export default function Navigation() {
  return (
    
    <>
     
{/* <!-- ======= cabecera ======= --> */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
          <h1>Bienvenido a  <span>D' Maravi</span></h1>
          <h2>Entregando excelente comida por más de 5 años!!</h2>

          <div className="btns">
            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Nuestro menú</a>
            <a href="https://api.whatsapp.com/send?phone=51975809372&text=Bienvenido%20a%20D'Maravi,%20gracias%20por%20comunicarte%20con%20nosotros,%20desea%20realizar%20una%20reserva?" target="_blank" className="btn-book animated fadeInUp scrollto">Reserva</a>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.facebook.com/Restaurante-D-MARAVI-109309953798755/videos/restaurante-dmaravi/287982289411885" target="_blank" className="glightbox play-btn"></a>
        </div>
      </div>
    </div>
  </section>

{/* main start */}
  <main id="main">
  {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              {/* AQUI */}
              <img src={about} alt=""></img>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Restaurante D'Maravi se creó hace mas 5 años</h3>
            <p className="fst-italic">
            La fusión de la gastronomía tradicional con la contemporánea define a nuestro restaurante. Un lugar de disfrute y relajación en una de las zonas más encantadoras de la ciudad de Ica. 
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Somos el mejor punto para tu paladar</li>
              <li><i className="bi bi-check-circle"></i> Contamos con el mejor personal en cocina y atención</li>
              <li><i className="bi bi-check-circle"></i> Preparamos todo tipo de platillos, ya sean criollos, marinos entre otros</li>
            </ul>
            <p>
              El ambiente es super agradable, contamos con espacios abiertos con juegos recreativos para niños!
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Por qué? </h2>
          <p>Por qué elegir nuestro restaurante</p>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <span>01</span>
              <h4>Ofertas</h4>
              <p>Contamos con las mejores ofertas todos los dias, además de sorteos en semanas festivas</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
              <h4>Comida</h4>
              <p>Nuestros platos son deliciosos y saludables, preparados por profesionales del arte culinario</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <span>03</span>
              <h4> Precios e instalaciones</h4>
              <p>Contamos con los mejores precios a nivel provincial, y con una instalacion amplia, fresca y segura</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Menu Section ======= --> */}
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Menu</h2>
          <p>Nuestros platos mas pedidos</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-6 menu-item filter-starters">
            <img src={lobsterbisque} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Sopa de langosta</a><span>S/25.00</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={breadbarrel} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Barril de pan</a><span>S/18.00</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src={cake} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Pastel de cangrejo</a><span>S/20.00</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={caesar} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Caesar</a><span>S/19.00</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={tuscangrilled} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Toscano a la parrilla</a><span>S/25.00</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img src={mozzarella} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a><span>S/24.00</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={greeksalad} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Ensalada griega</a><span>S/29.90</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img src={spinachsalad} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Ensalada de espinaca</a><span>S19.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img src={lobsterroll} className="menu-img" alt=""></img>
            <div className="menu-content">
              <a href="#">Rollo De Langosta</a><span>S/22.00</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* <!-- ======= Book A Table Section ======= --> */}
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Nombres" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Teléfono/Celular" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" name="date" className="form-control" id="date" placeholder="Fecha" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" className="form-control" name="time" id="time" placeholder="Tiempo" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" className="form-control" name="people" id="people" placeholder="Número de personas" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Mensaje"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Enviar</button></div>
        </form>

      </div>
    </section>
    
    {/* <!-- ======= Gallery Section ======= --> */}
    <section id="gallery" className="gallery">

      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Algunas fotos de nuestras instalaciones</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-0">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a  className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery1} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery2} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a  className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery3} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery4} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery5} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a  className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery6} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery7} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery8} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <footer className="text-white py-4">
      <div className="container">
      <p className="sigue">Siguenos en:</p>
        <div className="fcontainer">
        
        
        <a target="_blank" href="https://www.facebook.com/Restaurante-D-MARAVI-109309953798755">
        <i className="fa-brands fa-facebook-square fi"></i>    </a>
    
      <a target="_blank" href="https://www.facebook.com/Restaurante-D-MARAVI-109309953798755">
      <i className="fa-brands fa-twitter-square fi"></i>
       </a>

       <a target="_blank" href="https://api.whatsapp.com/send?phone=51975809372&text=Bienvenido%20a%20D'Maravi,%20gracias%20por%20comunicarte%20con%20nosotros,%20desea%20realizar%20una%20reserva?">
       <i className="fa-brands fa-whatsapp-square fi"></i>
       </a>
       </div>
       <hr></hr>
       <div className="copyr mt-3">
       <p>Copyright © D'Maravi - 2022</p>    
       </div>
    </div>
    </footer>
    
    </main>    
  </>

  
  )
}
