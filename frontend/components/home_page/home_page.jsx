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
        // if (!this.props.profile) {
        //     return null;
        // } else {
        return (
            <h1>Home Page</h1>
        )
        }
    }


export default HomePage;