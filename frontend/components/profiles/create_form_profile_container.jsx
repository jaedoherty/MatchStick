import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { createProfile } from '../../actions/profile_actions';

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
    }}
} 
       
    // match_preferences: {},
    // users: state.entities.users
     



const mdp = (dispatch) => ({
    action: (profile) => dispatch(createProfile(profile))
})

export default connect(msp, mdp)(ProfileForm);