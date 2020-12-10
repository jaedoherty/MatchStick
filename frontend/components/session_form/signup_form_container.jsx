// import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signup } from '../../actions/session_actions';
// import SessionForm from './session_form';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'SIGN UP',
//         navLink: <Link to="/login">log in</Link>,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(signup(user)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

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
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
