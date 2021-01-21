import Likes from './like_index';
import {connect} from 'react-redux';
import {fetchLikedProfiles} from '../../actions/like_actions'

const msp = state => {
    return ({

        likes: state.entities.likes,
        session: state.session
    })
}

const mdp = dispatch => {
    return ({
        fetchLikes: (likerId) => dispatch(fetchLikedProfiles(likerId))
    })
}

export default connect(msp, mdp)(Likes);