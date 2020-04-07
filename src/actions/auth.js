export const auth = ({ email, password, history}) => dispatch => {

  // TODO: fetch jwt token
  const token = "a^$q39weqwqwe";
  localStorage.setItem("token", token);

  dispatch({
    type: "LOGIN",
    payload: {
      email
      // ....
    }
  });
  history.push('/dashdoard')
};

export const reg = ({ email, password, history}) => dispatch => {
  // TODO: fetch reg 
  dispatch(auth({email, password, history}))
};
