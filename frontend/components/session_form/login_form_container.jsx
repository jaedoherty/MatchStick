
import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchProfile } from '../../actions/profile_actions'
import SessionForm from './session_form';
;

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Get Started',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors()),
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);