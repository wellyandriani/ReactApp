import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousels from './Dasboard/Carousel'
import Jumbotrons from './Dasboard/jumbotron'
import Cards from './Dasboard/Card';
import Forms from './Dasboard/form';

class App extends Component {
  render() 
  {
    return (

      <div className="App">
      <Navbar />
      <Jumbotrons />
      <h2>Carousel</h2>
      <Carousels />
      <Cards/>
      <Forms/>
      </div>



    );
  }
}

export default App;
