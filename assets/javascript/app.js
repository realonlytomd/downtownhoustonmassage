$(document).ready(function() {
    console.log("hello");

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyKdK5VRE1gkf3aV9Snx7dBVUXgGPdBUk",
    authDomain: "downtownmassagecomments.firebaseapp.com",
    databaseURL: "https://downtownmassagecomments.firebaseio.com",
    projectId: "downtownmassagecomments",
    storageBucket: "downtownmassagecomments.appspot.com",
    messagingSenderId: "560623673001"
  };
  firebase.initializeApp(config);

  //create variables
    var database = firebase.database();
    var clientemail = "";
    var clientcomment = "";

    // capture the submit button click

    $(document).on("click", "#addComment", function() {
        event.preventDefault();
  
        // Store and retrieve the most recent client inputs.
  
        clientemail = $("#emailInput").val().trim();
        clientcomment = $("#clientCommentInput").val().trim();
  
        console.log(clientemail);
        console.log(clientcomment);

        //  the "initial load" into Firebase
		database.ref().push({
            clientcomment: clientcomment,
            clientemail: clientemail
        });
    
        //empty out the input fields after submission
    
        $("#emailInput").val("");
        $("#clientCommentInput").val("");
    });

    function showLogo() {
        $("#stressview").hide();
        $("#logo").show();
        $("#myCarousel").hide();
        $("#googleMap").hide();
        $("#viewSpace").hide();
    }

    showLogo();

    $(document).on("click", "#home", function() {
        showLogo();
    });

    var stresspicture = ["stressbackground(0).jpg", "stressbackground(1).jpg", "stressbackground(2).jpg", "stressbackground(3).jpg",
        "stressbackground(4).jpg", "stressbackground(5).jpg", "stressbackground(6).jpg", "stressbackground(7).jpg",
        "stressbackground(8).jpg", "stressbackground(9).jpg", "stressbackground(10).jpg", "stressbackground(11).jpg", "stressbackground(12).jpg"];

    $(document).on("click", "#stressed", function() {

        var i = Math.floor(Math.random() * stresspicture.length);
        console.log("i = " + i);

        $("#stressview").empty();
        var image = $("<img>");
        image.addClass("img-responsive");
        image.addClass("center-block");
        image.addClass("myImage");
        image.addClass("animated");
        image.addClass("fadeIn");
        image.attr("src", "assets/img/" + stresspicture[i]);
        image.attr("alt", "relax relaxation massage stress");
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
        $("#viewSpace").append("<br><br><br><br><div class='row'>" +
        "<div class='col-xs-4'><h4><span class='topic' id='flow'>The Flow</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='topic' id='benefits'>Benefits</span></h4></div>" + 
        "<div class='col-xs-4'><h4><span class='topic' id='stretching'>Stretching</span></h4></div></div>" +
        "<br><br><br><div class='row'>" +
        "<div class='col-xs-2 col-xs-offset-3'><h4><span class='topic' id='thoughts'>Thoughts</span></h4></div>" +
        "<div class='col-xs-2 col-xs-offset-2'><h4><span class='topic' id='hours'>Hours</span></h4></div></div>" + 
        "<br><br><br><div class='row'>" +
        "<div class='col-xs-4'><h4><span class='topic' id='parking'>Parking</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='topic' id='comments'>Comments</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='topic' id='prices'>Prices</span></h4></div></div>");
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
        $("#viewSpace").append("<h3>The Flow of My Massage</h3>" +
            "<br>" +
            "<p>This topic is under construction</p><br><h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#benefits", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3>Benefits of Massage Therapy</h3>" +
            "<br>" +
            "<p>This topic is under construction</p><br><h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#stretching", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3>The Importance of Frequent Stretching</h3>" +
            "<br>" + 
            "<p class='topic'>Just bend over! So many day to day aches can be alleviated" +
            " by simply taking the time let your muscles relax.</p><br><h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#thoughts", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3>" +
            "My Random Thoughts about Massage Therapy - A Blog</h3>" +
            "<br>" +
            "<p>This topic is under construction</p>" +
            "<br>" +
            "<h3 id='myMassage'>Return</h3>");
    });

    $(document).on("click", "#hours", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3>My General Hours</h3>" +
            "<br>" + 
            "<p>Monday - Thursday: 9 AM - 9 PM<br>" +
            "Friday: 9 AM - 6 PM<br>" +
            "Saturday: 11 AM - 6 PM<br>" +
            "Sunday: 11 AM - 9 PM<br></p>" +
            "<br><h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#parking", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<img class='img-responsive center-block animated fadeIn'" +
        "id='parkingMap' src='assets/img/parkingPlain2.png' alt='downtown parking'>" +
        "<h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#comments", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<div class='row'>" +
            "<div class='col-xs-1'></div>" +
            "<div class='col-xs-10'>" +
                "<h3>Please leave reviews, comments or questions.</h3>" +
                "<div class='form-group'>" +
                    "<label for='email' id='lableText'>Email:</label>" +
                    "<input type='email' class='form-control' id='emailInput' placeholder='Enter Email If You Want a Reply' name='email'>" +
                    "<label for='comment' id='lableText'>Comments:</label>" +
                    "<textarea class='form-control' rows='5' id='clientCommentInput'></textarea>" +
                    "<button type='submit' id='addComment'>Submit</button>" +
            "</div></div></div>" +
            "<h4 id='myMassage'>Return</h4>");
    });

    $(document).on("click", "#prices", function() {
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3>Prices</h3>" +
            "<br>" + 
            "<p>Half-Hour: $40<br>Hour: $80<br>Ninety-Minute: $100</p><br><h4 id='myMassage'>Return</h4>");
    });
});