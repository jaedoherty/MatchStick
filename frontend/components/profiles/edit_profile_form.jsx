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
    if (this.props.match.params.question_id) {
            return (
              <ProfileForm
                submit={this.props.submit}
                profile={tthis.props.match.params.question_id}
              />
            ); 
    } else {

        return (
          <ProfileForm
            submit={this.props.submit}
            profile={this.props.profile}
            question={this.props.question}
          />
        );
    }
  }
}

export default EditProfileForm;