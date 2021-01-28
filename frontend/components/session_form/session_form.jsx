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


    componentWillUnmount() {
        this.props.removeErrors();
    }

    demoUser(e) {
        e.preventDefault();
        this.setState({
            ['username']: 'demo-user',
            ['password']: 'demouser'
        });
        setTimeout(() => {
            const user = Object.assign({}, this.state);
            this.props.login(user).then(() => { 
                this.props.closeModal();
                // debugger
                this.props.history.push("/home");
            })
             }, 1000);
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'Get Started') {
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
          this.props.closeModal();
          // debugger
          this.props.history.push("/home");
        });
        // this.props.closeModal();
        } else {
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(() => { 
                this.props.closeModal();
              
                this.props.history.push("/newProfile");
            });
            // this.props.closeModal(); 
        }
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
        return (
          <div className="login-form-container">
            <div id="close-x">
              <button onClick={this.props.closeModal} id="closebutton">
                X
              </button>
            </div>

            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="formType">
                <img id="logo" src={window.match} /> {this.props.formType} <img id="logo" src={window.match} />
              </div>
              {this.renderErrors()}
              <div className="login-form">
                <label className="infofield">
                  Username
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="login-input"
                  />
                </label>

                <label className="infofield">
                  Password
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </label>

                <input
                  className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />

                <span onClick={this.demoUser} id="demo-user">
                  {" "}
                  Demo User{" "}
                </span>
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(SessionForm);