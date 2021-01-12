import {RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from "../actions/like_actions"

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKES:
            return action.profiles;
        case RECEIVE_LIKE:
            const newLike = { [action.profile.id]: action.profile };
            return Object.assign({}, state, newLike);
        case REMOVE_LIKE:
            let nextState = Object.assign({}, state);
            delete nextState[action.profile.id];
            return nextState;
        default:
            return state;
            
    }
}

export default likesReducer;