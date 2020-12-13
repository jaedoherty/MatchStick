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
        // const name = this.props.user[this.p??rops.session.id].username
        if (!this.props.session.id) {
            return null;
        } else {
            return (
                <nav id="nav-bar">
                    <Link to='/' id="home-head">
                        <h1 className="title-header">MatchStick</h1>
                    </Link>
                    {/* <Link>DoubleTake</Link>
                <Link>Questions</Link>
                <Link>Likes</Link>
                <Link>Messages</Link> */}
                    {/* <li>{this.props.user[this.props.session.id].username}</li> */}
                    <Link id="prof-link" to={`/profiles/${this.props.user.id}`}>My Profile</Link>
                    {/* <button className="header-button" onClick={logout}>Log Out</button> */}
                </nav>
            );
        }
    }
}


export default NavBar;