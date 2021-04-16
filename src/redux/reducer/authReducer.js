import { TOKEN_AUTH } from "../action/authAction"; //import action

//init State
const initState = {
  token: null,
};

//retrue state
const authReducer = (state = initState, action) => {
  switch (action.type) {
     //action type
    case TOKEN_AUTH: //Name Type action
      return {
        ...state, //State ก่อนหน้าทั้งหมด
        token: action.payload.token, //token ที่อยู่ใน Payload
      };
    default:
      return state; // Return Default
  }
};

export default authReducer;
