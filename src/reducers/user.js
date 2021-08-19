
export const initialState = {
  email:'',
  password:'',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
