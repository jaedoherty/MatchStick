import React from 'react';
import PersonalityFormContainer from '../personality/personality_form_container';


class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.profile,
            question: this.props.question,
           
        }
       
        
        this.handleClick = this.handleClick.bind(this); 
        this.updateArrays = this.updateArrays.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
;
        return ((e) => {
            const profile = { ...this.state.profile };
            profile[field] = e.currentTarget.value;
            this.setState({ profile });

        }); 
    }

    updateArrays(preference) {
       
        return (e) => {
            
            const preferences = this.state.new_preferences ;
 
            
            preferences[preference] = e.target.value;
 
            this.setState({new_preferences: preferences})

        }
    }

    updateMatches () {
        const profile = {...this.state.profile};
        const match_preferences = this.state.new_preferences;
        profile.match_preferences = [JSON.stringify(match_preferences)];
        return profile;
    }

    passAction () {
        if (this.props.edit) {

            return this.props.edit
        } else {

            return this.props.create
        }
    }



    handleChange(field) {
        
        return (e) => {
            const profile = { ...this.state.profile };
            profile[field] = e.currentTarget.value;
            this.setState({ profile });

        
    }}


    handleClick(e) {

        if (this.state.question < 13) {

            e.preventDefault();

            const profile = {...this.state.profile};

            this.setState((previousState) => ({
                profile,
                question: previousState.question + 1
            }))
        } else {
            e.preventDefault();

            const profile = { ...this.state.profile }; 
            profile.match_preferences = this.state.new_preferences;
            this.setState((previousState) => ({
                profile,
                question: previousState.question + 1
            }))
        }
    }

    handleSubmit(e) {
        e.preventDefault();
       
        this.props.submit(this.state.profile).then(this.props.history.push('/home'))
    }
     

    

    handleBack(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.setState((previousState) => ({
            profile: this.state.profile,
            question: previousState.question - 1
        }))

    }


    render () {
   
        const editSubmit = () => {
            if (this.props.type) {
                return (
                  <button className="onboarding-button" onClick={this.handleSubmit}>Submit Edit</button>
                );
            } else {
                return null;
            }
        }
        const questionZero = () => (
            <div className="create-profile">

            <div className="profile-0" id="page0">

                <div className="title-container">
                    
                    <h3 className="onboarding-stepIntro-title">Let's start with the basics</h3>
                    <div className="onboarding-stepIntro-subtitle">Set up your profile to meet new people.</div>
                </div>
                <div className="img-container">
                    <img className="onboarding-stepIntro-image" src={window.newprof0} />
                </div>
            </div>
                <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
            </div>
        ) 

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

        const questionTwo = () => (
            <div className="create-profile">

   
                <div className="profile-1" id="page1">
                    <div className="header-container">

                        <button className="back-button" onClick={this.handleBack}> &lt; </button>
                    </div>
                    <span><span className="onboarding-header-description">About you</span></span>

                    <h3 className="profileDetails-field-prompt">I am a...</h3>
                    <div className="profile-dropdown-2">
                        <select name="gender" className="dropdown" onChange={this.handleChange("gender")}>
                            <option className="drop-option" value="please_select" selected disabled>Please Select</option>
                            <option className="drop-option" value="man">Man</option>
                            <option className="drop-option" value="woman">Woman</option>
                            <option className="drop-option" value="nonbinary">Nonbinary</option>
                            <option className="drop-option" value="other">Other</option>
                        </select>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                </div>
            </div> 
        )

        const questionThree = () => (
            <div className="create-profile">

          
                <div className="profile-1" id="page1">
                    <div className="header-container">

                        <button className="back-button" onClick={this.handleBack}> &lt; </button>
                    </div>
                    <span><span className="onboarding-header-description">About you</span></span>

                    <h3 className="profileDetails-field-prompt">How old are you?</h3>
                    <div className="profile-input">
                        <input type="text" className="profile-name-input" value={this.state.title} onChange={this.update('age')}></input>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                </div>
            </div> 
        )
            
            const questionFour = () => (
                <div className="create-profile">

                    <div className="profile-1" id="page1">
                        <div className="header-container">

                            <button className="back-button" onClick={this.handleBack}> &lt; </button>
                        </div>
                        <span><span className="onboarding-header-description">About you</span></span>

                        <h3 className="profileDetails-field-prompt">Where do you primarily live?</h3>
                        <label className="labeled-input">Location
                            <input type="text" className="profile-name-input" onChange={this.update('location')}/>
                        </label>
                        <label className="labeled-input">Zip Code
                            <input type="text" className="profile-name-input" onChange={this.update('zip_code')}/>
                        </label>
                        <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                    </div>
                </div>
            )
            const questionFive = () =>(
                <div className="create-profile">

                    <div className="profile-0" >
                       
                        <div className="title-container">
                            <div className="header-container">

                                <button className="back-button" onClick={this.handleBack}> &lt; </button>
                            </div>
                            <h3 className="onboarding-stepIntro-title">Who are you looking for?</h3>
                            <div className="onboarding-stepIntro-subtitle">To see the right people, tell us who you're into.</div>
                        </div>
                        <div className="img-container">
                            <img className="onboarding-stepIntro-image" src={window.magnify} />
                        </div>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
                </div>
            ) 

        const questionSix = () => (
            <div className="create-profile">

     
                <div className="profile-1" id="page1">
                    <div className="header-container">

                        <button className="back-button" onClick={this.handleBack}> &lt; </button>
                    </div>
                    <span><span className="onboarding-header-description">Ideal person</span></span>

                    <h3 className="profileDetails-field-prompt">What connections are you looking for?</h3>

                    <div className="profile-dropdown-2">
                        <select name="connections" className="dropdown" onChange={this.update("connection")}>
                            <option className="drop-option" value="please_select" selected disabled>Please Select</option>
                            <option className="drop-option" value="Hookups">Hookups</option>
                            <option className="drop-option" value="New friends">New friends</option>
                            <option className="drop-option" value="Short-term dating">Short-term dating</option>
                            <option className="drop-option" value="Long-term dating">Long-term dating</option>
                        </select>
                    </div>
                    <div id="form-buttons">

                        <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
                        {editSubmit()}
                    </div>

                </div>
            </div>
        )


        const questionSeven = () => {

            return (
              <div className="create-profile">
                <div className="profile-1" id="page1">
                  <div className="header-container">
                    <button className="back-button" onClick={this.handleBack}>
                      {" "}
                      &lt;{" "}
                    </button>
                  </div>
                  <span>
                    <span className="onboarding-header-description">
                      Relationship type
                    </span>
                  </span>

                  <h3 className="profileDetails-field-prompt">I am...</h3>
                  <div className="profile-dropdown-2">
                    <select
                      name="connections"
                      className="dropdown"
                      onChange={this.update("monogamy")}
                    >
                      <option
                        className="drop-option"
                        value="please_select"
                        selected
                        disabled
                      >
                        Please Select
                      </option>
                      <option className="drop-option" value="Monogamous">
                        Monogamous
                      </option>
                      <option className="drop-option" value="Non-monogamous">
                        Non-monogamous
                      </option>
                      <option
                        className="drop-option"
                        value="Open to monogamy and non-monogamy"
                      >
                        Open to monogamy and non-monogamy
                      </option>
                    </select>
                  </div>
                  <div id="form-buttons">
                    <button
                      className="onboarding-button"
                      onClick={this.handleClick}
                    >
                      NEXT
                    </button>
                    {editSubmit()}
                  </div>
                </div>
              </div>
            );
        }

        const questionEight = () => (
          <div className="create-profile">
            <div className="profile-1" id="page1">
              <div className="header-container">
                <button className="back-button" onClick={this.handleBack}>
                  {" "}
                  &lt;{" "}
                </button>
              </div>
              <span>
                <span className="onboarding-header-description">
                  Ideal person
                </span>
              </span>

              <h3 className="profileDetails-field-prompt">
                I am looking for a...
              </h3>
              <div className="profile-dropdown-2">
                <select
                  name="gender"
                  className="dropdown"
                  onChange={this.handleChange("gender_search")}
                >
                  <option
                    className="drop-option"
                    value="please_select"
                    selected
                    disabled
                  >
                    Please Select
                  </option>
                  <option className="drop-option" value="man">
                    Man
                  </option>
                  <option className="drop-option" value="woman">
                    Woman
                  </option>
                  <option className="drop-option" value="nonbinary">
                    Nonbinary
                  </option>
                  <option className="drop-option" value="other">
                    Other
                  </option>
                </select>
              </div>
              <div id="form-buttons">
                <button
                  className="onboarding-button"
                  onClick={this.handleClick}
                >
                  NEXT
                </button>
                {editSubmit()}
              </div>
            </div>
          </div>
        );

        const questionNine = () => {
            const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
            const age = range(18, 99, 1);

            return (
              <div className="create-profile">
                <div className="profile-1" id="page1">
                  <div className="header-container">
                    <button className="back-button" onClick={this.handleBack}>
                      {" "}
                      &lt;{" "}
                    </button>
                  </div>
                  <span>
                    <span className="onboarding-header-description">
                      Ideal person
                    </span>
                  </span>

                  <h3 className="profileDetails-field-prompt">
                    How old should they be?
                  </h3>
                  <div className="profile-dropdown-3" id="age-range">
                    <select
                      name="minAge"
                      className="dropdown"
                      onChange={this.update("min_age_range")}
                    >
                      <option
                        className="drop-option"
                        id="minAge"
                        value="minAge"
                        selected
                        disabled
                      >
                        Min Age
                      </option>
                      {age.map((age) => (
                        <option className="dropdown">{age}</option>
                      ))}
                    </select>
                    <p>—</p>
                    <select
                      name="maxAge"
                      className="dropdown"
                      onChange={this.update("max_age_range")}
                    >
                      <option
                        className="drop-option"
                        id="maxAge"
                        value="maxAge"
                        selected
                        disabled
                      >
                        Max Age
                      </option>
                      {age.map((age) => (
                        <option className="dropdown">{age}</option>
                      ))}
                    </select>
                  </div>
                  <div id="form-buttons">
                    <button
                      className="onboarding-button"
                      onClick={this.handleClick}
                    >
                      NEXT
                    </button>
                    {editSubmit()}
                  </div>
                </div>
              </div>
            );
        }

        const questionTen = () => (
            <div className="create-profile">

                <div className="profile-0" id="page0">
                    <div className="title-container">
                        <div className="header-container">

                            <button className="back-button" onClick={this.handleBack}> &lt; </button>
                        </div>
                        <h3 className="onboarding-stepIntro-title">Tell us about yourself</h3>
                        <div className="onboarding-stepIntro-subtitle">So we can find people who like you for you</div>
                    </div>
                    <div className="img-container">
                        <img className="onboarding-stepIntro-image" src={window.book} />
                    </div>
                </div>
                <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
            </div>
        ) 

        const questionEleven = () => (
          <div className="create-profile">
            <div className="profile-1" id="page1">
              <div className="header-container">
                <button className="back-button" onClick={this.handleBack}>
                  {" "}
                  &lt;{" "}
                </button>
              </div>
              <span>
                <span className="onboarding-header-description">About you</span>
              </span>

              <h3 className="profileDetails-field-prompt">
                Introduce yourself
              </h3>
              <div className="profile-input">
                <textarea
                  className="profile-name-input"
                  id="text-input"
                  onChange={this.update("description")}
                ></textarea>
              </div>
              <div id="form-buttons">
                <button
                  className="onboarding-button"
                  onClick={this.handleClick}
                >
                  NEXT
                </button>
                {editSubmit()}
              </div>
            </div>
          </div>
        );

        const questionTwelve = () => (
          <div className="create-profile">
            <h3>Pick a photo</h3>
            <div className="choose-img">
              <button
                className="smash-img-container"
                value="bowser"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.bowser} />
              </button>
              <button
                className="smash-img-container"
                value="ice_climbers"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.ice_climbers} />
              </button>
              <button
                className="smash-img-container"
                value="incineroar"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.incineroar} />
              </button>
              <button
                className="smash-img-container"
                value="kirby"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.kirby} />
              </button>
              <button
                className="smash-img-container"
                value="pichu"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.pichu} />
              </button>
              <button
                className="smash-img-container"
                value="mewtwo"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.mewtwo} />
              </button>
              <button
                className="smash-img-container"
                value="peach"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.peach} />
              </button>
              <button
                className="smash-img-container"
                value="yoshi"
                onClick={this.update("img_name")}
              >
                <img className="smash-img" src={window.yoshi} />
              </button>
            </div>
            <div id="form-buttons">
              <button className="onboarding-button" onClick={this.handleClick}>
                NEXT
              </button>
              {editSubmit()}
            </div>
          </div>
        );

        const questionThirteen = () => (
            <div className="create-profile">

                <div className="profile-0" id="page0">
                    <div className="title-container">

                        <div className="header-container">

                            <button className="back-button" onClick={this.handleBack}> &lt; </button>
                        </div>
                        <h3 className="onboarding-stepIntro-title">Answer some questions</h3>
                        <div className="onboarding-stepIntro-subtitle">So we can calculate your best matches</div>
                    </div>
                    <div className="img-container">
                        <img className="onboarding-stepIntro-image" src={window.question} />
                    </div>
                </div>
                <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
            </div>
        ) 

        const personalityForm = () => {
            return(

            <div id="personality">

                <h1 className="personality-title">Personality Quiz</h1>
                <form className="personality-form" onSubmit={this.handleSubmit}>
                    <div className="personality-container">

                        <label className="personality-question"> What is your ideal first date?
                            <textarea className="personality-input" onChange={this.update("ideal_date")}></textarea>
                        </label>

                        <label className="personality-question"> If you were a Kardashian, which one would you be?
                            <textarea className="personality-input" onChange={this.update("kardashian")}></textarea>
                        </label >

                        <label className="personality-question"> What is your go to cocktail?
                            <textarea className="personality-input" onChange={this.update('cocktail')}></textarea>
                        </label>
                        <label className="personality-question">How do you feel about pineapple on pizza?
                            <textarea className="personality-input" onChange={this.update("pineapple")}></textarea>
                        </label>
                    </div>
                    <div className="personality-container">
                        <label className="personality-question">Which house would the sorting hat place you in?
                            <textarea className="personality-input" onChange={this.update("house")}></textarea>
                        </label>


                        <label className="personality-question"> What is your favorite Disney movie?
                            <textarea className="personality-input" onChange={this.update("disney")}></textarea>
                        </label >
                        <label className="personality-question"> Which member of BlackPink would you be?
                            <textarea className="personality-input" onChange={this.update("blackpink")}></textarea>
                        </label >

                        <label className="personality-question">Dogs or cats (and do you have any)?

                            <textarea className="personality-input" onChange={this.update("pets")}></textarea>
                        </label>
                    </div>
                    <div className="personality-container">
                        <label className="personality-question"> What is your favorite Ariana Grande song?
                            <textarea className="personality-input" onChange={this.update("ariana")}></textarea>
                        </label>
                        <label className="personality-question"> What is your favorite Pokémon?
                            <textarea className="personality-input" onChange={this.update("pokemon")}></textarea>
                        </label>
                        <label className="personality-question"> What is your astrological sign?
                            <textarea className="personality-input" onChange={this.update("zodiac")}></textarea>

                        </label>
                        <button className="onboarding-button" type="submit">Submit</button>
                    </div>
                </form>


            </div>
            )
        }

        
      
        if (this.state.question === 0) {
            return questionZero();
        } else if (this.state.question === 1) {
            return questionOne();
        } else if (this.state.question === 2) {
            return questionTwo();
        } else if (this.state.question === 3) {
            return questionThree();
        } else if (this.state.question === 4) {
            return questionFour();
        } else if (this.state.question === 5) { 
            return questionFive();
        } else if (this.state.question === 6) {
            return questionSix();
        } else if (this.state.question === 7) {
            return questionSeven();
        } else if (this.state.question === 8) {
            return questionEight();
        } else if (this.state.question === 9) {
            return questionNine();
        } else if (this.state.question === 10) {
            return questionTen();
        } else if (this.state.question === 11) {
            return questionEleven();
        } else if (this.state.question === 12) {
            return questionTwelve();
        } else if (this.state.question === 13) {
            return questionThirteen(); 
        } else {
            
            return personalityForm();
        } 
    }
}

export default ProfileForm;

