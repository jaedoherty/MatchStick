export const fetchProfile = profileId => {
    return $.ajax({
        url: `api/profiles/${profileId}`
    })
}

export const createProfile = profile => {
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