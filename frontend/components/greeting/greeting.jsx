import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../home_page/home_page'
import NavBarContainer from '../home_page/nav_bar_container'


const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="login-signup">
            {/* <img src={window.splashURL}/> */}
            <nav className="login">
                <Link to='/' id='splash-head'>
                    <h1 className="ms_head">MatchStick</h1>
                </Link>

                <button className="li-button" onClick={() => openModal('login')}>LOG IN</button>
            </nav>
            <nav className="sign-up">
                <h1 id="tagline">Looking for Love?</h1>
                <button className="su-button" onClick={() => openModal('signup')}>SIGN UP</button>
            </nav>
        </div>
    );
    // const personalGreeting = () => (
    //     <div>
    //         <hgroup className="header-group">
    //             <nav className="li-head">
    //                 {/* <Link to='/' id="home-head">
    //                         <h1 className="ms_head">MatchStick</h1>
    //                 </Link>             */}
    //                 <button className="header-button" onClick={logout}>Log Out</button>
    //             </nav>
    //             <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //         </hgroup>
    //         <HomePage />
    //     </div>
    // );

    return currentUser ? <NavBarContainer /> : sessionLinks();
};


export default Greeting;