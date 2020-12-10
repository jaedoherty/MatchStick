import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="login-signup">
        <nav className="login">
            <button onClick={() => openModal('login')}>LOG IN</button>
        </nav>
        <nav className="sign-up">
            <button onClick={() => openModal('signup')}>SIGN UP</button>
        </nav>
        </div>
        );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;