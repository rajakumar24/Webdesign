import React from "react";
import { Navbar } from 'react-bootstrap';
import "./App.css";
import Layout from '../../containers/Layout/Layout'
import {Route, Switch, Redirect } from 'react-router-dom'

import NewPage from '../../newpage'


function App() {
    return (
         <div>

            <div className="App">


           
                
                <Switch>
                <Route exact path="/" component={Layout} />
                <Route exact path="/NewPage" component={NewPage} />
                </Switch>
            </div></div>
    );
}

export default App;