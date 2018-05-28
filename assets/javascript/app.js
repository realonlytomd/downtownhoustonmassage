$(document).ready(function() {
    console.log("hello");
    
    $("#stressview").hide();
    $("#myCarousel").hide();
    $("#googleMap").hide();
    $("#viewSpace").hide();

    var stresspicture = ["stressbackground(0).jpg", "stressbackground(1).jpg", "stressbackground(2).jpg", "stressbackground(3).jpg",
        "stressbackground(4).jpg", "stressbackground(5).jpg", "stressbackground(6).jpg", "stressbackground(7).jpg",
        "stressbackground(8).jpg", "stressbackground(9).jpg", "stressbackground(10).jpg", "stressbackground(11).jpg", "stressbackground(12).gif"];

    $(document).on("click", "#stressed", function() {

        var i = Math.floor(Math.random() * 13);
        console.log("i = " + i);

        $("#stressview").empty();
        var image = $("<img>");
        image.addClass("img-responsive");
        image.addClass("center-block");
        image.attr("src", "assets/img/" + stresspicture[i]);
        image.attr("alt", "downtown houston massage stress");
        $("#stressview").append(image);

        $("#stressview").show();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").hide();
        
    });

    $(document).on("click", "#myStudio", function() {

        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").show();
        $("#viewSpace").hide();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myMassage", function() {

        $("#stressview").hide();
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
        "<div class='col-xs-6' id= 'regs'><h4>TX regulations</h4></div>" +
        "<div class='col-xs-6' id= 'hours'><h4>Hours</h4></div></div>" + 
        "<br><br><br><div class='row'>" +
        "<div class='col-xs-4' id='comments'><h4>Comments</h4></div>" +
        "<div class='col-xs-4' id='comments'><h4>Comments</h4></div>" +
        "<div class='col-xs-4' id='comments'><h4>Comments</h4></div></div>");
    });

    $(document).on("click", "#myLocation", function() {

        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#googleMap").show();
    });

    $(document).on("click", "#flow", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum About My Flow</p>" +
            "<br>" +
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin ligula " +
            "id volutpat malesuada. Morbi lacinia posuere convallis. Vestibulum sed tincidunt nunc. " +
            "Donec ut eros ut ante venenatis vulputate. In hac habitasse platea dictumst. Pellentesque " +
            "vel libero aliquet, rhoncus tortor ac, aliquam erat. Nulla facilisi. Praesent at vestibulum " +
            "erat, in posuere leo. Aenean eget magna id risus ultricies vestibulum. Pellentesque pharetra " +
            "porttitor libero nec rhoncus. Mauris eu elementum arcu. Duis in dui dui. In ultricies enim ut " +
            "nulla imperdiet, at blandit lorem porttitor. Praesent scelerisque purus quis nunc feugiat " +
            "fermentum.</p>" +
            "<br>" +
            "<p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#benefits", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum benefits stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#stretching", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum stretching stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#regs", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p><a href='https://www.tdlr.texas.gov/mas/masrules.htm#117.91' target='_blank'>" +
            "Texas Department of Licensing and Registration</a></p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#hours", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<p>Ipsum hours stuff</p><br><p id='myMassage'>Return</p>");
    });

    $(document).on("click", "#comments", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<div class='row'>" +
            "<div class='col-lg-1'></div>" +
            "<div class='col-lg-10'>" +
            "<div class='panel panel-primary'>" +
            "<div class='panel-heading id='panel-color'>" +
                "<h3 class='panel-title'>Add Train</h3></div>" +
            "<div class='panel-body'>" +
                "<div class='form-group'>" +
                    "<label for='usr'>Train Name:</label>" +
                        "<input type='text' class='form-control' id='trainName-input'>" +
                        "<label for='usr'>Destination:</label>" +
                        "<input type='text' class='form-control' id='destination-input'>" +
                        "<button type='submit' id='add-train' class='btn btn-primary'>Submit</button>" +
                        "</div></div></div></div></div>" +
            "<br><p id='myMassage'>Return</p>");
    });
});