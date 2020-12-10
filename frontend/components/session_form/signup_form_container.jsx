import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {login, removeErrors} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create Account',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
