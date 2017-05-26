jQuery(document).ready(function($){

	$('#start-game').click(function(){
iniTime(); 

showImg(); 

setInterval(function() { // timer for the balls to change color.
 		changeColor()
		console.log ("working")
 }, 2000);	
	});

	var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple']; // array of colours I want the balls be randomized through
	var totalScore = 0 // score to start at 0 
	var counter = 22; //counter to start at 20 secs

animateDiv(); //calling the animation which runs the positioning of the balls

function makeNewPosition(){ 
	var h = $(window).height() - 50;  //  }  height and width of how high/low the balls move
	var w = $(window).width() - 50;
	var nh = Math.floor(Math.random() * h); // } randomizes height and width of the balls
	var nw = Math.floor(Math.random() * w);

return [nh,nw];  
}

function animateDiv () {
    $('.balloon').each(function () {
	    var newq = makeNewPosition();
    		$(this).animate({ top: newq[0], left: newq[1] }, 3500, function () {   // function for the animation, speed is set to 3.5 seconds
      			animateDiv();   // animation function being called
  		});      
    });
    
};
	
function changeColor (){ 
	$('#item, #item2, #item3, #item4, #item5, #item6, #item7, #item7, #item8, #item9, #item10, #item11, #item12, #item13, #item14, #item15, #item16, #item17, #item18, #item19, #item20, #item21, #item22, #item23, #item24, #item25').each(function() {
			
	// #items being called at random then changing colours 'Math.floor(Math.random() * colors'.

		var newColor = colors[Math.floor(Math.random() * colors.length)]
    	$(this).css('background-color', newColor);
    	$(this).attr("data-color", newColor)
	});
}

function iniTime(){

	timer = setInterval(tick,1000);  // countdown timer every second '1000'

}
function tick () { 
   counter = counter -1; // minus 1 (-1) from the number which starts at 20. 
    $('#counter').html(counter);
    
    if(counter <= 0){
        clearInterval(timer); // clears the timer when it reaches '0'
        if(counter === 0) {
        	$('body').append('<h1 class="game-over">GAME OVER<h1>');
    	}

	}

}

$('.balloon').on('click', function() {
		var id = '#' + $(this).attr('id');
		var currentBalloon = $(this);

			console.log('id', id);
			console.log('background-color', $(id).css('background-color'));

				if (currentBalloon.attr("data-color") === "red") {
					totalScore -= 20
					currentBalloon.hide();
					}
				else if 
					(currentBalloon.attr("data-color") === "blue") {
					totalScore += 5
					currentBalloon.hide();
					console.log('this', $(this).css('background-color'));
				}
				else if 
					(currentBalloon.attr("data-color") === "green") {
					totalScore += 5
					currentBalloon.hide();
					console.log('this', $(this).css('background-color'));
				}
				else if 
					(currentBalloon.attr("data-color") === "purple") {
					totalScore += 15
					currentBalloon.hide();
				}
				else if 
					(currentBalloon.attr("data-color") === "orange") {
					totalScore += 10
					currentBalloon.hide();
					console.log('this', $(this).css('background-color'));
					// points being specified when being clicked on by the user

				} else {
					totalScore++; // if it's not a red balloon which is clicked then it adds 1 point to the users score
					$(id).hide();
				}
		$('#scoree').html(totalScore);

	});

function showImg () { // function for the gif image
	setTimeout(function() {
		$('.img').show(); // show the gif image after 10 seconds (10000= 10seconds)
	}, 18000);{
		$('.img').hide(); // hide after 5 seconds
	} 5000;
};	



	// else {
	// 	$('#item').css('background-color', 'green')
	// 	totalScore ++;
	// 	$('#item').hide();
	// 	$('#scoree').html(totalScore);

// $('.balloon').on('click', function(){
// 	$('.balloon').css('background-color', 'red')
// 	totalScore --;
// 	$('#item').hide();
// 	$('#scoree').html(totalScore);
// 	console.log("working")
// });

// $('#item2').on('click', function(){
// 	totalScore ++
//     $('#item2').hide();
//     $('#scoree').html(totalScore);
//  });

// $('#item3').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item3').hide();
//  });

// $('#item4').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item4').hide();
//  });

// $('#item5').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
//     $('#item5').hide();
//  });

// $('#item6').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
//     $('#item6').hide();
//   });

// $('#item7').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item7').hide();
//   });

// $('#item8').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item8').hide();
//   });

// $('#item9').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item9').hide();
//   });

// $('#item10').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item10').hide();
//   });

// $('#item11').on('click', function(){
// 	totalScore ++
// 	$('#scoree').html(totalScore);
// 	$('#item11').hide();
//   });

// changes the colour of the balls every second 


// 1. Page loads *
// 2. Balloon appears*
// 3. Balloon dissapears after some time*
// 4. click event on Balloon*
// 5.balloons have color/score
// 6.on click get score balloon*
// 7. add score to total*
// 8.balloon position is random*
// 9. balloon color is random*
// 10.timer*
// 11.alert score*
});
