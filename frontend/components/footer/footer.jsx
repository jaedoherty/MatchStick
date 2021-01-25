import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.session.id) {
      return null
    } else {
      return (
        <footer id="footer">
          <a id="footer-link" href="https://github.com/jaedoherty">
            <img id="git-img" src={window.github} />
          </a>
          <a id="footer-link" href="https://www.linkedin.com/in/jae-doherty/">
            <img id="linkedin-img" src={window.linkedin} />
          </a>
        </footer>
      );
    }
  }
}

export default Footer;