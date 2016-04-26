	
$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(oImg);
  });

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(oImg);
  });
});
