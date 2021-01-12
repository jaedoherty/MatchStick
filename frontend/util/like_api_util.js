export const fetchLikedProfiles = liker_id => {
    return $.ajax({
        url: `api/likes`,
        method: 'GET',
        data: {liker_id}
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