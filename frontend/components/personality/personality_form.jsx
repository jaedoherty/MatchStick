import React from 'react';

class PersonalityForm extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           ...this.props.profile,
           questions: this.props.questions };
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
    update(question) {
        // console.log(this.state);
        // debugger
        return (e) => {const questions = this.state.questions;
        questions[question] = e.currentTarget.value;
        this.setState({questions: questions});
    }
    // return e => (this.setState((previousState) => ({
        //    profile[quiz_results]: previousState.profile.quiz_results.push(e.currentTarget.value)
        // }))); ;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const answers = Object.values(this.state.questions);
        // const profile = {...this.props.profile};
        // debugger
        // profile.quiz_results = answers;
        const newProfile = {...this.state.profile}
        console.log(this.state);
        this.setState({ quiz_results: answers }, () => {
            const finalProfile = Object.assign({}, this.state, newProfile) 
            console.log(finalProfile)
            return this.props.createProfile(finalProfile)})
        
    }
    render() {
        // console.log(this.state)
        return (
            <div id="personality">
                <h1 className="onboarding-title">MatchStick</h1>
                <h2 className = "personality-title">Personality Quiz</h2>
               <form className="personality-form"onSubmit={this.handleSubmit}>
                   <div className="personality-container">

                        <label className="personality-question"> What is your ideal first date?
                            <textarea className="personality-input" onChange={this.update("What is your ideal first date?")}></textarea>
                        </label> 

                        <label className="personality-question"> If you were a Kardashian, which one would you be?
                            <textarea className="personality-input" onChange={this.update("If you were a Kardashian, which one would you be?")}></textarea>
                        </label >

                        <label className="personality-question"> What is your go to cocktail?
                            <textarea className="personality-input" onChange={this.update('What is your go to cocktail?')}></textarea>
                        </label>
                        <label className="personality-question">How do you feel about pineapple on pizza?
                            <textarea className="personality-input" onChange={this.update("How do you feel about pineapple on pizza?")}></textarea> 
                        </label>
                   </div>
                   <div className="personality-container">
                        <label className="personality-question">Which house would the sorting hat place you in?
                            <textarea className="personality-input" onChange={this.update("Which house would the sorting hat place you in?")}></textarea>
                        </label> 
 

                        <label className="personality-question"> What is your favorite Disney movie?
                            <textarea className="personality-input" onChange={this.update("What is your favorite Disney movie?")}></textarea> 
                        </label >
                        <label className="personality-question"> Which member of BlackPink would you be?
                            <textarea className="personality-input" onChange={this.update("Which member of BlackPink would you be?")}></textarea> 
                        </label >
                        <label className="personality-question">Dogs or cats (and do you have any)?

                            <textarea className="personality-input" onChange={this.update("Dogs or cats (and do you have any")}></textarea>  
                        </label>
                   </div>
                    <div className="personality-container">
                        <label className="personality-question"> What is your favorite Ariana Grande song?
                            <textarea className="personality-input" onChange={this.update("What is your favorite Ariana Grande song?")}></textarea> 
                        </label>
                        <label className="personality-question"> What is your favorite Pokémon?
                            <textarea className="personality-input" onChange={this.update("What is your favorite Pokémon?")}></textarea>  
                        </label>
                        <label className="personality-question"> What is your astrological sign?
                            <textarea className="personality-input" onChange={this.update("What is your astrological sign?")}></textarea>  
                        </label>
                    <button className="onboarding-button" type="submit">Submit</button>
                    </div>
                </form> 
                

            </div>

        );
    }
}

export default PersonalityForm;