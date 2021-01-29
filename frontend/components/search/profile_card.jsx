import React from 'react';
import {Link} from 'react-router-dom'

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Link to={`seeProfile/${this.props.profile.id}`} id="search-profs">
            <img className="resize-smash" id="search-img" src={window[this.props.profile.img_name]} />
            <div className="card-info">
              <h4>Name:</h4>
              <div>{this.props.profile.first_name}</div>
            </div>
            <div className="card-info">
              <h4>Age:</h4>
              <div>{this.props.profile.age}</div>
            </div>
            <div className="card-info">
              <h4>Location:</h4>
              <div>{this.props.profile.location}</div>
            </div>
            <div className="card-info">
              <h4>Gender:</h4>
              <div>{this.props.profile.gender} </div>
            </div>
          </Link>
        );
    }
}

export default ProfileCard;