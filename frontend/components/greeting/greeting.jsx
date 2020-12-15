import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../home_page/home_page'
import NavBarContainer from '../home_page/nav_bar_container'


class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }
    render() {

        const sessionLinks = () => (
            <div className="login-signup">
                {/* <img src={window.splashURL}/> */}
                <nav className="login">
                    <Link to='/' id='splash-head'>
                        <h1 className="ms_head">MatchStick</h1>
                    </Link>
    
                    <button className="li-button" onClick={() => this.props.openModal('login')}>LOG IN</button>
                </nav>
                <nav className="sign-up">
                    <h1 id="tagline">Looking for Love?</h1>
                    <button className="su-button" onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                </nav>
            </div>
        );
        // const personalGreeting = () => (
    
        //         <div>
        //             <NavBarContainer /> 
        //              {/* <button className="header-button" onClick={logout}>Log Out</button> */}
    
        //         </div>
        // );
        
       return this.props.currentUser ? null : sessionLinks();
    }
};



export default Greeting;