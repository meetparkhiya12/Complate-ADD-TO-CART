import { Route, Routes } from "react-router"
import Product from "./Componets/Product/Product.jsx"
import Header from "./Componets/Header/Header.jsx"
import Viewcart from "./Componets/Viewcart/viewcart.jsx"
import Home from "./Componets/Home/Home.jsx"



function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/view" element={<Viewcart/>}></Route>
    </Routes>
     </>
     
  )
}

export default App
