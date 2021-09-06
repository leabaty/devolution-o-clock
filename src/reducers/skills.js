import { SET_SKILLS } from "src/actions";

export const initialState = {
    skills: [],
};

const skillsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SKILLS:
            return {
                ...state,
                skills: action.value
            };
        default:
            return state;
    }
};

export default skillsReducer;
