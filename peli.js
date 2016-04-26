
	
$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');
  var ctx = canvas.getContext('2d');

  fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/04/03/10/00/stool-309589_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 10,
      top: 535,
      angle: 0,
      opacity: 1
    });
    canvas.add(oImg);
  });

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.scale(0.1).set({
      left: 130,
      top: 535,
      angle: 0,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/12/21/23/44/table-575934_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 250,
      top: 535,
      angle: 0,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('curtainleft.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 370,
      top: 535,
      angle: 0,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('curtainright.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 490,
      top: 535,
      angle: 0,
      opacity: 1
    });
    canvas.add(oImg);
  });


fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/04/02/16/21/table-307005_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2012/04/18/04/19/chair-36810_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/12/21/23/47/sofa-576032_960_720.png', function(oImg) {
    oImg.scale(0.1).set({
      left: 100,
      top: 100,
      angle: 30,
      opacity: 1
    });
    canvas.add(oImg);
  });

fabric.Image.fromURL('https://pixabay.com/static/uploads/photo/2014/12/21/23/49/bench-576130_960_720.png', function(oImg) {
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