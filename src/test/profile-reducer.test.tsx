import profileReducer, {addPostActionCreator} from "../redux/profile-reducer";

it('Length of post shold be increment', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let state = {
        posts: [
            {id: 1, message: 'Bro', likesCount: 12},
            {id: 2, message: 'It', likesCount: 11},
            {id: 3, message: 'Hi', likesCount: 0},
            {id: 4, message: 'Hoy', likesCount: 4}
        ]
    }
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})