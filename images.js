var drawItem = function(canvas, img, x, y) {
fabric.Image.fromURL(img, function(oImg) {
    oImg.scale(0.1).set({
      left: x,
      top: y
    });
    canvas.add(oImg);
  });
};