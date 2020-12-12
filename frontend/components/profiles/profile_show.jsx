import React from 'react';
import {Link} from 'react-router-dom'; 

class ProfileShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.profile; 
    }

    componentDidMount() {
        this.props.fetchProfile(this.props.match.params.profileId)
    }

    render() {
        if (!this.props.profile) {
            return null;
        } else {
        return (
            <div className="profile-show-container">
                <Link className="homeLink" to='/'>
                    <h1 className="home-head">MatchStick</h1>
                </Link>
                <div id="profilewrapper">
                    <div className="profbio" id="bio"> About Me
                        <div id="biotext">

                            <li>{this.props.profile.description}</li>
                        </div>
                    </div>
                    <div className="profile">

                        <div className="profshow" id="name">Name
                            <li>{this.props.profile.first_name}</li>
                        </div>
                        <div className="profshow" id="gender">Gender 
                        <li>{this.props.profile.gender}</li>
                        </div>
                        <div className="profshow" id="matchPrefs">Match Preferences
                            <li>{this.props.profile.match_preferences}</li>
                        </div>
                        <div className="profshow" id="quiz">
                            <li>{this.props.profile.quiz_results}</li>
                        </div>
                    </div>

                </div>
            </div>
        );
        }
    }
}

export default ProfileShow;