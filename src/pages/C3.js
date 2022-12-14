import React from "react";
import c3 from "c3";

const C3 = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        type: "area",
      },
    });
  }, []);
  
  return <div id="chart" />;
};

export default C3;

// const C3 = () => {
//   return <h1>C3</h1>;
// };

// export default C3;
