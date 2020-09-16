// import BaseNode from "./pipeline/class/BaseNode";
import StartNode from "./pipeline/class/StartNode";
import SwitchNode from "./pipeline/class/SwitchNode";
import Edge from "./pipeline/class/Edge";
// import { Edge } from "butterfly-dag/pack/index.js";
// import Group from "./pipeline/class/Group";
// import endpoints from "./pipeline/utils/endpoints";
// import Endpoint from "./pipeline/class/Endpoint";
import { Endpoint } from "butterfly-dag/pack/index.js";
export default {
  nodes: [
    {
      id: "begin",
      label: "0.开始",
      type:'start',
      // iconClass: "deep-blue",
      // bgColor: "simple-blue",
      // iconType: "icon-kaifa",
      top: 200,
      left: 50,
      content: {
        branches: [{
          branchName: "发起对话",
          branchId: "5304d6d0-f3f3-11ea-bde5-a3e91035a468"
        }]
      },
      // group: "group",
      Class: StartNode,
      // draggable: false,
      endpoints: [{
        id: `5304d6d0-f3f3-11ea-bde5-a3e91035a468`,
        color: "green",
        orientation: [1, 0],
        pos: [0, 0.75],
        type:'source',
        Class: Endpoint
      }]
    },
    {
      id: "4c8ccc2c",
      label: "1.身份确认",
      type:'switch',
      // iconClass: "deep-blue",
      // bgColor: "simple-blue",
      // iconType: "icon-kaifa",
      top: 250,
      left:600,
      content: {
        branches: [{
          branchId: "51065cd0-f3f5-11ea-bde5-a3e91035a468",
          branchName: "是的"
        }, {
          branchId: "54d936c0-f3f5-11ea-bde5-a3e91035a468",
          branchName: "不是"
        }]
      },
      // group: "group",
      Class: SwitchNode,
      // draggable: false,
      endpoints: [{
        id: `4c8ccc2c-left`,
        color: "green",
        orientation: [-1, 0],
        pos: [0, 0.15],
        type:'target',
        Class: Endpoint
      },{
        id: `51065cd0-f3f5-11ea-bde5-a3e91035a468`,
        color: "green",
        orientation: [1, 0],
        pos: [0, 0.5],
        // limitNum: 1,   
        type:'source',
        Class: Endpoint
      },{
        id: `51065cd0-f3f5-11ea-bde5-a3e91035a468`,
        color: "green",
        orientation: [1, 0],
        pos: [0, 0.8],
        type:'source',
        Class: Endpoint
      }]
    },
    {
      id: "4c8ccc11",
      label: "2.自我介绍",
      type:'switch',
      // iconClass: "deep-blue",
      // bgColor: "simple-blue",
      // iconType: "icon-kaifa",
      top: 200,
      left:1200,
      content: {
        branches: [{
          branchId: "51065cd0-f3f5-11ea-bde5-a3e910351111",
          branchName: "你好,我是渠生网络智能客服"
        }]
      },
      // group: "group",
      Class: SwitchNode,
      // draggable: false,
      endpoints: [{
        id: `4c8ccc11-left`,
        color: "green",
        orientation: [-1, 0],
        pos: [0, 0.15],
        type:'target',
        Class: Endpoint
      },{
        id: `51065cd0-f3f5-11ea-bde5-a3e910351111`,
        color: "green",
        orientation: [1, 0],
        pos: [0, 0.5],
        type:'source',
        Class: Endpoint
      }]
    },
    {
      id: "4c8ccc22",
      label: "3.挂机",
      type:'switch',
      // iconClass: "deep-blue",
      // bgColor: "simple-blue",
      // iconType: "icon-kaifa",
      top: 400,
      left:1200,
      content: {
        branches: [{
          branchId: "51065cd0-f3f5-11ea-bde5-a3e910352222",
          branchName: "不好意思,再见"
        }]
      },
      // group: "group",
      Class: SwitchNode,
      // draggable: false,
      endpoints: [{
        id: `4c8ccc22-left`,
        color: "green",
        orientation: [-1, 0],
        pos: [0, 0.15],
        type:'target',
        Class: Endpoint
      },{
        id: `51065cd0-f3f5-11ea-bde5-a3e910352222`,
        color: "green",
        orientation: [1, 0],
        pos: [0, 0.5],
        type:'source',
        Class: Endpoint
      }]
    }
    // ,
    // {
    //   id: "build",
    //   label: "构建镜像",
    //   bgColor: "simple-yellow",
    //   iconClass: "orange",
    //   iconType: "icon-guanlian",
    //   // group: "group",
    //   // draggable: false,
    //   top: 500,
    //   left: 500,
    //   Class: BaseNode,
    //   // endpoints: endpoints("build")
    //   endpoints: [{
    //     id: `build-left`,
    //     color: "green",
    //     orientation: [0, 0.5],
    //     pos: [0, 0.5],
    //     type:'target',
    //     Class: Endpoint
    //   },{
    //     id: `right`,
    //     color: "green",
    //     orientation: [1, 0],
    //     pos: [0, 0.5],
    //     type:'source',
    //     Class: Endpoint
    //   }]
    // }
  ],
  edges: [
    {
      source: "5304d6d0-f3f3-11ea-bde5-a3e91035a468",
      target: "4c8ccc2c-left",
      sourceNode: "begin",
      targetNode: "4c8ccc2c",
      // label:'11111',
      type: "endpoint",
      // isExpandWidth: true,
      // arrowOffset:1,
      Class: Edge
    }
    // ,
    // {
    //   source: "51065cd0-f3f5-11ea-bde5-a3e91035a468",
    //   target: "build-left",
    //   sourceNode: "4c8ccc2c",
    //   targetNode: "build",
    //   label:'22222',
    //   type: "endpoint",
    //   // arrowOffset:1,
    //   Class: Edge
    // }
  ]
  // groups: [
  //   {
  //     id: "group",
  //     options: {
  //       title: ""
  //     },
  //     top: 100,
  //     left: 50,
  //     // width: "100%",
  //     // height: "800",
  //     // resize: false,
  //     Class: Group,
  //     resize: true
  //   }
  // ]
};
