export const fetchLikedProfiles = likerId => {
    return $.ajax({
        url: `api/likes`,
        method: 'GET',
        data: {likerId}
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
        url: `api/likes/${profileId}`,
        method: 'DELETE',
        data: { liked_profile_id: profileId }
    })
}