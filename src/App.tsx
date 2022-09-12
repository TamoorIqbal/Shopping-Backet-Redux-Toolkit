import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Basket } from './components/Basket';
import { Product } from './components/Product';
import { CartItem } from './components/CartItem';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import {store} from './store/store'
function App() {
  return (<Provider store={store} >

    <Navbar/>
    <Product/>
    <Basket />
    </Provider >
  );
}

export default App;
