import React from "react";
import ProfileForm from "./profile_form";

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProfiles();
  }
  render() {
    if (!this.props.profile) return null;
    return (
      <ProfileForm
        submit={this.props.submit}
        profile={this.props.profile}
        question={this.props.question}
      />
    );
  }
}

export default EditProfileForm;