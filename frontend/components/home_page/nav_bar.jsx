import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profiles[this.props.user]
    }

    componentDidMount() {
        this.props.fetchProfile[this.props.user.id]
    }

    render() {
        if (!this.props.session.id) {
            return null;
        } else {
            return (
                <nav id="nav-bar">
                   
                    <button className="head-button" id="home-link"><Link to='/'> MatchStick </Link></button>
                    <button className="head-button" id="double-take">DoubleTake</button>
                    <button className="head-button" id="questions">Questions</button>
                    <button className="head-button" id="likes">Likes</button>
                    <button className="head-button" id="messages">Messages</button>
                    <button className="head-button" id="my-profile"> My Profile</button>
                    <button className="head-button" id="nav-logout" onClick={this.props.logout}>Log Out</button>
                </nav>
            );
        }
    }
}


export default NavBar;