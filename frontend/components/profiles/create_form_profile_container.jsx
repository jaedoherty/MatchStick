import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { createProfile } from '../../actions/profile_actions';
import {receiveCurrentUser} from '../../actions/session_actions'
// import {login} from '../../actions/session_actions'

const msp = (state) => {
    // let user_id = null;
    // if (state.session !== {}) user_id = state.session.id
   return{
    profile: {
     description: '',
     first_name: '',
     gender: '',
     user_id: state.session.id,
     match_preferences: [],
     quiz_results: [], 
     age: '',
     location: '',
     zip_code: '',
     img_name: ''
    },
    question: 0
}
} 
       
    // match_preferences: {},
    // users: state.entities.users
     



const mdp = (dispatch) => ({
    create: (profile) => dispatch(createProfile(profile)),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
    
})

export default connect(msp, mdp)(ProfileForm);