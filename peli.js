$(document).ready( function() { 

  var canvas = new fabric.Canvas('c');
  var ctx = canvas.getContext('2d');

  var audio = document.getElementById("myAudio"); 

  function playAudio() { 
    audio.play(); 
  } 

  function pauseAudio() { 
    audio.pause(); 
  } 


  var setToFalse = function() {
    canvas.isDrawingMode = false;
  };


  //var color = black;

  function front(e) {
  e.target.bringToFront();
  }

  canvas.on({
  'object:moving': front,
  });

  $('#play').click(playAudio);
  $('#pause').click(pauseAudio);
  $('#stopDrawing').click(setToFalse);
  
  $("#delete").click(function(){
    deleteObjects();
  });

  $("#hide").click(function(){
      $("#hide").remove();
      $(".menu").remove();
      canvas.setBackgroundImage('junanakyma3.png', canvas.renderAll.bind(canvas), {
      backgroundImageOpacity: 0,
      backgroundImageStretch: false
  });
      });
  $('#scene1').click(scene1)
  $('#scene2').click(scene2)
  $('#blankScene').click(blankScene)
  function scene1 () {
    canvas.setBackgroundImage('junanakyma1.png', canvas.renderAll.bind(canvas), {
      backgroundImageOpacity: 0,
      backgroundImageStretch: false
    });
  }

  function scene2 () {
    canvas.setBackgroundImage('junanakyma2.png', canvas.renderAll.bind(canvas), {
      backgroundImageOpacity: 0,
      backgroundImageStretch: false
    });
  }

function blankScene () {
  canvas.setBackgroundImage('junanakyma3.png', canvas.renderAll.bind(canvas), {
      backgroundImageOpacity: 0,
      backgroundImageStretch: false
    });
}

  function deleteObjects(){
    var activeObject = canvas.getActiveObject(),
      activeGroup = canvas.getActiveGroup();
      if (activeObject) {
              canvas.remove(activeObject);
      }
      else if (activeGroup) {
              var objectsInGroup = activeGroup.getObjects();
              canvas.discardActiveGroup();
              objectsInGroup.forEach(function(object) {
              canvas.remove(object);
              });
      }
  }


function clone(){

    var copiedObject = null;

    if(canvas.getActiveGroup()){
        window.alert("You can only select one object to copy at a time");                 
    }
    else if(canvas.getActiveObject()){
        var object = fabric.util.object.clone(canvas.getActiveObject());
        object.set("top", object.top+5);
        object.set("left", object.left+5);
        copiedObject = object;
    }

    if(copiedObject){
        canvas.add(copiedObject);
        canvas.renderAll();
    }      
}


 $('#clone').click(clone);
 $('#black').click(function(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'black';
  });
  $('#red').click(function(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'red';
  });
  $('#blue').click(function(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'blue';
  });
  $('#green').click(function(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'green';
  });
  $('#yellow').click(function(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = 'yellow';
  });



drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/04/03/10/00/stool-309589_960_720.png', 10, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/41/light-575849_960_720.png', 110, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/44/table-575934_960_720.png', 210, 535);
drawItem(canvas, 'curtainleft.png', 310, 535);
drawItem(canvas, 'curtainright.png', 410, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/04/02/16/21/table-307005_960_720.png', 510, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/18/04/19/chair-36810_960_720.png', 610, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/47/sofa-576032_960_720.png', 710, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/49/bench-576130_960_720.png', 10, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/52/lamp-576217_960_720.png', 110, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/26/18/48/sofa-42818_960_720.png', 210, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/40/bedroom-bench-575811_960_720.png', 310, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/47/couch-576034_960_720.png', 710, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/12/18/armchair-145522_960_720.png', 610, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/52/lamp-576218_960_720.png', 510, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/13/16/43/bookshelf-32811_960_720.png', 410, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/22/00/05/lamp-576771_960_720.png', 310, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/47/sofa-576030_960_720.png', 210, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/03/25/16/28/table-297193_960_720.png', 110, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/13/11/26/furniture-158162_960_720.png', 10, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/13/56/colour-147601_960_720.png', 410, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/13/54/chair-147555_960_720.png', 510, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/39/chair-575783_960_720.png', 710, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/13/54/easychair-147553_960_720.png', 610, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/40/chairs-575817_960_720.png', 510, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/52/lamp-576221_960_720.png', 410, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/15/00/hat-stand-149217_960_720.png', 310, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/14/28/flowerpot-148267_960_720.png', 210, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/13/13/24/leaves-160960_960_720.png', 110, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/03/24/13/51/blinds-294613_960_720.png', 10, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/46/american-gothic-576023_960_720.png', 610, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/46/paintings-576027_960_720.png', 710, 935);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/48/shelf-576088_960_720.png', 710, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/28/shelf-575409_960_720.png', 610, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/50/stool-576149_960_720.png', 510, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/11/17/09/bench-28979_960_720.png', 410, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/14/13/30/seat-33941_960_720.png', 310, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/40/theater-575816_960_720.png', 210, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/52/lamp-576224_960_720.png', 110, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/13/14/32/chair-32631_960_720.png', 10, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2013/07/12/13/19/screen-146824_960_720.png', 810, 835);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/04/03/10/29/interactive-board-310637_960_720.png', 810, 735);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/11/12/39/monitor-28017_960_720.png', 810, 635);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2012/04/11/18/33/lcd-29306_960_720.png', 810, 535);
drawItem(canvas, 'https://pixabay.com/static/uploads/photo/2014/12/21/23/46/wall-576024_960_720.png', 810, 935);

//Background drawing//

canvas.setBackgroundImage('junanakyma3.png', canvas.renderAll.bind(canvas), {
  
});



});
