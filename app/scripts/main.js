// Global variables
var speed = 200;
var times = 4;
var items = $('.square');
var pos1,pos2,pos3;

// function to enable smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function mix() {
    var pos = [0,200,400];
    // Math.random()*4 to get values from 0 to 3
    // Math.floor to round off to nearest integer.
    // indexOf to get
    pos1 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0];
    pos2 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0];
    pos3 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0];

    items.eq(0).animate({top: pos3}).animate({ top:0 ,left: pos1 }, speed);
    items.eq(1).animate({top: pos2}).animate({ top:0 ,left: pos2 }, speed);
    items.eq(2).animate({top: pos1}).animate({ top:0 ,left: pos3 }, speed, function(){
        if(times>0) mix();
        times--;
    });
}

function play(){
    $('.ball').animate({
        left: $(items[Math.floor(Math.random()*items.length)]).addClass('chosen').position().left,
        top: 0
    }, 2000, function(){ $(this).hide(); mix(); });

    items.click(function(){
        if($(this).hasClass('chosen')){
            alert('Congratulations! You won! Try again? :)');
            times = 4;
        }else {
            alert('You lost! Good Luck next time! :D');
            times = 4;
        }

        $('#instructions').html("Try again!");
        $('.ball').show().animate({
            left: 0,
            top: 200,
        }, 2000);
    });

}
