$(document).ready(function(){
    //home btn
    $('#home-btn').on('click', function(){
        $('#head-section').slideDown();
        $("#section-two").hide();
        $("#section-three").hide();
        $("#section-four").hide();
        $("#nav-area").css('background-color', '#ffc107');
    });

    //calculate
    $('#calculate-btn').on('click', function(){
        $("#head-section").hide();
        $("#section-two").show();
        $("#section-three").hide();
        $("#section-four").hide();
        $("#nav-area").css('background-color', '#ffc107');
    });

    //find installer
    $('#find-btn').on('click', function(){
        $("#head-section").hide();
        $("#section-two").hide();
        $("#section-three").hide();
        $("#section-four").show();
    });
})