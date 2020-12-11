import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Second from './Second';
import Interviewee from './Interviewee';
import Interviewer from './Interviewer';
import Dash1 from './Dash1';
import Pre from './Pre';
import LogOut from './LogOut';
import Third2 from './Third2';
import Scheduling from './Scheduling';
import Initial from './Initial';
import LineUp from './LineUp';
import App_3 from './App 3';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from  'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
  
      <Route path="/" exact component={Initial} />
      <Route path="/interviewer" exact component={Interviewer} />
      <Route path="/interviewee" exact component={Interviewee} />
      <Route path="/dash" exact component={Dash1} />
      <Route path="/pre" exact component={Pre} />
      <Route path="/second" component={Second} />
      <Route path='/third' component={Third2} />
      <Route path='/schedule' component={Scheduling} />
      <Route path='/lineUp' component={LineUp} />
      <Route path='/logout' component={LogOut} />
      <Route path='/app' component={App_3} />
     
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

