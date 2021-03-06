
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchProfiles } from '../../actions/profile_actions';
import Greeting from './greeting';
import {getProfile} from '../../reducers/selectors';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profileId: getProfile(state),
        profile: {},
        session: state.session
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
    fetchProfiles: () => dispatch(fetchProfiles())

});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting));