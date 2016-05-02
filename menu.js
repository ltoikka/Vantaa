$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');
  var ctx = canvas.getContext('2d');

  fabric.Image.fromURL('cattt.jpg', function(oImg) {
    oImg.scale(0.1).set({
      left: 400,
      right: 80
    });
    canvas.add(oImg);
  });

   window.addEventListener("mousedown", function(e) {

    var rect = canvas.getBoundingClientRect();  // get element's abs. position
    var canvasX = event.clientX - rect.left;              // get mouse x and adjust for el.
    var canvasY = event.clientY - rect.top;               // get mouse y and adjust for el.
    //console.log("x:" + canvasX);
    //  console.log("y:" + canvasY);

      if((canvasX >= 400) (canvasX <= 450)& (canvasY >= 80) & (canvasY <= 130)) {
        startScreen=false
  this.game.state.start("peli");
      }
 
});