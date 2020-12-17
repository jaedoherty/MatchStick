import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from './nav_bar_container'
import OtherProfileShow from '../profiles/other_profile_show_container'
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


                    const ids = Object.keys(this.props.profiles)
                    
                    let profileIds = [];
                    ids.forEach( (id) => {if (id !== (this.props.profile)) profileIds.push(id)})
                     
                    const min = Math.min(...profileIds)
                    const max = Math.max(...profileIds)
                    const randomIndex = Math.floor(Math.random() * (max - min) + min)
                    return randomIndex
             
            }

            let index = getIndex() 
            const profile = [this.props.profiles[index]]
            console.log(index)

            return (
                <div id="home-page">
                    <h1 id="home-header">Recommended Just For You</h1>
                    
                    {profile.map((ele) => {
                        // debugger
                        return (
                            <div id="profile-info">
                                <div>image placeholder</div>
                                <p>Name: {ele.first_name}</p>
                                <p>Age: {ele.age}</p>
                                <p>Bio: {ele.description}</p>
                                <p>Gender: {ele.gender}</p>
                                <p>Location: {ele.location}</p>
                                {/* <p>{ele.zip_code}</p> */}
                                
                                <Link to={`/seeProfile/${index}`}><button>See their profile</button></Link>
                                <div><button>Like</button> <button>Pass</button></div>

                            </div>
                        )
                        // return <ProfileShowContainer profile={ele}/> 
                    })}
                </div>
            )
        }
    }
}


export default HomePage;