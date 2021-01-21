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
          <a id="footer-link" href="https://github.com/jaedoherty">GitHub</a>
          <a id="footer-link" href="https://www.linkedin.com/in/jae-doherty/">LinkedIn</a>
        </footer>
      )
    }
  }
}

export default Footer;