import React from "react";
import Items from "./utils/Items";
import Title from "./utils/Title";

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          {items?.map((item, i) => (
            <Items {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
