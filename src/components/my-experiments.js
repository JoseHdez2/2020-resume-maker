import React, { useRef } from "react";
import { ContentEditable } from "react-contenteditable";

export const MyContEdit = ({ html }) => {
  const text = useRef(html);

  const handleChange = evt => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  return (
    <ContentEditable
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};
