export const updateName = (name) => {
  return {
    type: "SET_NAME",
    name: name,
  };
};

export const updateTyping = (typing) => {
  return {
    type: "SET_TYPING",
    typing: typing,
  };
};
