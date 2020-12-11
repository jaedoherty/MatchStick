import React from 'react';
 

class ProfileShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.profile; 
    }

    render() {
        return (
            <div className="profile-show-container">
                <div className="profshow" id="name">Name
                     <li>{this.props.profile.first_name}</li>
                </div>
                <div className="profshow" id="bio"> About Me 
                    <li>{this.props.name.description}</li>
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
        );
    }
}

export default ProfileShow;