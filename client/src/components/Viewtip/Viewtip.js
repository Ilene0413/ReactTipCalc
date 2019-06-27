import React from "react";

export function Viewtip(props) {
  return (
    <div>
      <p>Total Tip is ${props.tipAmt}</p>
      <p>Tip per person is ${props.splitTipAmt}</p>
    </div>
  );
}
export default Viewtip;
