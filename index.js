var h= document.getElementById('hour');
var m= document.getElementById('min');
var s= document.getElementById('sec');

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
var popToggle = document.getElementById('pop-toggle');
var pop= document.getElementById('pop');

var sound = document.getElementById('myAudio');

var startTimer= undefined;

h.value= 0;
m.value= 0;
s.value= 0;

var check= false;

start.addEventListener('click', function() {
    if(h.value == 0 && m.value == 0 && s.value == 0)
    {
        alert("Please enter time to use timer!")
    }
    else if(h.value > 23 || m.value > 59 && s.value > 59)
    {
        h.value= 0;
        m.value= 0;
        s.value= 0;
        alert("Please enter valid hours minutes and seconds!")
    }
    else if(startTimer == undefined)
    {
        function startInterval(){
            startTimer = setInterval(function() {
                timer();
            }, 1000);
        }
        startInterval();

        check= false;
    }
    else
    {
        alert("Timer is alreay running!")
    }
})

reset.addEventListener('click', function() {
    h.value= 0;
    m.value= 0;
    s.value= 0;

    stop();
    startTimer= undefined;
    check= false;
})

pause.addEventListener('click', function() {
    if(!check)
    {
        stop();
        startTimer= undefined;
        check= true;
    } 
})

popToggle.addEventListener('click', function() {
    pop.style.visibility="hidden";
})

function stop() {
    clearInterval(startTimer);
}

function timer() {
    if(h.value == 0 && m.value == 0 && s.value == 0)
    {
        stop();
        startTimer= undefined;
        check= false;
        new Audio("assets/DuckDuckGo.mp3").play();
        pop.style.visibility="visible";
    }
    if(s.value != 0)
    {
        if(s.value <= 10)
        {
            s.value= '0' + (s.value-1);
        }
        else
        {
            s.value--;
        }
    }
    else if(m.value != 0 && s.value == 0)
    {
        s.value= 59;
        if(m.value <= 10)
        {
            m.value= '0' + (m.value-1);
        }
        else
        {
            m.value--;
        }
    }
    else if(h.value != 0 && m.value == 0 && s.value== 0)
    {
        s.value= 59;
        m.value= 59;
        if(h.value <= 10)
        {
            h.value= '0' + (h.value-1);
        }
        else
        {
            h.value--;
        }
    }
    
}