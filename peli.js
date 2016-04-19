	
$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(oImg);
  });
});
