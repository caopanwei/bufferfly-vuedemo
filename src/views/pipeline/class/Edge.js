import { Edge } from "butterfly-dag/pack/index.js";
import $ from "jquery";

class BaseEdge extends Edge {
  draw(obj) {
    let path = super.draw(obj);

    var _this3 = this;
    $(this.eventHandlerDom).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this3.emit('system.link.click', {
        edge: _this3
      });

      _this3.emit('events', {
        type: 'link:click',
        edge: _this3
      });

      _this3.emit('InnerEvents', {
        type: 'link:click',
        data: _this3
      });
    });

    if (this.options.color) {
      $(path).addClass(`path-link-${this.options.color}`);
    } else {
      $(path).addClass(`path-link-default`);
    }
    return path;
  }
  redraw(sourcePoint, targetPoint, options){
    let path = super.redraw(sourcePoint, targetPoint, options);

    // var _this3 = this;
    // $(this.eventHandlerDom).on('click', function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   _this3.emit('system.link.click', {
    //     edge: _this3
    //   });

    //   _this3.emit('events', {
    //     type: 'link:click',
    //     edge: _this3
    //   });

    //   _this3.emit('InnerEvents', {
    //     type: 'link:click',
    //     data: _this3
    //   });
    // });
    return path;
  }
  // drawArrow(isShow) {
  //   let dom = super.drawArrow(isShow);
  //   if (this.options.color) {
  //     $(dom).addClass(`path-arrow-${this.options.color}`);
  //   } else {
  //     $(dom).addClass(`path-arrow-default`);
  //   }
  //   return dom;
  // }
  // drawLabel(text) {
  //   let dom = null;
  //   if (text) {
  //     dom = $(`<span class="pipeline-label">${text}</span>`)[0];
  //   }
  //   return dom;
  // }
  toggleClass(clasName) {
    $(this.dom).toggleClass(clasName);
  }
}
export default BaseEdge;
