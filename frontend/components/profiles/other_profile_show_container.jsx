import { connect } from 'react-redux';
import OtherProfileShow from './other_profile_show';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchLikedProfiles, likeProfile, unlikeProfile} from '../../actions/like_actions'
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
        return ({
            profile: state.entities.profiles[ownProps.match.params.profileId],
            session: state.session,
            likes: state.entities.likes
        });
}

const mdp = (dispatch) => ({
  fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
  fetchLikedProfiles: (likerId) => dispatch(fetchLikedProfiles(likerId)),
  likeProfile: (profileId) => dispatch(likeProfile(profileId)),
  unlikeProfile: (profileId) => dispatch(unlikeProfile(profileId)),
});
export default withRouter(connect(msp, mdp)(OtherProfileShow));