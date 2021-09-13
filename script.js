$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $(".go-top").fadeIn();  
        } else {
            $(".go-top").fadeOut(); 
        }
    });

    $(".go-top").click(function(){
        $("html,body").animate({scrollTop: 0}, 600);
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $(".desktop-menu2").fadeIn();  
        } else {
            $(".desktop-menu2").fadeOut(); 
        }
    });
});

function openNavbar() {
    $('#mobible-menu').css('width','200px');
    $('.mobile-menu-group').css('backgroundColor','rgba(0,0,0,0.8)');
}
function closeNavbar() {
    $('#mobible-menu').css('width','0');
}

function alertMessage() {
    var name = document.getElementById('name').value;
    var arriveDay = document.getElementById('arrive-day').value;
    var leaveDay = document.getElementById('leave-day').value;
    var phone = document.getElementById('phone-number').value;
    var people = document.getElementById('people').value;
    var typeroom = document.getElementById('type-room').value;

    if (name ==='' || arriveDay==='' || leaveDay ==='' || phone ==='' || people ==='' || typeroom == "-1") {
        alert('Please fill the blank');
    } else {
        alert('Thank you for booking at Mona Hotel. We will contact with you later!'); 
    } 
}