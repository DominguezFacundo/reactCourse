import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Header
      className="main-title"
      title="Bienvenidos a Wuffen peripherals!" 
      />
      <body className="Container">

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />

        <ProductCard
          image="../../assets/headsets/g432-headset.png"
          name="Logitech G 432"
          price="$1500" />
      </body>
    <Footer />
    </div>
  )
}

export default App
