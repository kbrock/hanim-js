function Ctx(ctx) {
  if(typeof(ctx) == "string") {
    var canvas = document.getElementById(ctx);
    ctx = canvas.getContext("2d");
  }
  this.ctx = ctx;
}

Ctx.prototype = {
  color: function(fill, stroke, width) {
    this.ctx.beginPath();
    if(fill !== undefined) {
      this.ctx.fillStyle = fill;
      this.fill = (fill !== "");
    }
    if(stroke !== undefined) {
      this.ctx.strokeStyle = stroke;
      this.stroke = (stroke !== "");
    }
    if(width) {
      this.ctx.lineWidth = width;
    }
    return this;
  },
  draw: function() {
    if (this.fill)
      this.ctx.fill();
    if (this.stroke)
      this.ctx.stroke();
    return this;
  },
  cir: function(pt,r, start, end, opaque) {
    if (opaque === undefined) {
      opaque = true;
    }
    // (x,y) center, radius, start angle, end angle, anticlockwise
    this.ctx.arc(pt.x, pt.y, r, (start || 0) * Math.PI, (end || 2) * Math.PI, opaque);
    this.draw();
    return this;
  },
  go: function(pt) {
    this.ctx.moveTo(pt.x, pt.y);
    return this;
  },
  line: function() {
    for (var i = 0; i < arguments.length; i++) {
      this.ctx.lineTo(arguments[i].x, arguments[i].y);
    }
    return this.draw();
  }
};

function Transpose(attrs) {
  this.attrs = attrs;
}

Transpose.prototype = {
  t: function(obj) {
    var ret = {};
    for (var k in obj) {
      ret[k] = obj[k];
    }
    for (k in this.attrs) {
      if (ret[k] !== undefined) {
        ret[k] += this.attrs[k];
      }
    }
    return ret;
  },
  flip: function(obj, f) {
    f = f || ['x'];
    var ret = {};
    for (var k in obj) {
      ret[k] = obj[k];
    }
    for (var i = 0; i < f.length ; i++) {
      k = f[i];
      if (ret[k] !== undefined)
        ret[k] = - ret[k] + 2 * this.attrs[k];
    }
    return obj;
  }
};
