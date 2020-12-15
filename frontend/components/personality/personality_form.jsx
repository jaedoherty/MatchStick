import React from 'react';

class PersonalityForm extends React.Component {
    constructor(props) {
       super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
    update(question) {
        return e => (this.setState((previousState) => ({
            [quiz_results]: previousState.profile.quiz_results.push(e.currentTarget.value)
        }))); ;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProfile(this.state.profile);
    }
    render() {

        return (
            <div id="personality">
                <h1 className="onboarding-title">MatchStick</h1>
                <h2 className = "personality-title">Personality Quiz</h2>
               <form className="personality-form"onSubmit={this.handleSubmit}>
                   <div className="personality-container">

                        <label className="personality-question"> What is your ideal first date?
                            <textarea className="personality-input" onChange={this.update(" What is your ideal first date?")}></textarea>
                        </label> 
                        <label className="personality-question"> If you were a Kardashian, which one would you be?
                            <select className="dropdown" id="kardashian">
                                <option className="drop-option" id="select" selected disabled>Please select</option> 
                                <option className="drop-option" id="Kim">Kim</option>
                                <option className="drop-option" id="Khloe">Khloe</option>
                                <option className="drop-option" id="Kourtney">Kourtney</option>
                                <option className="drop-option" id="Kylie">Kylie</option>
                                <option className="drop-option" id="Kendall">Kendall</option>
                                <option className="drop-option" id="Kris">Kris</option>
                            </select>
                        </label>
                        <label className="personality-question"> What is your go to cocktail?
                            <textarea className="personality-input" onChange={this.update(" What is your go to cocktail?")}></textarea>
                        </label>
                        <label className="personality-question">What is your favorite genre of music?
                            <textarea className="personality-input" onChange={this.update("What is your favorite genre of music?")}></textarea> 
                        </label>
                   </div>
                   <div className="personality-container">
                        <label className="personality-question">Which house would the sorting hat place you in?
                            <select className="dropdown" id="sorting-hat">
                                <option className="drop-option" id="select" selected disabled>Please select</option>
                                <option className="drop-option" id="Ravenclaw">Ravenclaw</option>
                                <option className="drop-option" id="Hufflepuff">Hufflepuff</option>
                                <option className="drop-option" id="Slytherin">Slytherin</option>
                                <option className="drop-option" id="Gryffindor">Gryffindor</option>
                            </select> 
                        </label>

                        <label className="personality-question"> What is your favorite Disney movie?
                            <textarea className="personality-input" onChange={this.update("What is your favorite Disney movie?")}></textarea> 
                        </label >
                        <label className="personality-question"> Which member of BlackPink would you be?
                                <select className="dropdown" id="kardashian">
                                <option className="drop-option" id="select" selected disabled>Please select</option>
                                <option className="drop-option" id="Jennie">Jennie</option>
                                <option className="drop-option" id="Jisoo">Jisoo</option>
                                <option className="drop-option" id="Lisa">Lisa</option>
                                <option className="drop-option" id="Rosé">Rosé</option>
                            </select> 
                        </label>
                        <label className="personality-question">What is your favorite season?
                            <select className="dropdown" id="season">
                                <option className="drop-option" id="select" selected disabled>Please select</option>
                                <option className="drop-option" id="Spring">Spring</option>
                                <option className="drop-option" id="Summer">Summer</option>
                                <option className="drop-option" id="Fall">Fall</option>
                                <option className="drop-option" id="Winter">Winter</option>
                            </select>  
                        </label>
                   </div>
                    <div className="personality-container">
                        <label className="personality-question"> What is your favorite Ariana Grande song?
                            <textarea className="personality-input" onChange={this.update("What is your favorite Ariana Grande song?")}></textarea> 
                        </label>
                        <label className="personality-question"> What is your favorite type of cookie?
                            <textarea className="personality-input" onChange={this.update("What is your favorite type of cookie?")}></textarea>  
                        </label>
                        <label className="personality-question">What is your astrological sign?
                                <select id="zodiac" className="dropdown">
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
                            </select>
                        </label>
                    <button className="onboarding-button" type="submit">Submit</button>
                    </div>
                </form> 
                

            </div>

        );
    }
}

export default PersonalityForm;