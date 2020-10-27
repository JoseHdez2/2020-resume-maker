import React from "react";
import { FixedSizeList as FixedSizeList0 } from "react-window";

const WithVirtualList = ({ elems, children, innerRef }) => {
  return (
    <FixedSizeList0
      height={150}
      itemCount={elems.length}
      itemSize={35}
      width={300}
      innerRef={innerRef}
    >
      {({ index, style }) => {
        return (
          <div
            className={index % 2 ? "ListItemOdd" : "ListItemEven"}
            style={style}
          >
            {children(elems[index])}
          </div>
        );
      }}
    </FixedSizeList0>
  );
};

export { WithVirtualList };
