import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
