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
                <div id="info-bar">
                    <div id="photo-placeholder">Photo Placeholder</div>
                    <div id="name-age">
                        <p id="name">{this.props.profile.first_name}</p>
                        <div id="age-location">
                            <p className="al">{this.props.profile.age}</p>
                            <p className="al">{this.props.profile.location}</p>
                        </div>

                    </div>


                </div>

                <div id="profilewrapper">
                    <div id="bio-quiz">

                        <div className="description"> 
                            <p className="field-title">About Me</p>
                            <div className="field-text">

                                <p className="ftxt">{this.props.profile.description}</p>

                            </div>
                        </div>
                                {Object.values(this.props.profile.quiz_results).map(result => (
                                    <div className="description">

                                        <div className="field-text">
                                                <p className="ftxt">{result}</p>
                                        </div>
                                    </div>
                                ))}
                    </div>
                    <div className="profile">
                        <div className="profshow" id="edit-profile">
                            <p id="line1">COMPLETE YOUR PROFILE</p>
                            <p id="line2">and be seen by more people.</p>
                        </div>
                        <div className="profshow" id="gender"> 
                        <p>Gender: {this.props.profile.gender}</p>
                        </div>
                        {/* {this.props.profile.match_preferences.map(pref => (<p className="profshow" id="matchPrefs">{pref}</p>))} */}

                            {Object.values(this.props.profile.match_preferences.map(pref => (<div className="profshow">{pref}</div>)))}

                    </div>

                </div>
            </div>
        );
        }
    }
}

export default ProfileShow;