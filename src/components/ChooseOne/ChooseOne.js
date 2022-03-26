import React from "react";

const ChooseOne = (props) => {
  //   console.log(props.oneItem[0].name);
  return (
    <div>
      <h3>You can buy this {props.oneItem[0].name}</h3>
    </div>
  );
};

export default ChooseOne;
