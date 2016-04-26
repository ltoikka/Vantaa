
	
$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');
  var ctx = canvas.getContext('2d');

<<<<<<< Updated upstream
  var startScreen = true;
=======
  var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 

$('#play').click(playAudio)
$('#pause').click(pauseAudio)

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
>>>>>>> Stashed changes

  canvas.on('mouse:down', function() {
    canvas.isDrawingMode = true;
  }); //need solution for this.. a button or area where drawing

  canvas.on('path:created', function() {
    canvas.isDrawingMode = false;
    canvas.off('mouse:down');
  });

drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/04/03/10/00/stool-309589_960_720.png', 10);
drawItem(canvas, 'cattt.jpg', 130);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/44/table-575934_960_720.png', 250);
drawItem(canvas, 'curtainleft.png', 370);
drawItem(canvas, 'curtainright.png', 490);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/04/02/16/21/table-307005_960_720.png', 610);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/18/04/19/chair-36810_960_720.png', 730);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/47/sofa-576032_960_720.png', 850);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/49/bench-576130_960_720.png', 970);


canvas.setBackgroundImage('junanakyma1.png', canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 0,
    backgroundImageStretch: false
});



});