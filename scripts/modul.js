// carousel in header

$('.carousel').carousel({
  interval: 2000
})

// cube

var cube = document.getElementById('cube');
var cubeText = cube.getContext('2d');
cubeText.beginPath();
cubeText.moveTo(50,0);	//начало
cubeText.lineTo(100,50);	//1 точка
cubeText.lineTo(50,100);	//2 точка
cubeText.lineTo(0,50);		//3 точка
cubeText.fillStyle='#ff6600';		
cubeText.fill();

$('#cube').hover( function() {
    cubeText.fillStyle = 'white';
    cubeText.fill();
},
function() {
    cubeText.fillStyle = '#ff6600';
    cubeText.fill();         
});


var triangleRight = document.getElementById('triangleRight');
var triangleRightWhite = triangleRight.getContext('2d');
triangleRightWhite.beginPath();
triangleRightWhite.moveTo(0,0);	//начало
triangleRightWhite.lineTo(25,25);	//1 точка
triangleRightWhite.lineTo(0,50);	//2 точка
triangleRightWhite.fillStyle='#fff';
triangleRightWhite.fill();


var triangleLeft = document.getElementById('triangleLeft');
var triangleLeftWite = triangleLeft.getContext('2d');
triangleLeftWite.beginPath();
triangleLeftWite.moveTo(75,50);	//начало
triangleLeftWite.lineTo(100,75);	//1 точка
triangleLeftWite.lineTo(100,25);	//2 точка
triangleLeftWite.fillStyle='#ffffff';		
triangleLeftWite.fill();

var triangleRight = document.getElementById('triangleRightOne');
var triangleRightWhite = triangleRight.getContext('2d');
triangleRightWhite.beginPath();
triangleRightWhite.moveTo(0,0);	//начало
triangleRightWhite.lineTo(25,25);	//1 точка
triangleRightWhite.lineTo(0,50);	//2 точка
triangleRightWhite.fillStyle='#ffffff';		
triangleRightWhite.fill();


var triangleLeft = document.getElementById('triangleLeftOne');
var triangleLeftWite = triangleLeft.getContext('2d');
triangleLeftWite.beginPath();
triangleLeftWite.moveTo(75,50);	//начало
triangleLeftWite.lineTo(100,75);	//1 точка
triangleLeftWite.lineTo(100,25);	//2 точка
triangleLeftWite.fillStyle='#ffffff';		
triangleLeftWite.fill();

var triangleRight = document.getElementById('triangleRightTwo');
var triangleRightWhite = triangleRight.getContext('2d');
triangleRightWhite.beginPath();
triangleRightWhite.moveTo(0,0);	//начало
triangleRightWhite.lineTo(25,25);	//1 точка
triangleRightWhite.lineTo(0,50);	//2 точка
triangleRightWhite.fillStyle='#ffffff';		
triangleRightWhite.fill();


var triangleLeft = document.getElementById('triangleLeftTwo');
var triangleLeftWite = triangleLeft.getContext('2d');
triangleLeftWite.beginPath();
triangleLeftWite.moveTo(75,50);	//начало
triangleLeftWite.lineTo(100,75);	//1 точка
triangleLeftWite.lineTo(100,25);	//2 точка
triangleLeftWite.fillStyle='#ffffff';		
triangleLeftWite.fill();

var triangleRight = document.getElementById('triangleRightThree');
var triangleRightWhite = triangleRight.getContext('2d');
triangleRightWhite.beginPath();
triangleRightWhite.moveTo(0,0);	//начало
triangleRightWhite.lineTo(25,25);	//1 точка
triangleRightWhite.lineTo(0,50);	//2 точка
triangleRightWhite.fillStyle='#ffffff';		
triangleRightWhite.fill();


var triangleLeft = document.getElementById('triangleLeftThree');
var triangleLeftWite = triangleLeft.getContext('2d');
triangleLeftWite.beginPath();
triangleLeftWite.moveTo(75,50);	//начало
triangleLeftWite.lineTo(100,75);	//1 точка
triangleLeftWite.lineTo(100,25);	//2 точка
triangleLeftWite.fillStyle='#ffffff';		
triangleLeftWite.fill();

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');