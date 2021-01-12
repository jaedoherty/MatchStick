import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import profilesReducer from './profiles_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    likes: likesReducer
});

export default entitiesReducer;