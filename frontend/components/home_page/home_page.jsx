import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from './nav_bar_container'
import ProfileShowContainer from '../profiles/profile_show_container'
import ProfileShow from '../profiles/profile_show';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        // this.generateProfile = this.generateProfile.bind(this)
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }
    

    
    render() {
        if (!this.props.profiles) {
            return null;
        } else {
            const getIndex = () => {


                    const profileIds = Object.keys(this.props.profiles)
                    
                    const min = Math.min(...profileIds)
                    const max = Math.max(...profileIds)
                    const randomIndex = Math.floor(Math.random() * (max - min) + min)
                    return randomIndex
             
            }
         
            const profile = this.props.profiles[getIndex()]
            console.log("function", profile)
            return (
                <div id="home-page">
                    <h1 id="home-header">Recommended Just For You</h1>
            
                    {/* {profile.map((ele) => {
                    <p>{ele}</p> 
                    })} */}
                </div>
            )
        }
    }
}


export default HomePage;