import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import ProfileShowContainer from './profiles/profile_show_container';
import {ProtectedRoute} from '../util/route_util'; 
import{ Route, Switch, Link, Redirect } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
// import ProfileFormContainer from './profiles/create_form_profile_container'
import NavBarContainer from './home_page/nav_bar_container';
import NewProfile from './profiles/create_form_profile_container';
import EditProfile from './profiles/edit_form_profile_container'
import EditPersonality from './personality/edit_personality_form_container'
import OtherProfileShow from './profiles/other_profile_show_container'

const App = () => (
    <div id="bigdiv">
        <Modal />
        {/* <header>
            <Link to="/" className="header-link"></Link>
            <GreetingContainer />
        </header> */}
        <GreetingContainer />
        <Switch>
            <Route exact path="/profiles/:profileId" component={ProfileShowContainer}/>
            <Route exact path="/home" component={HomePageContainer}/>"
            <Route exact path="/newProfile/" component={NewProfile} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route exact path="/editPersonalityQuiz" component={EditPersonality} />
            <Route exact path="/seeProfile/:profileId" component={OtherProfileShow} />
            <Redirect from="/nextProfile" to="/home"/> 
            {/* <Route exact path="/:userId/profiles" component={ProfileFormContainer} /> */}
        <Redirect from="/" to="/home"/>
        </Switch>


    </div>
);

export default App;