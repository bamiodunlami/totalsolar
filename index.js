$(document).ready(function(){
    console.log($("input"));
    console.log($("div#field-bar").length);
    
    $("#section-two").hide();
    $("#section-three").hide();
    $("#section-four").hide();
    // $("#nav-area").css('background-color', '#ffc107');


    //move to calculator
    $("#calculate").on('click', function(){
        $("#head-section").slideToggle();
        $("#section-two").show();
        // $("#nav-area").css('background-color', '#ffc107');
    });

    // Get quote button
    $('#quote').on("click", function(){
        $("#head-section").slideUp();
        $("#section-four").show();
    });

    //move back to header
    $("#back").on("click", function(){
        $("#head-section").slideToggle();
        $("#section-two").hide();
    });
    
    //Add more calculator
    $("#btn-more").on("click", function(){
        $("#field-bar").clone().insertBefore("#btn-more").find("input").val("");
        // console.log($("input"));
        //console.log($("div#field-bar").length);
       
    });

    //Calculate
    $("#btn-calculate").on("click", function(){
        $("#section-two").slideToggle();
        $("#section-three").show();
        $("#nav-area").css('background-color', "#fff");
    });

    // $("#back-to-two").click(function(){
    //     $("#head-section").slideToggle();
    //     $("#section-three").hide();
    // });

    //Reset Button
    $("#btn-reset").on('click', function(){
        field=$("div#field-bar");
        field=field.length-1;
        for(i=0; i<field; i++){
            console.log(i);
            $("#field-bar").remove();
            $("input").val("");
        }
        //  $("#field-bar").hide(field-1);
    });

    //find installer button
    $("#find-installer").on('click', function(){
        $("#section-three").slideUp();
        $("#section-four").slideDown();
        $("#nav-area").css('background-color', '#ffc107');
    });

    //Back to slide two
    $("#back-to-two").click(function(){
        $("#section-two").slideDown();
        $("#section-three").hide();
        $("#nav-area").css('background-color', '#ffc107');
    });

    // calculate again
    $('#calculate-agin').click(function(){
        $("#head-section").show();
        $("#section-four").hide();
    });
});

// git remote add origin https://github.com/bamiodunlami/totalsolar.git
// git branch -M main
// git push -u origin main
