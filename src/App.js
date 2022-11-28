import React, { Component } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import "./App.css"
import CharactersContainer from "./page/CharactersContainer"
import Character from "./page/Character"




 class App extends Component {
  state = {  } 
  render() { 
    return (<>
      <div className='characters_container'>
      <Routes>
        <Route path='/' element={<CharactersContainer/>}></Route>
      </Routes>
      <Routes>
        <Route path='/Character/:id' element={<Character/>}></Route>
      </Routes>
      </div>
    </>);
  }
 }
  
 export default App;
