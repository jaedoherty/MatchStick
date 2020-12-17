import React from 'react';

class PersonalityForm extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           profile: this.props.profile,
           questions: this.props.questions };
        // debugger
        //    ...this.props.questions };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
    update(question) {
        // console.log(this.state);
        // debugger
        return (e) => {

            // const profile = { ...this.state.profile };
            const questions = this.state.questions;
            // questions.add({[question]: e.target.value});
            questions[question] = e.target.value;
            // profile.quiz_results = Array.from(questions)
            // console.log("questions", questions)
            this.setState({ questions });
        };
    }
    // return e => (this.setState((previousState) => ({
        //    profile[quiz_results]: previousState.profile.quiz_results.push(e.currentTarget.value)
        // }))); ;

    updateQuiz () {
        const profile = { ...this.state.profile };
        const questions = [this.state.questions];
        profile.quiz_results = questions;
        return profile;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        debugger
        // const answers = Object.values(this.state.questions);
        const newProfile = {...this.state.profile}
        // newProfile.quiz_results = this.state.questions
        this.setState({profile: this.updateQuiz()}, () => {
            // const finalProfile = Object.assign({}, this.state.profile, newProfile) 
            debugger
           return this.props.action(this.state.profile).then(this.props.history.push('/home'))
        })
    }

    // render() {
    //     // console.log(this.state)
    //     const profile = {...this.state.profile};
    //     // debugger
    //     profile.quiz_results = answers;
    //     this.setState({ profile }, () => this.props.createProfile(this.state.profile).then(this.props.history.push('/home')))
        
    // }
    render() {
        // console.log(this.state)
        return (
            <div id="personality">
                {/* <h1 className="onboarding-title">MatchStick<//h1> */}
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
                                {/* <select className="dropdown" id="kardashian">
                                <option className="drop-option" id="select" selected disabled>Please select</option>
                                <option className="drop-option" id="Jennie">Jennie</option>
                                <option className="drop-option" id="Jisoo">Jisoo</option>
                                <option className="drop-option" id="Lisa">Lisa</option>
                                <option className="drop-option" id="Rosé">Rosé</option>
                            </select> 
                        </label> */}
                        <label className="personality-question">Dogs or cats (and do you have any)?

                            <textarea className="personality-input" onChange={this.update("Dogs or cats (and do you have any)?")}></textarea>  
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
                        {/* <label className="personality-question">What is your astrological sign?
                                <select id="zodiac" className="dropdown">
                                <option className="drop-option" id="select" selected disabled>Please select</option>
                                <option className="drop-option" id="Aries">Aries</option>
                                <option className="drop-option" id="Taurus">Taurus</option>
                                <option className="drop-option" id="Gemini">Gemini</option>
                                <option className="drop-option" id="Cancer">Cancer</option>
                                <option className="drop-option" id="Leo">Leo</option>
                                <option className="drop-option" id="Virgo">Virgo</option>
                                <option className="drop-option" id="Libra">Libra</option>
                                <option className="drop-option" id="Scorpio">Scorpio</option>
                                <option className="drop-option" id="Sagittarius">Sagittarius</option>
                                <option className="drop-option" id="Capricorn">Capricorn</option>
                                <option className="drop-option" id="Aries">Aries</option>
                                <option className="drop-option" id="Pisces">Pisces</option>
                            </select> */}
                        </label>
                    <button className="onboarding-button" type="submit">Submit</button>
                    </div>
                </form> 
                

            </div>

        );
    }
}

export default PersonalityForm;