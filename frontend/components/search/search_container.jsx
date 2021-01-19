import Search from './search';
import {fetchProfiles} from '../../actions/profile_actions'
import {connect} from 'react-redux'

const msp = state => {
    return ({
      profiles: state.entities.profiles,
      currentUserId: state.session.id,
    });
}

const mdp = dispatch => {
    return ({
      fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles))
    });
}

export default connect(msp, mdp)(Search);
