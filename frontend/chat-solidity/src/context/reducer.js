export const initialState = {
  name: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
  }
};
