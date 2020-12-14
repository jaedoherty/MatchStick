export const getProfile = (state) => {
   const profileId = Object.values(state.entities.profiles).map(profile => {
       if (profile.user_id === state.session.id) {
           return profile.id
       }
   })
    return profileId[0]; 
}