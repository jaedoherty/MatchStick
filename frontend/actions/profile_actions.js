import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
})

export const fetchProfile = profileId => dispatch => (
    APIUtil.fetchProfile(profileId).then((profile) => dispatch(receiveProfile(profile)))
)

export const createProfile = profile => dispatch => (
    APIUtil.createProfile(profile).then((profile) => dispatch(createProfile(profile)))
)

export const updateProfile = profile => dispatch => (
    APIUtil.updateProfile(profile).then((profile) => dispatch(updateProfile(profile)))
)