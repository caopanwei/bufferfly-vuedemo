// import { Canvas } from "butterfly-dag/pack/index.js";
import pipelineEvents from "./events";
import Canvas from "../class/DragCanvas.js";
import Edge from "../class/Edge";
export default function(flowData,rooter) {
  let root = document.getElementById("canvas");
  let canvas = new Canvas({
    root: root,
    disLinkable: true, // 可删除连线
    linkable: true, // 可连线
    // layout: 'ForceLayout',   //布局设置(可传)，可使用集成的，也可自定义布局
    draggable: true, // 可拖动
    zoomable: true, // 可放大
    // moveable: true, // 可平移
    autoFixCanvas: {
      //节点拖动或连线拖动到画布边缘时，画布自动延展
      enable: true,
      autoMovePadding: [20, 20, 20, 20] //触发自动延展的画布内边距
    },
    // layout: {
    //   type: "drageLayout",
    //   options: {
    //     rankdir: "LR",
    //     align: "DR",
    //     nodesep: 6,
    //     ranksep: 31,
    //     controlPoints: false
    //   }
    // },
    theme: {
      edge: {
        type: "AdvancedBezier",
        arrow: true,
        isExpandWidth: true,//增加线条交互区域
        arrowPosition: 1,
        Class: Edge
      },
      endpoint: {
        position: [],        //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
        linkableHighlight: true,//连线时会触发point.linkable的方法，可做高亮
        limitNum: 1,        //限制锚点的连接数目
        expendArea: {        //锚点过小时，可扩大连线热区
          left: 10,
          right: 10,
          top: 10,
          botton: 10
        }
      }
    },
    zoomGap: 0.001
  });
  // in butterfly
  // canvas.setMinimap(true, {/* options */})
  canvas.setSelectMode(true,['node','endpoint','edge'],'include')
  canvas.setGirdMode(true, {
    isAdsorb: true,         // 是否自动吸附,默认关闭
    theme: {
      shapeType: 'line',     // 展示的类型，支持line & circle
      gap: 23,               // 网格间隙
      adsorbGap: 8,          // 吸附间距
      backgroud: '#fff',     // 网格背景颜色
      lineColor: 'rgba(211, 213, 216, 0.418)',     // 网格线条颜色
      lineWidth: 1          // 网格粗细
    }
  });
  canvas.setGuideLine(true, {
    limit: 1,             // 限制辅助线条数
    theme: {
      lineColor: 'red',   // 网格线条颜色
      lineWidth: 3,       // 网格粗细
    }
  });
  canvas.draw(flowData);
  canvas.on("events", data => {
    let { type } = data;
    
    let f = pipelineEvents[type];
    console.log(type,f)
    if (f) {
      f.bind(this)(data,rooter);
    }
  });
  return canvas;
}
