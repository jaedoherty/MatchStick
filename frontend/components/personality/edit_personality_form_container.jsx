import {connect} from 'react-redux';
import EditProfileForm from '../profiles/edit_form_profile_container';
import {updateProfile, fetchProfiles} from '../../actions/profile_actions';
// import {wiRouter} from 'react-router-dom';
import {getProfile} from '../../reducers/selectors';


const msp = (state) => {
    return ({
        
        profile: state.entities.profiles[getProfile(state)],
        question: 12 
    })
}

const mdp = (dispatch) => {
    return ({

        action: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles)) 
    })
}

export default connect(msp, mdp)(EditProfileForm)