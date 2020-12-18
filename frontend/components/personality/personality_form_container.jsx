import {connect} from 'react-redux';
import PersonalityForm from './personality_form';
import { createProfile, updateProfile } from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom'
// import { getProfile } from '../../reducers/selectors';

const msp = (state) => ({
    // profileId: getProfile(state),
    // currentUser: state.entities.users[state.session.id],
    // profile: {},
    questions: new Map(),
    sessionId: state.session.id
})

const mdp = (dispatch) => ({
    createProfile: (profile) => dispatch(createProfile(profile)),
    updateProfile: (profile) => dispatch(updateProfile(profile))
})

export default withRouter(connect(msp, mdp)(PersonalityForm));