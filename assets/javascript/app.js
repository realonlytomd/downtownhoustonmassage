$(document).ready(function() {
    console.log("hello");
    
    $("#waterfall").hide();
    $("#myCarousel").hide();
    $("#googleMap").hide();
    $("#viewSpace").hide();

    $(document).on("click", "#stressed", function() {

        $("#waterfall").show();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myStudio", function() {

        $("#waterfall").hide();
        $("#logo").hide();
        $("#myCarousel").show();
        $("#viewSpace").hide();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myMassage", function() {

        $("#waterfall").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<div class='row'><div class='col-xs-4'><h4>The Flow</h4></div><div class='col-xs-4'><h4>Benefits</h4></div><div class='col-xs-4'><h4>Stretching</h4></div></div>");
    });

    $(document).on("click", "#myLocation", function() {

        $("#waterfall").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").show();
    });

    $(document).on("click", "h4", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum stuff</p>");
    });
});