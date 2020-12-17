export const getProfile = (state) => {
    let profileId;
   Object.values(state.entities.profiles).forEach(profile => {
       if (profile.user_id === state.session.id) {
        profileId = profile.id
        }
    })
    // debugger
    return profileId; 
}