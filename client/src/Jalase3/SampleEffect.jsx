import React, { useEffect, useState } from "react";

function SampleEffect() {
  const [count, setScount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("hello");
  }, [num]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <span>{count}</span>
      <button onClick={() => setScount(count + 1)}>Click Me</button>
      <span>{num}</span>

      <button onClick={() => setNum(num + 1)}>Click Increase Num</button>
    </div>
  );
}

export default SampleEffect;
