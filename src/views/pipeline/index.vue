<template>
  <div>
    <div class="bottom-container">
      <div id="itempannel" class="itempannel-new">
        <ul>
          <draggable @end="end" @start="move" v-model="buttons" :options="draggableOptions">
            <li class="getItem" v-for="btn in buttons"  data-shape="branch-html" :key="btn.value" :type="btn.value" data-type="node" data-size="170*34">
              <span class="pannel-type-icon"></span>{{btn.text}}
            </li>
          </draggable>
          <li class="getItem"   data-shape="branch-html"  data-type="node"  key='justifyCoordinate' data-size="170*34" @click="justifyCoordinate" >
              <span class="pannel-type-icon"></span>自动对齐
            </li>
            <li class="getItem"   data-shape="branch-html"  data-type="node"  key='reduceZoom' data-size="170*34" @click="reduceZoom" >
              <span class="pannel-type-icon"></span>缩小
            </li>
            <li class="getItem"   data-shape="branch-html"  data-type="node" key='addZoom' data-size="170*34" @click="addZoom" >
              <span class="pannel-type-icon"></span>放大
            </li>
             <li class="getItem"   data-shape="branch-html"  data-type="node" key='addZoom' data-size="170*34" @click="addNode" >
              <span class="pannel-type-icon"></span>添加节点
            </li>
        </ul> 
      </div>
      <div id="page" class="src-components-ScriptsProcessMng-___style__page___mBHJs">
        <div class="graph-container" style="position: relative;">
          <div id="canvas" class="butterfly-layout"></div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import draggable from 'vuedraggable'
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
  components: {
      draggable
  },
  data() {
    return {
      buttons:[{
        text:'分支节点',
        value:'1'
      },{
        text:'普通节点',
        value:'2'
      },{
        text:'功能节点',
        value:'3'
      }],
      currentData: this.data,
      instance: {},
      draggableOptions: {
          preventOnFilter: false,
          sort: false,
          disabled: false,
          ghostClass: 'tt',
          // 不使用H5原生的配置
          forceFallback: true,
          // 拖拽的时候样式
          // fallbackClass: 'flow-node-draggable'
      }
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
    // 拖拽开始时触发
    move(evt, a, b, c) {
      console.log(evt.item.attributes.type.nodeValue)
       console.log('move',evt, a, b, c)
        // var type = evt.item.attributes.type.nodeValue
        // this.nodeMenu = this.getMenuByType(type)
    },
    // 拖拽结束时触发
    end(evt, e) {
      console.log('end',evt, e)
        // this.$emit('addNode', evt, this.nodeMenu, mousePosition)
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
