jQuery(document).ready(function($){

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var totalScore = 0

// function toggleDiv() {
//     setTimeout(function () {
//         $(".item").hide();
//         setTimeout(function () {
//             $(".item").show();
//             toggleDiv();
//         }, 1000);
//     }, 1000);
// }
// toggleDiv(); 

function changeColor (){
	$('#item, #item2,#item3, #item4, #item5, #item6, #item7, #item7, #item8, #item9, #item10, #item11').each(function() {

    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
	});
}

$('#item').on('click', function(){
		totalScore ++
    $('#item').hide();
    $('#cunt').html(totalScore);
  });

$('#item2').on('click', function(){

    $('#item2').hide();
  });

$('#item3').on('click', function(){

    $('#item3').hide();
  });

$('#item4').on('click', function(){

    $('#item4').hide();
  });

$('#item5').on('click', function(){

    $('#item5').hide();
  });

$('#item6').on('click', function(){

    $('#item6').hide();
  });

$('#item7').on('click', function(){

    $('#item7').hide();
  });

$('#item8').on('click', function(){

    $('#item8').hide();
  });

$('#item9').on('click', function(){

    $('#item9').hide();
  });

$('#item10').on('click', function(){

    $('#item10').hide();
  });

$('#item11').on('click', function(){

    $('#item11').hide();
  });

 setInterval(function() {
 	// $(".item").animate({"colors":1000})
 	changeColor()
 	console.log ("working")
 }, 4000);


























	

// 1. Page loads *
// 2. Balloon appears*
// 3. Balloon dissapears after some time*
// 4. click event on Balloon*
// 5.balloons have color/score*
// 6.on clickm get score balloon
// 7. add score to total
// 8.balloon position is random
// 9. balloon color is random
// 10.timer
// 11.alert score
});
