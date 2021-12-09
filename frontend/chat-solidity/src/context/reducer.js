export const initialState = {
  name: "",
  typing: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_TYPING":
      return { ...state, typing: action.typing };
  }
};
