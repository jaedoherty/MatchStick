import React from 'react';
import {Link} from 'react-router-dom'; 
import NavBarContainer from '../home_page/nav_bar_container';

class ProfileShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.profile; 
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProfile(this.props.match.params.profileId)
    }

    handleClick() {
        return () => this.props.history.push('/editProfile')
    }

    editPersonality() {
        return () => this.props.history.push('/editPersonalityQuiz') 
    }

    render() {
        if (!this.props.profile) {
            return null;
        } else {
            // debugger
            const allMatchAnswers = (field) => {
                    const matches =  this.props.profile[field]
                    const unpermittedChars = ["=", ">", '"', "", ] 
                    const formattedMatches = [] 
                    let toAdd = ""
                    for (let index = 0; index < matches.length; index++) {
                        const ele = matches[index]
                        if (!unpermittedChars.includes(ele)) {
                            toAdd += ele
                        } else {
                            if (toAdd.length > 1 && toAdd[0] !== ",") formattedMatches.push(toAdd);
                            toAdd = ""
                        }
 
                        
                    }
                    if (field === "match_preferences"){
                        
                        return formattedMatches.map((str, i) => {
                            if (i % 2 === 0) {
                            return (
                                <div className="profshow">
                                <label> {str}
                                        <p>{formattedMatches[i+1]}</p>
                                </label>
                                    </div>
    
                            )
    
                        }
                        
                    }
                        )
                    } else {
                        return formattedMatches.map((str, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <div className="description">
                                        <p className="field-title">{str}</p>
                                        <div className="field-text">

                                            <p className="ftxt">{formattedMatches[i + 1]} <button id="edit-quiz" onClick={this.editPersonality()}>edit</button></p>
                                            
                                        </div>
                                    </div>

                                )
                    }
                    }
                        )}}
   



        return (
            <div className="profile-show-container">
                {/* <NavBarContainer/> */}
                <div id="info-bar">
                    <div id="photo-placeholder">Photo Placeholder</div>
                    <div id="name-age">
                        <p id="name">{this.props.profile.first_name}</p>
                        <div id="age-location">
                            <p className="al">{this.props.profile.age}</p>
                            <p className="al">{this.props.profile.location}</p>
                        </div>

                    </div>


                </div>

                <div id="profilewrapper">
                    <div id="bio-quiz">

                        <div className="description"> 
                            <p className="field-title">About Me</p>
                            <div className="field-text">

                                <p className="ftxt">{this.props.profile.description} <button id="edit-quiz" onClick={this.editPersonality()}>edit</button> </p>
                            </div>
                                
                        </div>
                            {allMatchAnswers("quiz_results")}
                    <div>

                    </div>
                    </div>
                    <div className="profile">
                        <div className="profshow" id="edit-profile">

                            <div className="sidebar-text" >
                            

                            <p id="line1">COMPLETE YOUR PROFILE</p>
                            <p id="line2">and be seen by more people.</p>
                            
                        </div>
                            <button id='edit-button'onClick={this.handleClick()}> 	&#62;</button>
                        </div>
                        <div className="profshow" id="gender"> 
                        <label>Gender:

                        <p>{this.props.profile.gender}</p>
                        </label>
                        </div>
    
                        {allMatchAnswers("match_preferences")}
                                
                    </div>

                </div>
            </div>
        );
        }
    }
}

export default ProfileShow;