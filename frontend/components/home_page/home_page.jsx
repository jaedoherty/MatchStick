import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }
    render() {
        if (!this.props.session.id) {
            return null;
        } else {
        return (
            <div id="home-page">
                
                <h1 id="home-header">Home Page</h1>
            </div>
        )
        }
    }
}


export default HomePage;