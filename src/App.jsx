import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemCounter from './components/ItemCounter'
import ItemListContainer from './components/ItemListContainer'
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
        alert("No se pueden agregar mas productos debido a la falta de stock");
        setCount(6);
    }
}

  return (
    
    <div className="App">
      <Navbar />
      <Header
      className="main-title"
      title="Welcome to the market" 
      />
      <div className="Container">

      <ItemListContainer />
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
