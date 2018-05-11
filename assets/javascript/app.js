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
    });

    $(document).on("click", "#myLocation", function() {

        $("#waterfall").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").show();
    });

});