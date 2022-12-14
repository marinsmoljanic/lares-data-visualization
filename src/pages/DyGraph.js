import React from "react";
import Dygraph from 'dygraphs';

const myStyle = {
    width: "500px",
    maxWidth: "300px"
  };

const DyGraph = () => {
    React.useEffect(() => {
        new Dygraph(document.getElementById("graphdiv"),
            "Date,Temperature\n" +
            "2008-05-07,75\n"    +
            "2008-05-08,70\n"    +
            "2008-05-09,80\n");
        }, []);
  return <div id="graphdiv" style={myStyle}></div>;
};

export default DyGraph;