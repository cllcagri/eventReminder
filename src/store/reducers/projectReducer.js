const initState = {
    projects : [
        {id: '1', title: 'The Fellowship of the Ring', content: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.'},
        {id: '2', title: 'The Return of the King', content: 'The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum unaware of the path he is leading them to.'},
        {id:'3', title: 'The Two Towers', content: 'Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault on it.'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("created project error", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;