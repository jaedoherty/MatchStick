import React from "react";
import ProfileForm from "./profile_form";
// import withRouter from 'react-router-dom'

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProfiles();
  }
  render() {
    if (!this.props.profile) return null;
    if (this.props.match.params.question_id) {
            return (
              <ProfileForm
                submit={this.props.submit}
                profile={this.props.profile}
                question={this.props.match.params.question_id}
                type={this.props.type}
              />
            ); 
    } else {

        return (
          <ProfileForm
            submit={this.props.submit}
            profile={this.props.profile}
            question={this.props.question}
            type={this.props.type}
          />
        );
    }
  }
}

export default EditProfileForm;