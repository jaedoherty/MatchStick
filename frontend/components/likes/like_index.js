import React from 'react';
import ProfileCard from '../search/profile_card'

class Likes extends React.Component {
    constructor(props) {
        super(props);
   
    }

    componentDidMount() {
        this.props.fetchLikes(this.props.session.id);
      
    }
    render () {
        if (!this.props.likes) {
            return null;
        } else {
            return (
                <div id="likes">
                    <h1 id="like-header">Liked Profiles</h1>
                    <div id="liked-profiles">
                        {Object.values(this.props.likes).map(prof => {
                            return <ProfileCard profile={prof}/>
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default Likes;