export const initialState = {
    activeStory: null,
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "SET_ACTIVE_STORY":
            return {
                ...state,
                activeStory: action.activeStory
            }
            case "CLOSE_ACTIVE_STORY":
                return {
                    ...state,
                    activeStory: action.activeStory
                }
            case "REGISTER_USER":
                return {
                    ...state,
                    user: action.user
                }
            case "SIGN_IN_USER":
                    return {
                        ...state,
                        user: action.user
                    }
                
        default:
            return state
    }
}

export default reducer;