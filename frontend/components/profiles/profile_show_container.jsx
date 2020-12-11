import {connect} from 'react-redux';
import ProfileShow from './profile_show';
import {fetchProfile} from '../../actions/profile_actions';

const msp = (state, ownProps) =>{ 
    return(
   {
    profile: state.profile
   }) 
}

const mdp = (dispatch) => (
    {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
)
export default connect(msp, mdp)(ProfileShow);