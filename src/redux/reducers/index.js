

const initialState = {
    favourite: {
        content: []
    }
}

const mainReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVOURITE":
            return {
                favourite: {
                    ...state.favourite,
                    content: [...state.favourite.content, action.payload]
                }
            }
        case "REMOVE_FAV_COM":
            return {
                favourite: {
                    ...state.favourite,
                    content: state.favourite.content.filter((data) => data._id !== action.payload)
                }
            }
        default:
            return state
    }

}


export default mainReducers