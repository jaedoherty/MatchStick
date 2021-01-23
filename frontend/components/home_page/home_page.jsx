import React from 'react';
import {Link} from 'react-router-dom';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            profIndex: 0
        }
    }
    componentDidMount() {
        if (!this.props.session.id) {
            this.props.history.push('/')
        } else {

            this.props.fetchProfiles();
            this.props.fetchLikes(this.props.session.id);
        } 
    }
    

    handleClick () {
        this.props.history.push('/nextProfile')
    } 

    handlePass (arr) {
        return (e) => {
            this.setState((previousState) => ({
                profIndex: previousState.profIndex + 1
            }))
        }
    }

    render() {
        if (Object.values(this.props.profiles).length === 0) {

            return null;
        } else {

            const profiles = () => {


                    const ids = Object.keys(this.props.profiles)
                    const likedIds = Object.keys(this.props.likes)
                    const validIds = [];
                   let that = this; 
                    ids.forEach(id => {
                        if (id !== that.props.profileId && !likedIds.includes(id)) {
                            validIds.push(that.props.profiles[id])
                        }
                    })
                    console.log(validIds)
                    return validIds
                    
             
            }

            let profs = Object.values(profiles())
            
            const profile = profs[this.state.profIndex % profs.length]

            return (
                <div id="home-page">
                    <h1 id="home-header">Recommended Just For You</h1>
                    
                            <div id="profile-info">
                                <div className="smash-img" id="home-image">
                                    <img id="resize-smash" src={window[profile.img_name]}/>
                                    <div id="basic-info">
                                        <label className="basic-id"> Name
                                        <p className="basic-value">{profile.first_name}</p> 
                                        </label>
                                        <label className="basic-id"> Age

                                        <p className="basic-value">{profile.age}</p> 
                                        </label>
                                    </div>
                                    <div id="profile-button">
                                        <Link to={`/seeProfile/${profile.id}`}><button className="home-button">See their profile</button></Link>
                                    </div>
                                </div>
        
                                <label className="home-label"> About me
                                    <p className="home-value">{profile.description}</p>
                                </label>
                                <label className="home-label"> Gender
                                    <p className="home-value">{profile.gender}</p>
                                </label>
                                <label className="home-label"> Location
                                    <p className="home-value">{profile.location}</p>
                                </label>
   
                                <div id="home-buttons">

                                    <div id="like-buttons">< button className="home-button" onClick={() => this.props.likeProfile(profile.id)}>Like</button><button className="home-button" onClick={this.handlePass(profs)}>Pass</button></div>
                                </div> 

                            </div>
                        ) 
                </div>
            )
        }
    }
}


export default HomePage;