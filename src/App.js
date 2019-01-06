import React, { Component } from 'react';
import {Route} from 'react-router-dom';

const App=()=>(
  <div>
    <Header/>
  </div>
);

//welcome으로 이동시 화면나옴. exact는 안붙이면 /뒤에 potato가 오든 뭐가오든 경로인줄알고 찾아줌 확실한 경로 찾을때 exact
const Header=()=>(
  <header>
    <h1>My Contents</h1>
    <Route exact path="/" component={Welcome}/>  
    <Route path="/contacts" component={Contacts}/>
  </header>
);

const Welcome=()=>(
  <h1>Welcome to the contacts app!</h1>
)

const Contacts=()=>(
  <ul>
    <li>Lynn</li>
    <li>Jisu</li>
    <li>Japan Guy</li>
  </ul>
)
export default App;
