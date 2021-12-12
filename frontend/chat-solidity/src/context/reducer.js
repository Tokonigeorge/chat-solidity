export const initialState = {
  name: "",
  typing: false,
  message: "",
  waves: [],
  list: [],
  address: "",
  avatar: "one",
  chatError: false,
  active: "Participants",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_TYPING":
      return { ...state, typing: action.typing };
    case "SET_MESSAGE":
      return { ...state, message: action.message };
    case "SET_WAVES":
      return { ...state, waves: action.waves };
    case "SET_LIST":
      return { ...state, list: action.list };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "SET_AVATAR":
      return { ...state, avatar: action.avatar };
    case "SET_CHATERROR":
      return { ...state, chatError: action.chatError };
    case "SET_ACTIVE":
      return { ...state, active: action.active };
  }
};
