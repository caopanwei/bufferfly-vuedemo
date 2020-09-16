<template>
  <div>
    
  </div>
  
</template>
<script>
import init from "./utils/render";
import SwitchNode from "./class/SwitchNode";
import { Endpoint } from "butterfly-dag/pack/index.js";
export default {
  name: "pipeline",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      currentData: this.data,
      instance: {}
    };
  },
  methods: {
    init,
    redraw() {
      // this.instance.drageReDraw({
      //   rankdir: "RB",
      //   align: "DR",
      //   nodesep: 30,
      //   ranksep: 40,
      //   controlPoints: false
      // });
    },
    justifyCoordinate(){
      console.log('this.instance.justifyCoordinate()')
      this.instance.justifyCoordinate();
      // this.instance.zoom(0.5);
    },
    addZoom(){
      this.instance.zoom(this.instance.getZoom()+0.1);
    },
    reduceZoom(){
      this.instance.zoom(this.instance.getZoom()-0.1);
    },
    addNode(){
      this.instance.addNode({
        id: "4c8ccc33",
        label: "4.不知道",
        type:'switch',
        // iconClass: "deep-blue",
        // bgColor: "simple-blue",
        // iconType: "icon-kaifa",
        top: 800,
        left:1200,
        content: {
          branches: [{
            branchId: "51065cd0-f3f5-11ea-bde5-a3e910333333",
            branchName: "不好意思,再见"
          }]
        },
        // group: "group",
        Class: SwitchNode,
        // draggable: false,
        endpoints: [{
          id: `4c8ccc33-left`,
          color: "green",
          orientation: [-1, 0],
          pos: [0, 0.15],
          type:'target',
          Class: Endpoint
        },{
          id: `51065cd0-f3f5-11ea-bde5-a3e910333333`,
          color: "green",
          orientation: [1, 0],
          pos: [0, 0.5],
          type:'source',
          Class: Endpoint
        }]
      });
    }
  },
  mounted() {
    this.instance = this.init(this.currentData);
  }
}
</script>
