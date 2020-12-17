import {connect} from 'react-redux';
import PersonalityForm from './personality_form';
import { createProfile } from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom'
// import { getProfile } from '../../reducers/selectors';

const msp = (state) => ({
    // profileId: getProfile(state),
    // currentUser: state.entities.users[state.session.id],
    // profile: {},
    questions: {}
})

const mdp = (dispatch) => ({
    action: (profile) => dispatch(createProfile(profile))
})

export default withRouter(connect(msp, mdp)(PersonalityForm));