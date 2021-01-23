import {connect} from 'react-redux';
import EditProfileForm from '../profiles/edit_profile_form';
import {updateProfile, fetchProfiles} from '../../actions/profile_actions';
// import {wiRouter} from 'react-router-dom';
import {getProfile} from '../../reducers/selectors';


const msp = (state) => {
    return ({
        
        profile: state.entities.profiles[getProfile(state)],
        question: 14 
    })
}

const mdp = (dispatch) => {
    return ({

        action: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles)) 
    })
}

export default connect(msp, mdp)(EditProfileForm)