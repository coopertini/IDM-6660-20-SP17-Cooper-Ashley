function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var $j = jQuery.noConflict();
    $j(document).ready(function() {
    });
    function Reveal(a){
        var ul = a.parentNode.getElementsByTagName("UL").item(0);
        $j(ul).animate({height: 'toggle' ,opacity: 'toggle'}, "slow");
}