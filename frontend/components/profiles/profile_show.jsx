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
                {/* <Link className="homeLink" to='/'>
                    <h1 className="home-head">MatchStick</h1>
                </Link> */}
                <div id="info-bar">
                    <div>Photo Placeholder</div>
                    <div id="name-age">
                        <p id="name">{this.props.profile.first_name}</p>
                        <div id="age-location">
                            <p className="al">Age</p>
                            <p className="al">{this.props.profile.zip_code}</p>
                        </div>

                    </div>


                </div>

                <div id="profilewrapper">
                    <div className="profbio" id="bio"> About Me
                        <div id="biotext">

                            <p>{this.props.profile.description}</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profshow" id="edit-profile">
                            <p>COMPLETE YOUR PROFILE<br/>and be seen by more people.</p>
                        </div>
                        <div className="profshow" id="gender"> 
                        <p>{this.props.profile.gender}</p>
                        </div>
                        <div className="profshow" id="matchPrefs">
                            <p>{this.props.profile.match_preferences}</p>
                        </div>
                        <div className="profshow" id="quiz">
                            <p>{this.props.profile.quiz_results}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
        }
    }
}

export default ProfileShow;