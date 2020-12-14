import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { createProfile } from '../../actions/profile_actions';

const msp = (state, ownProps) => ({
   profile: {
        description: '',
        first_name: '',
        gender: '',
        user_id: ownProps.match.params.userId,
        match_preferences: [],
        quiz_results: [], 
        age: '',
        location: '',
        zip_code: '' 
   },
   question: 0
})


const mdp = (dispatch) => ({
    action: (profile) => dispatch(createProfile(profile))
})

export default connect(msp, mdp)(ProfileForm);