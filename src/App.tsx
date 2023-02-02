/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Graph } from "@antv/x6";
import { useEffect } from "react";
import "./App.css";

function App() {
  let graph: Graph;

  // 初始化画布
  const initGraph = () => {
    graph = new Graph({
      container: document.getElementById("container"),
      autoResize: true,
      background: {
        color: "#F2F7FA",
      },
    });
  };

  // 注册自定义节点
  const registerNodes = () => {
    Graph.registerNode("custom-node", {
      width: 100,
      height: 40,
      component: <div>test</div>,
    });
  };

  useEffect(() => {
    initGraph();
    if (graph) {
      registerNodes();
      graph.addNode({
        shape: "custom-node",
        x: 100,
        y: 40,
        label: "custom",
      });
    }
    graph.addNode({
      shape: "rect",
      x: 100,
      y: 40,
      width: 100,
      height: 40,
      label: "rect",
    });

    // 自适应窗口大小
    // window.addEventListener("resize", (e) => {
    //   GRAPH.resize(
    //     (e.target as Window).innerWidth,
    //     (e.target as Window).innerHeight
    //   );
    // });
  }, []);

  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}

export default App;
