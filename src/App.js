import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

const App=()=>(
  <div>
    <Header/>
  </div>
);

//welcome으로 이동시 화면나옴. exact는 안붙이면 /뒤에 potato가 오든 뭐가오든 경로인줄알고 찾아줌 확실한 경로 찾을때 exact
//a태그는 안된다 전체페이지를 새로고침하니까 그러면 state를 다 잃어버려서 안된다. 그래서 Link사용
const Header=()=>(
  <header>
    <h1>My Contents</h1>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>

    <Route exact path="/" component={Welcome}/>  
    <Route path="/contacts" component={Contacts}/>
  </header>
);

//match란 라우터가 우리에게 주는 일종의 prop이다.
const Welcome=()=>(
  <h1>Welcome to the contacts app!</h1>
)

//match.path는 root를 보여준다. 이 링크가 /contacts면 contacts에 속하게된다.
const Contacts=({match})=>(
  <div>
  <ul>
    <li><Link to="/contacts/lynn">Lynn</Link></li>
    <li><Link to="/contacts/jisu">Jisu</Link></li>
    <li><Link to="/contacts/japan-guy">Japan Guy</Link></li>
  </ul>

  <Route exact path={`${match.path}`} render={()=> <h3>Please select a contacts</h3>}></Route>
  <Route path={`${match.path}/:contactName`} component={Contact}/>
  </div>
)

const Contact=({match})=>`Your friends name is ${match.params.contactName}`;
export default App;
