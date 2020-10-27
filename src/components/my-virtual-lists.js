import React, { useState } from "react";
import { ContentEditable } from "react-contenteditable";
import { FixedSizeList as FixedSizeList0 } from "react-window";

export const FixedSizeList = ({ elems, mappingFn }) => {
  const Row2 = ({ index, style }) => {
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        {mappingFn(elems[index])}
      </div>
    );
  };

  return (
    <FixedSizeList0
      height={150}
      itemCount={elems.length}
      itemSize={35}
      width={300}
    >
      {Row2}
    </FixedSizeList0>
  );
};

export const EditableFixedSizeList = ({ elems, setElems, mappingFn }) => {
  const Row2 = ({ index, style }) => {
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        {mappingFn(elems[index])}
      </div>
    );
  };

  return (
    <FixedSizeList0
      height={150}
      itemCount={elems.length}
      itemSize={35}
      width={100}
    >
      {Row2}
    </FixedSizeList0>
  );
};
