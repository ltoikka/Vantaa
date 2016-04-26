
	
$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');
  var ctx = canvas.getContext('2d');

  fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/04/03/10/00/stool-309589_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 1
    });
    canvas.add(oImg);
  });

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 1
    });
    canvas.add(oImg);
  });


canvas.setBackgroundImage('junanakyma1.png', canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 0,
    backgroundImageStretch: false
});

});