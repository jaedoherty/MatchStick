import { connect } from 'react-redux';
import React from 'react';
import { fetchProfiles } from '../../actions/profile_actions';
import  HomePage  from './home_page';

const msp = (state) => ({
    profiles: state.entities.profiles
})

const mdp = (dispatch) => ({
    fetchProfiles: () => dispatch(fetchProfiles())
})

export default connect(msp, mdp)(HomePage);