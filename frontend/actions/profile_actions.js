import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'

const receiveProfiles = profiles => ({
    type: RECEIVE_PROFILES,
    profiles
})

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
})

export const fetchProfiles = () => dispatch => (
    APIUtil.fetchProfiles().then((profiles) => dispatch(receiveProfiles(profiles)))
)

export const fetchProfile = profileId => dispatch => (
    APIUtil.fetchProfile(profileId).then((profile) => dispatch(receiveProfile(profile)))
)

export const createProfile = profile => dispatch => {
    // debugger;
   return  APIUtil.createProfile(profile).then((profile) => dispatch(receiveProfile(profile)));
}

export const updateProfile = profile => dispatch => {
    return  APIUtil.updateProfile(profile).then((profile) => dispatch(receiveProfile(profile)))
}
// console.log("actions", updateProfile)

export const likeProfile = profileId => dispatch => {
    return APIUtil.addLikeToProfile(profileId).then((profile) => dispatch(receiveProfile(profile)))
}

