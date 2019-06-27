import React from "react";

export function Viewtip(props) {
    console.log ("split tip" + props.splitTip)

  return (
    <div>
      <h3>Total Tip is ${props.totalTip}</h3>
      <h3>Tip is split {props.splitTip} ways. Tip per person is ${props.splitTipAmt}</h3>
    </div>
  );
}
export default Viewtip;
