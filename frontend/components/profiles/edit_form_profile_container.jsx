import EditProfileForm from './edit_profile_form';
import {connect} from 'react-redux';

import {fetchProfiles, updateProfile} from '../../actions/profile_actions';
import {getProfile} from '../../reducers/selectors';


const msp = (state) => {
    return ({

        profile: state.entities.profiles[getProfile(state)],
        question: 5
    })
};

const mdp = (dispatch) => {
    console.log("update", updateProfile)
    return ({
        submit: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles))
    })
};

export default connect(msp, mdp)(EditProfileForm);