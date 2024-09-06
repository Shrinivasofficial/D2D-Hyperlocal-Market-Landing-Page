import React from 'react'
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Categories } from './Components/Categories';
import { Shop } from './Components/Shop';
import { Features } from './Components/Features';
import { Footer } from './Components/Footer';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <Shop></Shop>
      <Features></Features>
      <Footer></Footer>
    </div>
  )
}
export default App;