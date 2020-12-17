import {connect} from 'react-redux';
import ProfileShow from './profile_show';
import {fetchProfile} from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) =>{ 
    // const profileId
    if (ownProps.profile) {
       return ({
          profile: ownProps.profile
       })
    } else {

        return({
        profile: state.entities.profiles[ownProps.match.params.profileId]
       });
    }
}

const mdp = (dispatch) => (
    {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
)
export default withRouter(connect(msp, mdp)(ProfileShow));