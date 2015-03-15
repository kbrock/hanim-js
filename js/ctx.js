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
  cir: function(x,y,r, start, end, opaque) {
    if (opaque === undefined) {
      opaque = true;
    }
    // (x,y) center, radius, start angle, end angle, anticlockwise
    this.ctx.arc(x, y, r, (start || 0) * Math.PI, (end || 2) * Math.PI, opaque);
    this.draw();
    return this;
  },
  go: function(x, y) {
    this.ctx.moveTo(x, y);
    return this;
  },
  line: function() {
    for (var i = 0; i < arguments.length;) {
      this.ctx.lineTo(arguments[i++], arguments[i++]);
    }
    return this.draw();
  }
};
