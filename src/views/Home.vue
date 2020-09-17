<template>
  <div class="home">

    <div class="bottom-container">
      <div id="itempannel" class="itempannel-new">
        <ul>
          <draggable @end.stop="end" @start.stop="move"  :options="draggableOptions">
            <li class="getItem" style="cursor:crosshair"  data-shape="branch-html" key="1" type="1" data-type="node" data-size="170*34">
              <span :class="`iconfont icon-fenzhi`"></span>分支节点
            </li>
            <li class="getItem"  style="cursor:crosshair" data-shape="branch-html" key="2" type="2" data-type="node" data-size="170*34">
              <span :class="`iconfont icon-putong`"></span>普通节点
            </li>
            <li class="getItem" style="cursor:crosshair" data-shape="branch-html" key="3" type="3" data-type="node" data-size="170*34">
              <span :class="`iconfont icon-gongneng`"></span>功能节点
            </li>
          </draggable>
          <li class="getItem"  style="cursor:default"  data-shape="branch-html"  data-type="node"  key='justifyCoordinate' data-size="170*34" @click="justifyCoordinate" >
              <span class="pannel-type-icon"></span>自动对齐
            </li>
            <li class="getItem"  style="cursor:default" data-shape="branch-html"  data-type="node"  key='reduceZoom' data-size="170*34" @click="reduceZoom" >
              <i class="iconfont icon-suoxiao"></i>缩小
            </li>
            <li class="getItem"  style="cursor:default" data-shape="branch-html"  data-type="node" key='addZoom' data-size="170*34" @click="addZoom" >
              <span class="iconfont icon-fangda"></span>放大
            </li>
             <li class="getItem"  style="cursor:default" data-shape="branch-html"  data-type="node" key='addNode' data-size="170*34" @click="addNode" >
              <span class="iconfont icon-tianjia"></span>添加节点
            </li>
        </ul> 
      </div>
      <div id="page" class="src-components-ScriptsProcessMng-___style__page___mBHJs">
        <div class="graph-container" style="position: relative;">
          <div   class="butterfly-layout"></div>
        </div>
      </div>
    </div>
    <pipeline id="canvas" ref="canvas" class="canvas-container" :data="data"></pipeline>
    <!-- <button
      style="position:absolute;top:20px;right:20px;z-index:111;"
      @click="reDraw"
    >
      reDraw
    </button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import mockData from "./data.js";
import pipeline from "./pipeline/index.vue";
import draggable from 'vuedraggable'


export default {
  components: {
    pipeline,draggable
  },
  name: "Home",
  data() {
    return {
      data: mockData,
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
    reDraw() {
      this.$refs.canvas.redraw();
    },
       // 拖拽开始时触发
    move(evt, a, b, c) {
      console.log(evt.item.attributes.type.nodeValue)
       console.log('move',evt, a, b, c)
      //  evt.originalEvent.stopPropagation();//终止事件冒泡
        // var type = evt.item.attributes.type.nodeValue
        // this.nodeMenu = this.getMenuByType(type)
    },
    // 拖拽结束时触发
    end(evt, e) {
      console.log('end',evt, e)
        // this.$emit('addNode', evt, this.nodeMenu, mousePosition)
    },
    justifyCoordinate(){
      this.$refs.canvas.justifyCoordinate();
    },
    addZoom(){
      this.$refs.canvas.addZoom();
    },
    reduceZoom(){
      this.$refs.canvas.reduceZoom();
    },
    addNode(){
      this.$refs.canvas.addNode();
    },
    editNode(o){
      console.log('editNode',o)
    }
  }
};
</script>
// <style lang="stylus" scoped>
// .home{
//  height:100vh;
//  width:100vw;
// }
// </style>
