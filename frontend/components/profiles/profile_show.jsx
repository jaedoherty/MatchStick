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
    if (this.props.match.params.profileId === undefined) {
      this.props.fetchProfile(this.props.profile.id);
    } else {
      this.props.fetchProfile(this.props.match.params.profileId);
    }
  }

  handleClick(question_id) {
    return () => this.props.history.push(`/editProfile/${question_id}`);
  }

  editPersonality() {
    return () => this.props.history.push("/editPersonalityQuiz");
  }


  render() {
    const editPersonalityButton = () => {
        return (
          <button id="edit-quiz" onClick={this.editPersonality()}>
            edit
          </button>
        );

    };

    if (!this.props.profile) {
      return null;
    } else {

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
              <div id="bio-quiz">
                <div className="description">
                  <p className="field-title">About Me</p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.description}{" "}
                      <button id="edit-quiz" onClick={this.handleClick(11)}>
                        edit
                      </button>
                    </p>
                  </div>
                </div>

                <div className="description">
                  <p className="field-title">What is your ideal first date?</p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.ideal_date} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    If you were a Kardashian, which one would you be?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.kardashian} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">What is your go to cocktail?</p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.cocktail} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    How do you feel about pineapple on pizza?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.pineapple} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    Which house would the sorting hat place you in?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.house} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    What is your favorite Disney movie?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.disney} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    Dogs or cats (and do you have any)?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.pets} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">
                    What is your favorite Ariana Grande song?
                  </p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.ariana} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">What is your favorite Pokémon?</p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.pokemon} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p className="field-title">What is your astrological sign?</p>
                  <div className="field-text">
                    <p className="ftxt">
                      {this.props.profile.zodiac} {editPersonalityButton()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="profshow" id="edit-profile">
                <div className="sidebar-text">
                  <p id="line1">COMPLETE YOUR PROFILE</p>
                  <p id="line2">and be seen by more people.</p>
                </div>
                <button id="edit-button" onClick={this.handleClick(5)}>
                  {" "}
                  &#62;
                </button>
              </div>
              <div className="profshow" id="gender">
                <label>
                  Gender:
                  <p>{this.props.profile.gender}</p>
                </label>
              </div>
              <div
                className="profshow"
                id="gender"
                onClick={this.handleClick(6)}
              >
                <label>
                  What connections are you looking for?
                  <p>{this.props.profile.connection}</p>
                </label>
              </div>
              <div
                className="profshow"
                id="gender"
                onClick={this.handleClick(7)}
              >
                <label>
                  What relationship type are you interested in?
                  <p>{this.props.profile.monogamy}</p>
                </label>
              </div>
              <div
                className="profshow"
                id="gender"
                onClick={this.handleClick(8)}
              >
                <label>
                  I am looking for a...
                  <p>{this.props.profile.gender_search}</p>
                </label>
              </div>
              <div
                className="profshow"
                id="gender"
                onClick={this.handleClick(9)}
              >
                <label>
                  How old should they be?
                  <p>
                    {this.props.profile.min_age_range} -{" "}
                    {this.props.profile.max_age_range}
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProfileShow;
