  import {
    FETCH_POST,
    SAVE_POST,
    REMOVE_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
  } from "./actionTypes";
  
  import { v4 as uuidv4 } from 'uuid';
  
  
  export default function rootReducer(state = {}, action) {
    let p = state[action.postId];
  
    switch (action.type) {
  
      case FETCH_POST:
        return { ...state, [action.post.id]: action.post };
  
      case SAVE_POST:
        console.log(`*************************${uuidv4()}`)
        return { ...state, [uuidv4()]: { ...action.formData, comments: [] }};
  
      case UPDATE_POST:
        return {
          ...state,
          [action.post.id]: {
            ...action.post,
            comments: state[action.post.id].comments
          }
        };
  
      case REMOVE_POST:
        let posts = { ...state };
        delete posts[action.postId];
        return posts;
  
      case ADD_COMMENT:
        return {
          ...state,
          [action.postId]: { ...p, comments: [...p.comments, action.comment] }
        };
  
      case REMOVE_COMMENT :
        return {
          ...state,
          [action.postId]: {
            ...p, comments: p.comments.filter(c => c.id !== action.commentId)
          }
        };
  
      default:
        return state;
    }
  }
  