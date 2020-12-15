import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0
        }
        this.handleClick = this.handleClick.bind(this); 
        // this.updateArrays = this.updateArrays.bind(this);
        // this.handleBack = this.handleBack.bind(this);
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value });
    }

    // updateArrays(e, field) {
    //     return e => (this.setState((previousState) => ({
    //        [field]: previousState.field.push()
    //     }))); 
    // }

    handleClick(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.setState((previousState) => ({
            profile: this.props.profile,
            question: previousState.question + 1
        }))

    }

    handleBack(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.setState((previousState) => ({
            profile: this.props.profile,
            question: previousState.question - 1
        }))

    }



    render () {
        
        const questionZero = () => (
            <div className="create-profile">

            <div className="profile-0" id="page0">
                <h1 className="onboarding-title">MatchStick</h1>
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

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">
                    
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

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">
                    <span><span className="onboarding-header-description">About you</span></span>

                    <h3 className="profileDetails-field-prompt">I am a...</h3>
                    <div className="profile-dropdown-2">
                        <select name="gender" className="dropdown">
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

        const questionThree = () => {
            const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
            const dates = range(1, 31, 1);
            const years = range(2020, 1921, -1);
            return (
            <div className="create-profile">

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">
                    <span><span className="onboarding-header-description">About you</span></span>

                    <h3 className="profileDetails-field-prompt">When were you born?</h3>
                    <div className="profile-dropdown-3">
                        <div id="month-day">

                        <select name="birth-month" id="month" className="dropdown">
                            <option className="drop-option" value="Month" selected disabled>Month</option>
                            <option className="drop-option" value="Jan">January</option>
                            <option className="drop-option" value="Feb">February</option>
                            <option className="drop-option" value="March">March</option>
                            <option className="drop-option" value="April">April</option>
                            <option className="drop-option" value="May">May</option>
                            <option className="drop-option" value="June">June</option>
                            <option className="drop-option" value="July">July</option>
                            <option className="drop-option" value="August">August</option>
                            <option className="drop-option" value="September">September</option>
                            <option className="drop-option" value="October">October</option>
                            <option className="drop-option" value="November">November</option>
                            <option className="drop-option" value="December">December</option>
                        </select>

                        <select name="birthdate" className="dropdown">
                            <option className="drop-option" id="date"value="Day" selected disabled>Day</option> 
                            {dates.map(date => (<option className="dropdown">{date}</option>))}
                        </select>
                        </div>
                        <select name="birth-year" className="dropdown">
                            <option className="drop-option" id="year"value="Year" selected disabled>Year</option>
                            {years.map(year => (<option className="dropdown">{year}</option>))}
                        </select>

                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                </div>
            </div>
            )}
            
            const questionFour = () => (
                <div className="create-profile">

                    <h1 className="onboarding-title">MatchStick</h1>
                    <div className="profile-1" id="page1">

                        <span><span className="onboarding-header-description">About you</span></span>

                        <h3 className="profileDetails-field-prompt">Where do you primarily live?</h3>
                        <label className="labeled-input">Location
                            <input type="text" className="profile-name-input" value={this.state.location} onChange={this.update('location')}/>
                        </label>
                        <label className="labeled-input">Zip Code
                            <input type="text" className="profile-name-input" value={this.state.zip_code} onChange={this.update('zip_code')}/>
                        </label>
                        <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                    </div>
                </div>
            )
            const questionFive = () => (
                <div className="create-profile">

                    <div className="profile-0" >
                        <h1 className="onboarding-title">MatchStick</h1>
                        <div className="title-container">

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

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">

                    <span><span className="onboarding-header-description">Ideal person</span></span>

                    <h3 className="profileDetails-field-prompt">What connections are you looking for?</h3>
                    <div className="pick-many-buttons">
                        <button className="pick-button">
                            <label>Hookups</label>
                            <input type="checkbox"/>
                        </button>
                        <button className="pick-button">
                            <label>New friends</label>
                            <input type="checkbox" />
                        </button>
                        <button className="pick-button">
                            <label>Short-term dating</label>
                            <input type="checkbox" />
                        </button>
                        <button className="pick-button">
                            <label>Long-term dating</label>
                            <input type="checkbox" />
                        </button>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
                </div>
            </div>
        )


        const questionSeven = () => (
            <div className="create-profile">

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">
                    <span><span className="onboarding-header-description">Relationship type</span></span>

                    <h3 className="profileDetails-field-prompt">I am...</h3>
                    <div className="profile-dropdown-2">
                        <select name="monogamy" className="dropdown">
                            <option className="drop-option" value="please_select" selected disabled>Please Select</option>
                            <option className="drop-option" value="monogamous">Monogamous</option>
                            <option className="drop-option" value="nonmonogamous">Non-monogamous</option>
                            <option className="drop-option" value="open">Open to either</option>
                        </select>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                </div>
            </div>
        )

        const questionEight = () => (
            <div className="create-profile">

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">
                    <span><span className="onboarding-header-description">Ideal person</span></span>

                    <h3 className="profileDetails-field-prompt">I am looking for...</h3>
                    <div className="pick-many-buttons">
                        <button className="pick-button">
                            <label>Men</label>
                            <input type="checkbox" />
                        </button>
                        <button className="pick-button">
                            <label>Women</label>
                            <input type="checkbox" />
                        </button>
                        <button className="pick-button">
                            <label>Nonbinary</label>
                            <input type="checkbox" />
                        </button>
                        <button className="pick-button">
                            <label>Other</label>
                            <input type="checkbox" />
                        </button>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>
                </div>

            </div>
    
        )

        const questionNine = () => {
            const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
            const age = range(18, 99, 1);

            return (
                <div className="create-profile">

                    <h1 className="onboarding-title">MatchStick</h1>
                    <div className="profile-1" id="page1">
                        <span><span className="onboarding-header-description">Ideal person</span></span>

                        <h3 className="profileDetails-field-prompt">How old should they be?</h3>
                        <div className="profile-dropdown-3" id="age-range">

                            <select name="minAge" className="dropdown">
                                <option className="drop-option" id="minAge" value="minAge" selected disabled>Min Age</option>
                                {age.map(age => (<option className="dropdown">{age}</option>))}
                            </select>
                            <p>—</p>
                            <select name="maxAge" className="dropdown">
                                <option className="drop-option" id="maxAge" value="maxAge" selected disabled>Max Age</option>
                                {age.map(age => (<option className="dropdown">{age}</option>))}
                            </select>

                        </div>
                        <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                    </div>
                </div>
            )
        }

        const questionTen = () => (
            <div className="create-profile">

                <div className="profile-0" id="page0">
                    <h1 className="onboarding-title">MatchStick</h1>
                    <div className="title-container">

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

                <h1 className="onboarding-title">MatchStick</h1>
                <div className="profile-1" id="page1">

                    <span><span className="onboarding-header-description">About you</span></span>

                    <h3 className="profileDetails-field-prompt">Introduce youself</h3>
                    <div className="profile-input">
                        <textarea className="profile-name-input" id="text-input" onChange={this.update('description')}></textarea>
                    </div>
                    <button className="onboarding-button" onClick={this.handleClick}>NEXT</button>

                </div>
            </div>
        )

        const questionTwelve = () => (
            <div className="create-profile">

                <div className="profile-0" id="page0">
                    <h1 className="onboarding-title">MatchStick</h1>
                    <div className="title-container">

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
        } else {
            return(<h1>form not working</h1>)
        }

    }
}

export default ProfileForm;

