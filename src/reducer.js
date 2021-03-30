const INITIAL_STATE = {
    posts: {id:0, title: "first_title", description: "description here", body: "tex text", comments: []},
    error: false
  };
  
  function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'POST_BLOG':
        return { ...state, posts: action.post };
  
      case 'ERROR':
        return { ...state, error: true };
  
      default:
        return state;
    }
  }
  
  export default reducer;