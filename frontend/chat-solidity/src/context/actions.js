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

export const updateMessage = (message) => {
  return {
    type: "SET_MESSAGE",
    message: message,
  };
};

export const updateWaves = (waves) => {
  return {
    type: "SET_WAVES",
    waves: waves,
  };
};

export const updateParticipantList = (list) => {
  return {
    type: "SET_LIST",
    list: list,
  };
};

export const updateContractAddress = (address) => {
  return {
    type: "SET_ADDRESS",
    address: address,
  };
};

export const updateAvatar = (avatar) => {
  return {
    type: "SET_AVATAR",
    avatar: avatar,
  };
};

export const updateChatError = (chatError) => {
  return {
    type: "SET_CHATERROR",
    chatError: chatError,
  };
};

export const updateNavActive = (active) => {
  return {
    type: "SET_ACTIVE",
    active: active,
  };
};
