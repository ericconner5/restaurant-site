import css from 'uikit/dist/css/uikit.css';
import './sass/styles.scss';
import $ from 'jquery';

import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

UIkit.use(Icons);
UIkit.notification('Hello, friend... Play with me.');


// Perspective Logic Below

var container = document.getElementById('container');
var inner = document.getElementById('inner');

var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}

mouse.setOrigin(container);

var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/.1).toFixed(.1),
    (mouse.x / inner.offsetWidth/.1).toFixed(.1)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
};

// Document Logic
// trying to get class changed to target under here. needs helppppppp
$(document).ready(function(){
  var swap = function() {
  var src =  $(this).attr('src');
  return src;
  console.log(src);

  }

  $("img").click(function(swap){


    // var src = $(this).attr('src')



  })
})
