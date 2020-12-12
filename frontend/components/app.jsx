import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import ProfileShowContainer from './profiles/profile_show_container';
import {ProtectedRoute} from '../util/route_util'; 
import{ Route, Switch, Link } from 'react-router-dom';
import HomePage from './home_page/home_page';
import NavBarContainer from './home_page/nav_bar_container'

const App = () => (
    <div id="bigdiv">
        <Modal />
        {/* <header>
            <Link to="/" className="header-link"></Link>
            <GreetingContainer />
        </header> */}
        <NavBarContainer />
        <Switch>
            <Route exact path="/profiles/:profileId" component={ProfileShowContainer}/>
            {/* <Route exact path="/profile-hub/:profileId" component={HomePage}/>" */}
            <Route path="/" component={GreetingContainer}/>
        </Switch>


    </div>
);

export default App;