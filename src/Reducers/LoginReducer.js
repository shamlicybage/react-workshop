function LoginReducer(state = false, action) {
  if (action.type === "setLoggedIn") return action.payload;

  return state;
}

export default LoginReducer;
