import React from 'react';
import './App.css';

import Thali  from "./Component/Thali"

import Header  from "./Component/Header"

import Show from "./Component/Show"

import Footer  from "./Component/Footer"

function App() {
  return (
    <main className="header">
       <Header/>
      <Show/>
    <Thali/>
      <Footer/>
     
     
    </main>
  );
}

export default App;



