import Dygraph from 'dygraphs';

new Dygraph(document.getElementById("graphdiv"),
    "Date,Temperature\n" +
    "2008-05-07,75\n"    +
    "2008-05-08,70\n"    +
    "2008-05-09,80\n");

const DyGraph = () => {
  return <h1>DyGraph</h1>;
};

export default DyGraph;