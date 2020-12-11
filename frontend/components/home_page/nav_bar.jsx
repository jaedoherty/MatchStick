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
        if ( this.state === {}) {
            const name = '';
        } else {
            const name = this.state.first_name
        }
        if (!this.props.session.id) {
            return null;
        } else { 
        return (
            <nav>
                <Link to='/' id="home-head">
                    <h1 className="ms_head">MatchStick</h1>
                </Link>
                {/* <Link>DoubleTake</Link>
                <Link>Questions</Link>
                <Link>Likes</Link>
                <Link>Messages</Link> */}
                <li>{this.state.first_name}</li>
                <button>Log Out</button>
            </nav>
        );
        }
    }
}


export default NavBar;