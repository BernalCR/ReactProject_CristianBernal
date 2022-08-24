import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <Navbar/>

      <ItemListContainer LandingText="BIKES ARE COMING SOON"/>
    </>
  );
}

export default App;
