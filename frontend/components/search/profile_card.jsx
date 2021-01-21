import React from 'react';
import {Link} from 'react-router-dom'

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Link to={`seeProfile/${this.props.profile.id}`} id="search-profs">
            <img id="resize-smash" src={window[this.props.profile.img_name]} />
            <div>Name: {this.props.profile.first_name}</div>
            <div>Age: {this.props.profile.age}</div>
            <div>Location: {this.props.profile.location}</div>
            <div>Gender: {this.props.profile.gender} </div>
          </Link>
        );
    }
}

export default ProfileCard;