import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../home_page/nav_bar_container";

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // if (this.props.match.params.profileId === undefined) {
    //     this.props.fetchProfile(this.props.profile.id)
    //     this.props.fetchLikedProfiles(this.props.session.id)
    // } else {
    this.props.fetchProfile(this.props.match.params.profileId);
    this.props.fetchLikedProfiles(this.props.session.id);
    // }
  }

  handleClick() {
    return () => this.props.history.push("/editProfile");
  }

  editPersonality() {
    return () => this.props.history.push("/editPersonalityQuiz");
  }

  render() {
    if (!this.props.profile) {
      return null;
    } else {
      // const allMatchAnswers = (field) => {
      //     const matches = this.props.profile[field]
      //     const unpermittedChars = ["=", ">", '"', "", '[', '{', ']', '}', ':', '\\']
      //     const formattedMatches = []
      //     let toAdd = ""
      //     for (let index = 0; index < matches.length; index++) {
      //         const ele = matches[index]
      //         if (!unpermittedChars.includes(ele)) {
      //             toAdd += ele
      //         } else {
      //             if (toAdd.length > 1 && toAdd[0] !== "," && (toAdd[0] !== "n")) formattedMatches.push(toAdd);
      //             toAdd = ""
      //         }

      //     }
      //     if (field === "match_preferences") {

      //         return formattedMatches.map((str, i) => {
      //             if (i % 2 === 0) {
      //                 return (
      //                     <div className="profshow">
      //                         <label> {str}
      //                             <p>{formattedMatches[i + 1]}</p>
      //                         </label>
      //                     </div>

      //                 )

      //             }

      //         }
      //         )
      //     } else {
      //         return formattedMatches.map((str, i) => {
      //             if (i % 2 === 0) {
      //                 return (
      //                     <div className="description">
      //                         <p className="field-title">{str}</p>
      //                         <div className="field-text">

      //                             <p className="ftxt">{formattedMatches[i + 1]}</p>

      //                         </div>
      //                     </div>

      //                 )
      //             }
      //         }
      //         )
      //     }
      // }

      // const likeButton = () => {
      //     this.props.likes.keys.includes(this.props.match.params.profileId)
      //         return (
      //             <button>Unlike</button>
      //         )} else {
      //             return (
      //                 <button>Like</button>
      //             )
      //         }
      //     }

      debugger;
      return (
        <div className="profile-show-container">
          <div id="info-bar">
            <div id="photo-placeholder">
              <img
                id="resize-smash"
                src={window[this.props.profile.img_name]}
              />
            </div>
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
                  <p className="ftxt">{this.props.profile.description} </p>
                </div>
              </div>

              <div className="description">
                <p className="field-title">What is your ideal first date?</p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.ideal_date} </p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  If you were a Kardashian, which one would you be?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.kardashian} </p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">What is your go to cocktail?</p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.cocktail} </p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  How do you feel about pineapple on pizza?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.pineapple}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  Which house would the sorting hat place you in?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.house}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  What is your favorite Disney movie?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.disney}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  Dogs or cats (and do you have any)?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.pets}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">
                  What is your favorite Ariana Grande song?
                </p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.ariana}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">What is your favorite Pokémon?</p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.pokemon}</p>
                </div>
              </div>
              <div className="description">
                <p className="field-title">What is your astrological sign?</p>
                <div className="field-text">
                  <p className="ftxt">{this.props.profile.zodiac}</p>
                </div>
              </div>
            </div>
         
          <div className="profile">
            {Object.keys(this.props.likes).includes(
              this.props.match.params.profileId
            ) ? (
              <button>Unlike</button>
            ) : (
              <button>Like</button>
            )}
            <div className="profshow" id="gender">
              <label>
                Gender:
                <p>{this.props.profile.gender}</p>
              </label>
            </div>
            <div className="profshow" id="gender">
              <label>
                What connections are you looking for?
                <p>{this.props.profile.connection}</p>
              </label>
            </div>
            <div className="profshow" id="gender">
              <label>
                What relationship type are you interested in?
                <p>{this.props.profile.connection}</p>
              </label>
            </div>
            <div className="profshow" id="gender">
              <label>
                I am looking for...
                <p>{this.props.profile.gender_search}</p>
              </label>
            </div>
            <div className="profshow" id="gender">
              <label>
                How old should they be?
                <p>
                  {this.props.profile.min_age_range} -{" "}
                  {this.props.profile.max_age_range}
                </p>
              </label>
            </div>

            {/* {allMatchAnswers("match_preferences")} */}
          </div>
        </div>
        </div>
      );
    }
  }
}

export default ProfileShow;
