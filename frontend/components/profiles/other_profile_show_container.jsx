import { connect } from 'react-redux';
import OtherProfileShow from './other_profile_show';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchLikedProfiles} from '../../actions/like_actions'
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    // const profileId
    // if (ownProps.profile) {
    //     return ({
    //         profile: ownProps.profile,
    //         session: state.entities.session,
    //         likes: state.entities.likes,

    //     })
    // } else {

        return ({
            profile: state.entities.profiles[ownProps.match.params.profileId],
            session: state.session,
            likes: state.entities.likes
        });
    // }
}

const mdp = (dispatch) => (
    {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        fetchLikedProfiles: (likerId) => dispatch(fetchLikedProfiles(likerId))
    }
)
export default withRouter(connect(msp, mdp)(OtherProfileShow));