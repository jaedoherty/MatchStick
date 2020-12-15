import {connect} from 'react-redux';
import PersonalityForm from './personality_form';
import { createProfile } from '../../actions/profile_actions';
// import { getProfile } from '../../reducers/selectors';

const msp = (state) => ({
    // profileId: getProfile(state),
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    createProfile: (profile) => dispatch(createProfile(profile))
})

export default connect(msp, mdp)(PersonalityForm);