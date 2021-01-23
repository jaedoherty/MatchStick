// import EditProfileForm from './edit_profile_form';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileForm from './profile_form'
import {fetchProfiles, updateProfile} from '../../actions/profile_actions';
import {getProfile} from '../../reducers/selectors';


const msp = (state, ownProps) => {

        return {
            profile: state.entities.profiles[getProfile(state)],
            question: parseInt(ownProps.match.params.questionId),
            type: "edit",
         
        };

};

const mdp = (dispatch) => {
    // console.log("update", updateProfile)
    return ({
        submit: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles))
    })
};

export default withRouter(connect(msp, mdp)(ProfileForm));