const clubsLoaded = (newClubs) => {
    return {
        type: 'CLUBS_LOADED',
        payload: newClubs
    };
};

export {
    clubsLoaded
};