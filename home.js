jQuery(document).ready(function($){




var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var totalScore = 0
var counter = 21;

animateDiv(); //calling the animation which runs the positioning of the balls

function makeNewPosition(){ 
    
    var h = $(window).height() - 50;  //  }  height and width of how high/low the balls move
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h); // } randomizes the position of the balls
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv () {
    $('.balloon').each(function () {
	    var newq = makeNewPosition();
    		$(this).animate({ top: newq[0], left: newq[1] }, 3500, function () {
      			animateDiv();  
  		});      
    });
    
};

function changeColor (){
	$('#item, #item2,#item3, #item4, #item5, #item6, #item7, #item7, #item8, #item9, #item10, #item11, #item12, #item13, #item14, #item15, #item16, #item17, #item18, #item19, #item20, #item21, #item22, #item23, #item24, #item25').each(function() {

    	$(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
	});
}

function decTime(){

	timer = setInterval(tick,1000);

}
function tick () {
   counter = counter -1;
    $('#counter').html(counter);
    
    if(counter <= 0){
        clearInterval(timer);
        if(counter === 0) {
    	}

	}

}

decTime();

$('.balloon').on('click', function() {
	var id = '#' + $(this).attr('id');
	console.log('id', id);
	console.log('background-color', $(id).css('background-color'));
	if($(id).css('background-color') === 'rgb(255, 0, 0)') {
		totalScore --;
		$(id).hide();
		$('#scoree').html(totalScore);
		console.log('this', $(this).css('background-color'));
	} else {
		totalScore++;
		$(id).hide();
		$('#scoree').html(totalScore);
	}
});


function showImg () {
	setTimeout(function() {
		$('.img').show();
	}, 10000);{
		$('.img').hide();
	} 5000;
};	

showImg();


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

setInterval(function() {
 	// $(".item").animate({"colors":1000})
 	changeColor()
 	console.log ("working")
 	 }, 3000);	

// 1. Page loads *
// 2. Balloon appears*
// 3. Balloon dissapears after some time*
// 4. click event on Balloon*
// 5.balloons have color/score
// 6.on click get score balloon*
// 7. add score to total*
// 8.balloon position is random
// 9. balloon color is random*
// 10.timer
// 11.alert score
});
