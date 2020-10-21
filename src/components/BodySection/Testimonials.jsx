import React from 'react';

//  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';

//import ReactBootstrapCarousel from "react-bootstrap-carousel";
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


function Testimonials() {
  return (
    <div >
    

<section id="testimonials">

  {/* <div id="testimonial-carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
        <img class="testimonial-img" src="images/dog-img.jpg" alt="dog-profile"/>
        <p class="testimonial-imgtext"><em>Pebbles, New York</em></p>
      </div>

      <div class="carousel-item">
        <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
        <img class="testimonial-img" src="images/lady-img.jpg" alt="lady-profile"/>
        <p class="testimonial-imgtext"><em>Beverly, Illinois</em></p>
      </div>
      <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div> */}
{/* -------------------------------------------------------------- */}
<Carousel className="carousel-inner">

  <Carousel.Item >
    <img className=" testimonial-img"  src="images/dog-img.jpg" alt="dog-profile" />
    <Carousel.Caption>
      <h3 className="bigtext" >I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h3>
      <p className="imgtext" ><em>Pebbles, New York</em></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img  className="testimonial-img" src="images/lady-img.jpg" alt="lady-profile"/>

    <Carousel.Caption>
      <h3 className="bigtext" >My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h3>
      <p className="imgtext" ><em>Beverly, Illinois</em></p>
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel>
{/* 
<Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
{/* --------------------------------------------------------------- */}
</section>
      
    </div>
  );
}

export default Testimonials;
