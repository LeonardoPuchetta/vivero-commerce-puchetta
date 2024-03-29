import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import About from './components/About';

import CartProvider from "./providers/CartProvider";
import AuthProvider from "./providers/AuthProvider";


const App = () => {

  return (
    <AuthProvider>
    <CartProvider >
      <BrowserRouter>
        <NavBar/>
        <Routes >
          <Route path={process.env.PUBLIC_URL + '/'} element={<ItemListContainer/>}/>
          <Route path={process.env.PUBLIC_URL + '/item/:idItem'} element={<ItemDetailContainer/>}/>
          <Route path={process.env.PUBLIC_URL + '/category/:idCategory'} element={<ItemListContainer/>}/>
          <Route path={process.env.PUBLIC_URL + '/cart'}  element={<Cart/>}/>
          <Route path={process.env.PUBLIC_URL + '/about'}  element={<About/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>  
        <Footer/> 
  </BrowserRouter>
    </CartProvider>
  </AuthProvider>
     
  )
}

export default App 


