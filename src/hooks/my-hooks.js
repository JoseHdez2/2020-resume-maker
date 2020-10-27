import React, { useRef } from "react";

export const useHandleContentEditable = (user, updateUsers) => {
  const KC_ENTER = 13;
  const text = useRef(user.name);

  const handleChange = evt => {
    console.log(evt, evt.target.value, text);
    text.current = evt.target.value;
  };

  const handleKeyDown = evt => {
    console.log(evt.key, evt.keyCode);
    if (evt.keyCode === KC_ENTER) updateUsers({ ...user, name: text.current });
  };

  return [text, handleChange, handleKeyDown];
};
