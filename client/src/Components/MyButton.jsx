import React from "react";

function MyButton({ disabled, children }) {
  return <button disabled={disabled}>{children}</button>;
}

export default MyButton;
