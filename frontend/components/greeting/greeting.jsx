import React from 'react';
import {Link} from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="login-signup">
            {/* <img src={window.splashURL}/> */}
            <nav className="login">
                <Link to='/' id='splash-head'>
                    <h1 className="ms_head">MatchStick</h1>
                </Link>

                <button className="li-button"onClick={() => openModal('login')}>LOG IN</button>
            </nav>
            <nav className="sign-up">
                <h1 id="tagline">Looking for Love?</h1>
                <button className="su-button" onClick={() => openModal('signup')}>SIGN UP</button>
            </nav>
        </div>
        );
    const personalGreeting = () => (
        
        <hgroup className="header-group">
            <Link to='/' id="home-head">
                    <h1 className="ms_head">MatchStick</h1>
            </Link>            
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;