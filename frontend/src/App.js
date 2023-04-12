import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Header from './Header';

import Tab1 from './Tab1.js';
import Tab2 from './Tab2.js';
import Tab3 from './Tab3.js';

function App () {
  const [user, setUser] = useState({});
  
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSignOut = (event) =>{
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }


  const handleCallBackResponse = (response) => {
    console.log("encoded token:", response.credential);
    var userobject = jwt_decode(response.credential);
    console.log(userobject);
    document.getElementById("signInDiv").hidden = true;
  }
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
        client_id: "689273081112-hrh537n648kkb09lcfnnidptljnnp7cn.apps.googleusercontent.com",
        callback: handleCallBackResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  );
    google.accounts.id.prompt();
}, []);
// 


  return (
    <div className="App">
{/* //       <div id='signInDiv'> </div>
//         {Object.keys(user).length !=0 &&
//           <button onClick={ (e) => handleSignOut(e)}> Sign Out </button>
// }        { user && 
//         <div>
//           <img src={user.picture} />  
//           <h3> {user.name} </h3>
//         </div>
//         } */}

<Router>
{/* <header>
<nav>
      <ul className="tabs">
        <li
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          <Link to="/tab1">Tab 1</Link>
        </li>
        <li
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          <Link to="/tab2">Tab 2</Link>
        </li>
        <NavDropdown title="Tab 3" id="nav-dropdown">
          <NavDropdown.Item as={Link} to="/tab3/subtab1">
            Subtab 1
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/tab3/subtab2">
            Subtab 2
          </NavDropdown.Item>
        </NavDropdown>
      </ul>
    </nav>


</header> */}
<header><Header/> </header>

      <Routes>
        <Route exact path="/tab1" component={Tab1} />
        <Route exact path="/tab2" component={Tab2} />
        <Route exact path="/tab3" component={Tab3} />
        <Route path="/tab3/subtab1" render={() => <Tab3 subtab="subtab1" />} />
        <Route path="/tab3/subtab2" render={() => <Tab3 subtab="subtab2" />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;




