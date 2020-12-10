import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import {AuthRoute} from '../util/route_util'; 
import{ Route, Switch, Link } from 'react-router-dom';

const App = () => (
    <div id="bigdiv">
        <Modal />
        <header>
            {/* <Link to="/" className="header-link"></Link> */}
            {/* <GreetingContainer /> */}
        </header>
    <Route path="/" component={GreetingContainer}/>
    {/* <Route path="/home" render */}

    </div>
);

export default App;