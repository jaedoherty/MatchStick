import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from "./profile_form"
import {fetchProfiles, updateProfile} from '../../actions/profile_actions';
import {getProfile} from '../../reducers/selectors';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     ...this.props.profile,
        //     question
        // }
    }
    componentDidMount () {
        this.props.fetchProfiles();
    }
    render () {

        if (!this.props.profile) return null;
        return (
            <ProfileForm
            action={this.props.action}
            profile={this.props.profile} 
            question={this.props.question}
            />
        )
    }
};

const msp = (state) => {
    return ({

        profile: state.entities.profiles[getProfile(state)],
        question: 5
    })
};

const mdp = (dispatch) => {
    return ({
        action: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles))
    })
};

export default connect(msp, mdp)(EditProfileForm);