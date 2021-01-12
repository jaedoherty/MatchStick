import { connect } from 'react-redux';
import React from 'react';
import { fetchProfiles  } from '../../actions/profile_actions';
import  HomePage  from './home_page';
import {withRouter} from 'react-router-dom'
import { getProfile } from '../../reducers/selectors';
import { likeProfile, unlikeProfile} from '../../actions/like_actions';

const msp = (state) => ({
    profiles: state.entities.profiles,
    users: state.entities.users,
    session: state.session,
    profileId: getProfile(state)
})

const mdp = (dispatch) => ({
    fetchProfiles: () => dispatch(fetchProfiles()),
    likeProfile: (profileId) => dispatch(likeProfile(profileId)),
    unlikeProfile: (profileId) => dispatch(unlikeProfile(profileId))
})

export default withRouter(connect(msp, mdp)(HomePage));