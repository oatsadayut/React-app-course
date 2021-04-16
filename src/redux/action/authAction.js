export const TOKEN_AUTH = "TOKEN_AUTH";

export const authToken = (token = {}) => {
  return {
    type: TOKEN_AUTH,
    payload: {
      token: token,
    }
  };
};
