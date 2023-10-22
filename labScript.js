$(function () {
    $('#identify').on('submit', function (evnt) {
      evnt.preventDefault();
      fName();
      backgColor();
      fSize();

    });
  })
  

function backgColor(){ 
let backgroundC = $('#background-C').val();
$('body').css('background-color', backgroundC);

}




function fName(){ 
let fName = $('#fName').val();
$('#solution').append(fName);
let fontSize = 40;
$('#solution').css('font-size', fontSize);
let color = 'orange'
$('#solution').css('color', color);

 
    
 }


 function fSize() {
    let fSize = $('#fonSize').val();
    let result = $('#bigchange');
    result.css('font-size', fSize + 'pt');

    
  }







