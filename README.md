# MatchStick

MatchStick is a clone of OkCupid, an online dating site. Users can create their own profiles and see other profiles. If they like other user's profiles, users can like those profiles.

Matchstick uses React and Redux in the front-end, and Rails and Postgres in the back-end.

## Stack used

* Ruby on Rails (5.2.3)
* PostgreSQL 
* React with Redux

## Features

### User Profiles and Personality Questions
Upon making a new profile, users are directed to the new profile page. On this page, users enter basic information about themselves, including name, age, gender, and location. 

When creating a profile, users are also asked to answer questions about what they are looking for in their ideal person. This match preferences and basic information form shows one question at a time instead of all of the questions at once. The profile form container has functions that return what should be rendered for each question. The local state keeps track of what question the user is on. Upon clicking the next or back button, the question slice of state is increased or decreased by 1, and the appropriate function is returned based on the new question state. 

```
        const questionOne = () => (
            <div className="create-profile">

                <div className="profile-1" id="page1">
                    <div className="header-container">

                        <button className="back-button" onClick={this.handleBack}> &lt; </button> 
                    </div>
                            <span><span className="onboarding-header-description">About you</span></span>

                            <h3 className="profileDetails-field-prompt">What’s your first name?</h3>
                            <div className="profile-input">
                                <input type="text" className="profile-name-input" value={this.state.title} onChange={this.update('first_name')}></input>
                            </div>    
                            <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
                    
                </div> 
            </div>
        )
```
```
if (this.state.question === 1) {
      return questionOne();
        }
```

After completing the profile form, new users are taken to the personality quiz. This form includes questions that allow users to show a little bit of their personality. The answers to these questions are then displayed on their profiles for other users to see.

Once the profile is created, users can see what their profile will look like to users by navigating to the "My Profile" button in the navigation bar. This page is where all of their information will be displayed. From the profile show page, users can edit their match preferences and personality quiz answers. Clicking the edit button will take users back to the profile form and personality form. I did this by increasing the value that the question slice of state starts at, so the form renders the first function that returns a page for match preferences. 

```
const msp = (state) => {
    return ({

        profile: state.entities.profiles[getProfile(state)],
        question: 5
    })
};

const mdp = (dispatch) => {
    console.log("update", updateProfile)
    return ({
        edit: (profile) => dispatch(updateProfile(profile)),
        fetchProfiles: (profiles) => dispatch(fetchProfiles(profiles))
    })
};

export default connect(msp, mdp)(EditProfileForm);
```

When users are finished creating or editing their profile, they are taken to the Doubletake page. 

### Doubletake (Home Page)

The Doubletake page, or the home page, is where users can see other profiles. The home page component picks a random profile out of all of the existing profiles on the site to display. The home page displays the basic information about the profile and the photo that user has chosen for their profile. If interested, the user can click the "See their profile" button to see the match preferences and personality quiz results of the profile. The like and pass buttons rerender the home page with a new random profile from all of the existing profiles. 

### Features to be added later
1. See all profiles that the logged in user has liked
2. Search functionality by basic information (age, gender, location) and match preferences
3. Messaging between users once users have liked each other

