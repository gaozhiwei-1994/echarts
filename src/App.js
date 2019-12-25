import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'antd/dist/antd.css'
// import EchartsDemo from './EchartsDemo';
import Yx from './yx';

import './App.css';

function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
        <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            {
              // <Route path="/" component={EchartsDemo} />
            }
            <Route path="/" component={Yx} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
