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
    $('<div class="text-box"></div>')
      .text(this.options.label)
      .appendTo(dom);
  }
  _createContent(dom = this.dom){
    $('<div class="content-box"></div>')
      .appendTo(dom);

    const branches = this.options.content.branches
    branches.forEach(item =>{
      // $(this.dom).find(".content-box").append($('<div class="content-box-item" id="'+item.branchId+'"></div>').text(item.branchName));
      $('<div class="content-box-item" id="'+item.branchId+'"></div>').text(item.branchName).appendTo($(dom).find(".content-box"));
    })
  }
  toggleClass(clasName) {
    $(this.dom).toggleClass(clasName);
  }
  toggleFocus() {
    $(this.dom)
      .find(".logo-toolbar")
      .toggleClass("show");
  }
  focus = () => {
    $(this.dom)
      .find(".logo-toolbar")
      .addClass("show");
  };
  unFocus = () => {
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
