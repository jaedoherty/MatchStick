
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchProfiles } from '../../actions/profile_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => {
    return {
        currentUser: entities.users[session.id],
        // users: entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
    fetchProfiles: () => dispatch(fetchProfiles())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);