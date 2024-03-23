import "./basic.css";
import { PointlineJS } from "pointlinejs";

const simple_chart_config = {
  chart: {
    container: "#tree-simple",
  },

  nodeStructure: {
    text: { name: "Parent node" },
    children: [
      {
        text: { name: "First child" },
      },
      {
        text: { name: "Second child" },
      },
    ],
  },
};

const testTree = new PointlineJS(simple_chart_config);
testTree.getTree();
testTree.draw();
