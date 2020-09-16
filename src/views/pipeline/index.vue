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
  },
  mounted() {
    this.instance = this.init(this.currentData);
  }
}
</script>
