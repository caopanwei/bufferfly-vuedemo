import { Node } from "butterfly-dag/pack/index.js";
import $ from "jquery";

class SwitchNode extends Node {
  constructor(opts) {
    console.log('SwitchNode',opts)
    super(opts);
    this.options = opts;
  }
  draw = opts => {
    console.log('SwitchNode',opts)
    let classed = ["pipeline-start-node"];
    if (this.options.bgColor) {
      classed.push(`path-bg-${this.options.bgColor}`);
    }
    if (this.options.className) {
      classed.push(`path-bg-${this.options.className}`);
    }
    let container = $(`<div class="${classed.join(" ")}"></div>`)
      .attr("id", opts.id)
      .css("top", opts.top + "px")
      .css("left", opts.left + "px");

    this._createText(container);
    this._createContent(container);
    return container[0];
  };
  _createText(dom = this.dom) {
    const boxContainer = $('<div class="node-title-box"></div>');
    boxContainer.append($('<div class="node-title-text-box">'+this.options.label+'</div>'));
    const nodeTitleButtonBox = $('<div class="node-title-button-box"></div>');
    const nodeTitleEditBtn = $('<i class="iconfont icon-icon-test" ></i>');
    nodeTitleButtonBox.append(nodeTitleEditBtn);
    nodeTitleButtonBox.append($('<i class="iconfont icon-icon_huabanfuben"></i></div>'));
    boxContainer.append(nodeTitleButtonBox);
    boxContainer.appendTo($(dom));
    var that = this;
    nodeTitleEditBtn.on("click", function(event) {
      console.log('event',event)
      that.$emit('fatherMethod', 'hello');
      event.stopPropagation();
    });
  }
  editNode(o){
    console.log('editNode-------',o)
  }
  _createContent(dom = this.dom){
    $('<div class="node-content-box"></div>')
      .appendTo(dom);

    const branches = this.options.content.branches
    branches.forEach(item =>{
      // $(this.dom).find(".content-box").append($('<div class="content-box-item" id="'+item.branchId+'"></div>').text(item.branchName));
      $('<div class="node-content-box-item" id="'+item.branchId+'"></div>').text(item.branchName).appendTo($(dom).find(".node-content-box"));
    })
  }
  toggleClass(clasName) {
    var state = $(this.dom).hasClass(clasName);
    if(!state){
      $('.butterfly-wrapper').find("."+clasName).removeClass(clasName);
    }
    $(this.dom).toggleClass(clasName);
  }
  toggleFocus() {
    // $('.butterfly-wrapper').find(".focus").removeClass('focus');
    // $(this.dom).addClass('focus');
  }
  focus = () => {
    console.log('focus')
    $(this.dom)
      .find(".logo-toolbar")
      .addClass("show");
  };
  unFocus = () => {
    console.log('unFocus')
    $(this.dom)
      .find(".logo-toolbar")
      .removeClass("show");
  };
  clickTools(name) {
    this.emit("events", {
      type: "node:click:tools",
      node: this,
      name
    });
  }
}

export default SwitchNode;
