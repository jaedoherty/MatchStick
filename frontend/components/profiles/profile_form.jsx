import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0
        }
        this.handleClick = this.handleClick.bind(this); 
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value });
    }

    handleClick(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.setState((previousState) => ({
            question: previousState.question + 1
        }))

    }

    render () {
        debugger
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
                <button className="onboarding-stepIntro-button" onClick={this.handleClick}>NEXT</button>
            </div>
        ) 

        if (this.state.question === 0) {
            return questionZero();
        } else {
            return (<h1>form not working</h1>);
        } 
    }
}

export default ProfileForm;