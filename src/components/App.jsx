import React from 'react';
import Navbar from "../components/HeaderSection/NavigationBar/Navbar";
import Header from "../components/HeaderSection/Header";
import Features from "./BodySection/Features";
import Testimonials from "./BodySection/Testimonials";
import Press from './BodySection/Press';
import Pricing from './BodySection/Pricing';
import CTA from './FooterSection/CTA';
import Footer from './FooterSection/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Header/>
      <Features/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
      <Press/>
      <Footer/>
    </div>
  );
}

export default App;
