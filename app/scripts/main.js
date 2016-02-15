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

function play(){
    var speed = 200;
    var times = 4;
    var items = $('.square');
    function mix() {
        var pos = [0,100,200]

        pos1 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0]
        pos2 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0]
        pos3 = pos.splice(pos.indexOf( pos[Math.floor(Math.random()*pos.length)] ), 1)[0]

        items.eq(0).animate({top: pos3}).animate({ top:0 ,left: pos1 }, speed);
        items.eq(1).animate({top: pos2}).animate({ top:0 ,left: pos2 }, speed);
        items.eq(2).animate({top: pos1}).animate({ top:0 ,left: pos3 }, speed, function(){
            if(times>0) mix();
            times--;
        });

    };

    $('.ball').animate({
        left: $(items[Math.floor(Math.random()*items.length)]).addClass('choosen').position().left,
        top: 0
    }, 2000, function(){ $(this).hide(); mix(); });

    items.click(function(){
        if($(this).hasClass('choosen')) alert('You won');
        else alert('You lost');
    });

}
