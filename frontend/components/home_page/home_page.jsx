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
        if (Object.values(this.props.profiles).length === 0) {
            console.log("null")
            return null;
        } else {
            console.log("else")
            const getIndex = () => {


                    const profileIds = Object.keys(this.props.profiles)
                    
                    const min = Math.min(...profileIds)
                    const max = Math.max(...profileIds)
                    const randomIndex = Math.floor(Math.random() * (max - min) + min)
                    return randomIndex
             
            }

         
            const profile = [this.props.profiles[getIndex()]]
            console.log("function", profile)

            // const element = profile.map((ele) => {
            //     // return <p>{ele['location']}</p> 
            //     // debugger
            //     console.log("in map", ele)
            // })
            // console.log("ele", element)

            return (
                <div id="home-page">
                    <h1 id="home-header">Recommended Just For You</h1>
                    
                    {profile.map((ele) => {
                        // debugger
                        return <ProfileShowContainer profile={ele}/> 
                    })}
                </div>
            )
        }
    }
}


export default HomePage;