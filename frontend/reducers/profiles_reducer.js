import {RECEIVE_PROFILE, RECEIVE_PROFILES} from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            return Object.assign({}, state, {[action.profile.id]: action.profile})
        default:
            return state;
    }
};

export default profilesReducer;