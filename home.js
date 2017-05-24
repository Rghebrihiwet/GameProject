jQuery(document).ready(function($){

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];


function toggleDiv() {
    setTimeout(function () {
        $(".item").hide();
        setTimeout(function () {
            $(".item").show();
            toggleDiv();
        }, 9000);
    }, 9000);
}
toggleDiv(); 

$('.item').on('click', function(){
    $(".item").hide();
  });


$('.item').each(function() {
    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});

 setInterval(function() {
 	$(".item").animate({"colors":800})
 });




// var balloon_1 = new Image();
// balloon_1.src = '';

// var balloon_2 = new Image();
// balloon_2.src = '';

// var balloon_3 = new Image();
// balloon_3.src = '';

// var balloon_4 = new Image();
// balloon_4.src = ''

// var balloon_5 = new Image();
// balloon_5.src = '';

// var balloon_6 = new Image();
// balloon_6.src = '';

























	

// 1. Page loads
// 2. Balloon appears
// 3. Balloon dissapears after some time
// 4. click event on Balloon
// 5.balloons have color/score
// 6.on clickm get score balloon
// 7. add score to total
// 8.balloon position is random
// 9. balloon color is random
// 10.timer
// 11.alert score
});
