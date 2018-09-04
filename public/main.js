// Forma Simple

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
  
    function display_ct() {
    var strcount
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var img = document.getElementById('ct');

    /*if (h >= 19 &&  m >= 48){
        img.src = './img/chunks-594496_1920.jpg'

    }else if(h >= 19 &&  m <= 50){
        img.src = './img/hamburger-494706_1920.jpg';
    }*/
    
    tt=display_c();
}

// con Web APP
const socket = io();