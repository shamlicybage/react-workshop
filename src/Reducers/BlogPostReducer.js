function BlogPostReducer(state = [], action) {
  if (action.type === "setBlogs") return action.payload;

  if (action.type === "AddCard") {
    return [action.payload, ...state];
  }

  return state;
}
export default BlogPostReducer;
