import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ItemCounter from './components/itemCounter'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

const [count, setCount] = useState(1);

const decrementFn = () => {
    setCount(count - 1);
    if (count <= 1) {
        alert("No se pueden sacar mas productos");
        setCount(1);
    }
}

const incrementFn = () => {
    setCount(count + 1);
    if (count >= 6) {
        alert("No se pueden agregar mas productos debido al stock");
        setCount(6);
    }
}

  return (
    
    <div className="App">
      <Navbar />
      <Header
      className="main-title"
      title="Bienvenidos a 一流のテクノロジー!" 
      />
      <div className="Container">

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

        <ItemCounter
        decrement={decrementFn} 
        count={count}  
        text="Cantidad de productos"
        increment={incrementFn} />      
      </div>
    <Footer />
    </div>
  )
}

export default App
