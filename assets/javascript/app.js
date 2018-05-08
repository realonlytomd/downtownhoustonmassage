$(document).ready(function() {
    console.log("hello");
    
    $("#myCarousel").hide();
    $("#googleMap").hide();
    $("#viewSpace").hide();

    $(document).on("click", "#myStudio", function() {

        $("#logo").hide();
        $("#myCarousel").show();
        $("#viewSpace").hide();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myMassage", function() {

        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myLocation", function() {

        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").show();
    });

});