import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Trust from '../sections/Trust'
import About from '../sections/About'
import ClientCarousel from '../sections/ClientCarousel'
import Products from '../components/Products'
import Footer from '../sections/Footer'
import { Form } from '../components/Form'
import Details from '../sections/Details'
import Youtube from '../sections/Youtube'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      {/* <Form /> */}
      <Trust />
      <Youtube />
      <Products />
      <About />
      {/*       <ClientCarousel /> */}
      <Footer />
    </div>
  );
}

export default Home
