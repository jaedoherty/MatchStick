import {connect} from 'react-redux';
import NavBar from './nav_bar';

const msp = (state) => {
    return ({
        user: state.entities.users,
        profiles: state.entities.profiles,
        session: state.session 
    })
}

const mdp = (dispatch) => (
    {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
)

export default connect(msp, mdp)(NavBar)