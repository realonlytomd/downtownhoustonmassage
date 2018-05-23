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
        $("#viewSpace").append("<br><br><br><div class='row'>" +
        "<div class='col-xs-4' id='flow'><h4>The Flow</h4></div>" +
        "<div class='col-xs-4' id='benefits'><h4>Benefits</h4></div>" + 
        "<div class='col-xs-4' id='stretching'><h4>Stretching</h4></div></div>" +
        "<br><br><br><div class='row'>" +
        "<div class='col-xs-6' id= 'drape'><h4>Draping</h4></div>" +
        "<div class='col-xs-6' id= 'hours'><h4>Hours</h4></div>");
    });

    $(document).on("click", "#myLocation", function() {

        $("#waterfall").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").show();
    });

    $(document).on("click", "#flow", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum flow stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#benefits", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum benefits stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#stretching", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum stretching stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#drape", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p><a href='https://www.tdlr.texas.gov/mas/masrules.htm#117.91' target='_blank'>Texas Department of Licensing and Registration</a></p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#hours", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum hours stuff</p><br><p id='myMassage'>Return</p>");
    });
});