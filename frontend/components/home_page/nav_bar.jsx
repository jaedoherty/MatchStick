import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profiles[this.props.user]
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchProfiles();
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout();
        this.setState({users: {}});
        this.props.history.push('/signout');
    }

    // newLogout() {
    //    this.prop 
    // }

    render() {
        if (!this.props.session.id ) {
            return null;
        } else {
            // debugger
            return (
                <nav id="nav-bar">
                   
                    <button className="head-button" id="home-link"><Link to='/home'> MatchStick </Link></button>
                    <button className="head-button" id="double-take"><Link to='/home'> DoubleTake </Link></button>
                    <button className="head-button" id="questions"><Link to='/editPersonalityQuiz'> Questions </Link></button>
                    {/* <button className="head-button" id="likes">Likes</button> */}
                    {/* <button className="head-button" id="messages">Messages</button> */}
                    <div id="profile-logout">

                        <Link to={`/profiles/${this.props.profileId}`}><button className="head-button" id="my-profile">My Profile </button></Link>
                        <button className="head-button" id="nav-logout" onClick={this.handleClick}>Log Out</button>
                    </div>
                </nav>
            );
        }
    }
}


export default NavBar;