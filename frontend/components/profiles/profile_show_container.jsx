import {connect} from 'react-redux';
import ProfileShow from './profile_show';
import {fetchProfile} from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) =>{ 
    // const profileId
    if (ownProps.profile) {
       return ({
          profile: ownProps.profile,
          session: state.entities.session

       })
    } else {

        return({
        profile: state.entities.profiles[ownProps.match.params.profileId],
        session: state.entities.session
       });
    }
}

const mdp = (dispatch) => (
    {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    }
)
export default withRouter(connect(msp, mdp)(ProfileShow));