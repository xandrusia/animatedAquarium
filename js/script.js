//movement behaviour of blue fish

function moveToRandomPlace(idRef)
{
    var width = getRandomVal(0, $(document).width()-100);
    var height = getRandomVal(0, $(document).height()-100);
    $(idRef).animate({left:width, top:height})
};

function getRandomVal(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

$("#fish2Id").hover(function()
{
    $(this).stop(true);
    moveToRandomPlace($(this));
    bothFishes("#fish2Id", 7000)
});


// orange fish behaviour on double click

$("#fish1Id").dblclick(function()
{
    $(this).stop(true).animate({height: 500, width:450})
    setTimeout(function()
    {
        $("#fish1Id").animate({height: 250, width:260});
    }, 3000); 
});

// orange fish behaviour on click

$(document).click(function(event)
{
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({left: event.pageX-250, top: event.pageY-250});
    bothFishes("#fish1Id", 6000); 
})

// bubbles behaviour

function MovingBubbles(idRef, howFast)
{
    var width, height;
    width = getRandomVal(0, $(document).width()-130);
    height = $(document).height()+130;
    $(idRef).offset({left:width, top:height});

    $(idRef).animate({left:width, top:-130}, howFast, function()
    {
        MovingBubbles(idRef, howFast)
    });
}
$(document).ready(function()
{
    MovingBubbles("#bubble1Id", 4000)
});

$(document).ready(function()
{
    MovingBubbles("#bubble2Id", 7000)
});

$(document).ready(function()
{
    MovingBubbles("#bubble3Id", 9000)
});

// fading the bubbles out

function fadingBubbles(idRef, howFast)
{
 $(idRef).stop(true);
   MovingBubbles(idRef, howFast);
}

// fading the bubbles out on a click

$(".bubbleClass").click(function()
{
    fadingBubbles($(this), 9000)
});


//both fishes behaviour

function bothFishes(idRef, howFast)
{
    var width, height;
    width = getRandomVal(0, $(document).width()-150);
    height = getRandomVal(0, $(document).height()-250);
    $(idRef).animate({left:width, top:height}, howFast, function()
    {
        bothFishes(idRef, howFast)
    })
};

$(document).ready(function()
{
    bothFishes("#fish1Id", 6500)
});

$(document).ready(function()
{
    bothFishes("#fish2Id", 4000)
});


// additional feature - sea horse behaviour

// he swims all the time very slowly

$(document).ready(function()
{
    bothFishes("#seaHorse1", 11000)
});

// when you click on sea horse it will change its colour

function changeSeaHorse() {
    var image = document.getElementById('seaHorse1');
    if (image.src.match("seaHorse1")) {
      image.src = "images/bgremove_seaHorse.jpg";
    } else {
      image.src = "images/seaHorseDifferentColour.jpg";
    }
  }

// additional feature - light bulb on a string

//light bulb behaviour on click, it changes from being off to on

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "images/bulb_off.jpg";
    } else {
      image.src = "images/bulb_on.jpg";
    }
  }










