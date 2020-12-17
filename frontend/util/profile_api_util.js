export const fetchProfiles = () => {
    return $.ajax ({
        url: `api/profiles` 
    })
}

export const fetchProfile = profileId => {
    return $.ajax({
        url: `api/profiles/${profileId}`
    })
}

export const createProfile = profile => {
    // debugger
    console.log("in util");
    return $.ajax({
        url: `api/profiles`,
        method: 'POST',
        data: {profile}
    })
}

export const updateProfile = profile => {
    return ({
        url: `api/profiles/${profile.id}`,
        method: 'PATCH',
        data: {profile}
    })
}

    
export const addLikeToProfile = profileId => {
    return $.ajax({
        url: 'api/likes',
        method: 'POST',
        data: { profileId }
    })
}

export const deleteLikeFromProfile = profileId => {
    return $.ajax({
        url: 'api/likes',
        method: 'DELETE',
        data: { profileId }
    })
}