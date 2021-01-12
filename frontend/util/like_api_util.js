export const fetchLikedProfiles = likerId => {
    return $.ajax({
        url: `api/likes`,
        method: 'GET',
        data: {likerId}
    }) 
}

export const addLikeToProfile = profileId => {
    // debugger
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