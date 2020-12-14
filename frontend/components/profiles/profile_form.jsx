import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value });
    }

    question() {
        if (this.props.question === 0) {
            return (
                <div>
                    <h3 className="onboarding-stepIntro-title">Let's start with the basics</h3>
                    <div className="onboarding-stepIntro-subtitle">Set up your profile to meet new people.</div>
                    <div className="onboarding-stepIntro-image">Image Placeholder</div>
                    <button class="onboarding-stepIntro-button">Next</button>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="create-profile">
                <h1>MatchStick</h1>
                <div className="onboarding">{question()}</div>
            </div>
        )
    }
}

export default ProfileForm;