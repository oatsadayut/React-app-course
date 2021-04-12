import { GET_PROFILE } from "../action/profileAction"; //import action

//init State
const initState = {
  profile: null,
};

//retrue state
const profileReducer = (state = initState, action) => {
  switch (action.type) {
     //action type
    case GET_PROFILE: //Name Type action
      return {
        ...state, //State ก่อนหน้าทั้งหมด
        profile: action.payload.profile, //Profile ที่อยู่ใน Payload
      };
    default:
      return state; // Return Default
  }
};

export default profileReducer;
