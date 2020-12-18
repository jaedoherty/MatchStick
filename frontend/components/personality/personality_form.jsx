import React from 'react';

class PersonalityForm extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           profile: this.props.profile,
           questions: this.props.questions };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
    update(question) {

        return (e) => {

            const questions = this.state.questions;

            questions[question] = e.target.value;

            this.setState({ questions });
        };
    }


    updateQuiz () {
        const profile = { ...this.state.profile };
        const questions = [JSON.stringify(this.state.questions)];
        profile.quiz_results = questions;
        profile.user_id = this.props.sessionId;
        return profile;
    }
    
    handleSubmit(e) {
        e.preventDefault();

        const newProfile = {...this.state.profile}

        this.setState({profile: this.updateQuiz()}, () => {
   
            // debugger
           return this.props.action(this.state.profile).then(this.props.history.push('/home'))
        })
    }


    render() {

        return (
            <div id="personality">

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

                        </label>
                    <button className="onboarding-button" type="submit">Submit</button>
                    </div>
                </form> 
                

            </div>

        );
    }
}

export default PersonalityForm;