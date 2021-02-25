// import { fetch } from "./csrf";

// const SET_CONTENT = "locationInfo/setContent";
// const SUBMIT_COMMENT = "locationInfo/submit_comment"

// const setContent = (venues) => ({
//     type: SET_CONTENT,
//     venues,
// });


// export const submitComment = ({user_Id, location_id, comment, created_at, updated_at}) => async (dispatch) => {
//     const res = await fetch(`/api/location/comments`, {
//         method: "POST",
//         headers : {
//             "Content-Type": "application/json",
//         },

//         body: JSON.stringify({user_Id, location_id, comment, created_at, updated_at}),
//     });
//     await dispatch(setContent(res.data))

//     return res;
// }

//     const locationInfoReducer = (state = [], action) => {
//         switch (action.type) {
//             case SET_CONTENT:
//                 const locationInfo = Object.assign({}, { locations: action.locations });
//                 return locationInfo;
//             case SUBMIT_COMMENT:
//                 const locationComment = Object.assign({}, {location: action.location});
//                 return locationComment

//             default:
//             return state;
//         }
//     }

//     export default locationInfoReducer;
