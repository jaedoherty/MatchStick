import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoUser(e) {
        e.preventDefault();
        this.setState({
            ['username']: 'demo_user',
            ['password']: 'demouser'
        });
        setTimeout(() => {
            const user = Object.assign({}, this.state);
            this.props.login(user).then(this.props.closeModal)
        }, 1000);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // if (this.props.formType === 'Get Started')
        return (
            <div className="login-form-container">
                <div id="close-x">
                    <button onClick={this.props.closeModal} id="closebutton">X</button>
                </div>

                <form onSubmit={this.handleSubmit} className="login-form-box">
   
                    <div className="formType">
                        {this.props.formType}
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
       
                        <label className="infofield">Username
           
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
       
       
                        <label className="infofield">Password
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
       
       
                        <input className="session-submit" type="submit" value={this.props.formType} />
       
                        <span onClick={this.demoUser} id="demo-user">  Demo User  </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);