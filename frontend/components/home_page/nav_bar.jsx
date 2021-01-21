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



    render() {
        if (!this.props.session.id ) {
            return null;
        } else {
            return (
              <nav id="nav-bar">
                <Link to="/home">
                  <button className="head-button" id="home-link">
                    {" "}
                    MatchStick
                  </button>
                </Link>
                <Link to="/home">
                  <button className="head-button" id="double-take">
                    {" "}
                    Home{" "}
                  </button>
                </Link>
                <Link to="/editPersonalityQuiz">
                  <button className="head-button" id="questions">
                    {" "}
                    Questions{" "}
                  </button>
                </Link>
                <Link to="/search">
                  <button className="head-button"> Search </button>
                </Link>

                <div id="profile-logout">
                  <Link to={`/profiles/${this.props.profileId}`}>
                    <button className="head-button" id="my-profile">
                      My Profile{" "}
                    </button>
                  </Link>
                  <button
                    className="head-button"
                    id="nav-logout"
                    onClick={this.handleClick}
                  >
                    Log Out
                  </button>
                </div>
              </nav>
            );
        }
    }
}


export default NavBar;