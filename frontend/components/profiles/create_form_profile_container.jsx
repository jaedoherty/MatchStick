import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { createProfile } from '../../actions/profile_actions';
import {receiveCurrentUser} from '../../actions/session_actions'


const msp = (state, ownProps) => {
   return {
     profile: {
       description: "",
       first_name: "",
       gender: "",
       user_id: state.session.id,
       age: "",
       location: "",
       zip_code: "",
       img_name: "",
       connection: "",
       monogamy: "",
       gender_search: "",
       min_age_range: "",
       max_age_range: "",
       ideal_date: "",
       kardashian: "",
       cocktail: "",
       pineapple: "",
       house: "",
       disney: "",
       blackpink: "",
       pets: "",
       ariana: "",
       pokemon: "",
       zodiac: "",
     },
     question: 0,
     type: ownProps.match.path,
   };
} 

     



const mdp = (dispatch) => ({
    submit: (profile) => dispatch(createProfile(profile)),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
    
})

export default connect(msp, mdp)(ProfileForm);