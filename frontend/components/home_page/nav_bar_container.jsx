import { connect } from 'react-redux';
import NavBar from './nav_bar';
// import { logout } from '../../actions/session_actions';
import {fetchProfile} from '../../actions/profile_actions';

const msp = (state) => {
    return ({
        user: state.entities.users,
        profiles: state.entities.profiles,
        session: state.session
    })
}

const mdp = (dispatch) => {
    // debugger
    return({
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        // logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(NavBar)