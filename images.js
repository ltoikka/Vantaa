
var drawItem = function(canvas, img, x) {
fabric.Image.fromURL(img, function(oImg) {
    oImg.scale(0.1).set({
      left: x,
      top: 535
    });
    canvas.add(oImg);
  });
};