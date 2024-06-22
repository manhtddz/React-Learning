const initialState = {
    users: [
        { id: 1, name: 'Manh' },
        { id: 2, name: 'Manh2' }

    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Delete User':
            console.log(action);
            let users = state.users;
            users = users.filter((item => item.id !== action.payload.id));
            return {
                ...state, users
            };
        case 'Create User':
            console.log(action);
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                state, users: [...state.users, user]
            }
    }
    return state;
}

export default rootReducer;