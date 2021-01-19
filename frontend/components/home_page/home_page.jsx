import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from './nav_bar_container'
import OtherProfileShow from '../profiles/other_profile_show_container'
import ProfileShow from '../profiles/profile_show';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.handleClick = this.handleClick.bind(this)
        // this.generateProfile = this.generateProfile.bind(this)
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }
    

    handleClick () {
        this.props.history.push('/nextProfile')
    } 

    render() {
        if (Object.values(this.props.profiles).length === 0) {

            return null;
        } else {

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

            return (
                <div id="home-page">
                    <h1 id="home-header">Recommended Just For You</h1>
                    
                    {profile.map((prof_ele) => {

                        return (
                            <div id="profile-info">
                                <div className="smash-img" id="home-image">
                                    <img id="resize-smash" src={window[prof_ele.img_name]}/>
                                    <div id="basic-info">
                                        <label className="basic-id"> Name
                                        <p className="basic-value">{prof_ele.first_name}</p> 
                                        </label>
                                        <label className="basic-id"> Age

                                        <p className="basic-value">{prof_ele.age}</p> 
                                        </label>
                                    </div>
                                    <div id="profile-button">
                                        <Link to={`/seeProfile/${index}`}><button className="home-button">See their profile</button></Link>
                                    </div>
                                </div>
        
                                <label className="home-label"> About me
                                    <p className="home-value">{prof_ele.description}</p>
                                </label>
                                <label className="home-label"> Gender
                                    <p className="home-value">{prof_ele.gender}</p>
                                </label>
                                <label className="home-label"> Location
                                    <p className="home-value">{prof_ele.location}</p>
                                </label>
   
                                <div id="home-buttons">

                                    <div id="like-buttons">< button className="home-button" onClick={() => this.props.likeProfile(prof_ele.id)}>Like</button><button className="home-button" onClick={this.handleClick}>Pass</button></div>
                                </div> 

                            </div>
                        ) 
                    })}
                </div>
            )
        }
    }
}


export default HomePage;