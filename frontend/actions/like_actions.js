import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


export const receiveLikedProfiles = (profiles) => ({
    type: RECEIVE_LIKES,
    profiles
})
export const receiveLikedProfile = (profile) => ({
    type: RECEIVE_LIKE,
    profile
})
export const removeLikedProfile = (profile) => ({
    type: REMOVE_LIKE,
    profile
})

export const fetchLikedProfiles = likerId => dispatch => {
    return APIUtil.fetchLikedProfiles(likerId).then((profiles) => dispatch(receiveLikedProfiles(profiles)))
} 

export const likeProfile = profileId => dispatch => {
    // debugger
    // console.log(profileId)
    return APIUtil.addLikeToProfile(profileId).then((profile) => dispatch(receiveLikedProfile(profile)))
}

export const unlikeProfile = profileId => dispatch => {
    return APIUtil.deleteLikeFromProfile(profileId).then((profile) => dispatch(removeLikedProfile(profile)))
}