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

    $(document).on("click", "#addComment", function(event) {
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

    
    function showStudio() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").show();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").hide();
    }

    showStudio();

    $(document).on("click", "#home", function() {
        showStudio();
    });

    var stresspicture = ["stressbackground(0).jpg", "stressbackground(1).jpg", "stressbackground(2).jpg", "stressbackground(3).jpg",
        "stressbackground(4).jpg", "stressbackground(5).jpg", "stressbackground(6).jpg", "stressbackground(7).jpg",
        "stressbackground(8).jpg", "stressbackground(9).jpg", "stressbackground(10).jpg", "stressbackground(11).jpg", "stressbackground(12).jpg",
        "stressbackground(13).jpg", "stressbackground(14).jpg", "stressbackground(15).jpg", "stressbackground(16).jpg",
        "stressbackground(17).jpg", "stressbackground(18).jpg", "stressbackground(19).jpg", "stressbackground(20).jpg"];

    $(document).on("click", "#stressed", function() {

        var i = Math.floor(Math.random() * stresspicture.length);
        console.log(stresspicture.length);
        console.log("i = " + i);

        $("#stressview").empty();
        var image = $("<img>");
        image.addClass("img-responsive");
        image.addClass("center-block");
        image.addClass("myImage");
        image.addClass("animated");
        image.addClass("fadeIn");
        image.attr("src", "assets/img/" + stresspicture[i]);
        image.attr("alt", "relax relaxation massage stress beautiful view calm");
        image.attr("id", "newStressed");
        $("#stressview").append(image);

        $("#stressview").show();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        
    });

    $(document).on("click", "#newStressed", function() {

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
        image.attr("alt", "relax relaxation massage stress beautiful view calm");
        image.attr("id", "newStressed");
        $("#stressview").append(image);

        $("#stressview").show();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        
    });

    //need to make a new function when mymassage title is clicked
    // it will bring up a simple menu of my services that mirrors when
    // client clicks on the make an appt. button that takes them to square

    $(document).on("click", "#myServices", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#massageInfo").show();
        $("#googleMap").hide();
    });

    $(document).on("click", "#myMassage", function() {

        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<br><br><br><br><br><div class='row'>" +
        "<div class='col-xs-4'><h4><span class='return' id='flow'>Flow</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='return' id='benefits'>Benefits</span></h4></div>" + 
        "<div class='col-xs-4'><h4><span class='return' id='stretching'>Stretching</span></h4></div></div>" +
        "<br><br><br><br><div class='row'>" +
        "<div class='col-xs-4'><h4><span class='return' id='parking'>Parking</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='return' id='comments'>Comments</span></h4></div>" +
        "<div class='col-xs-4'><h4><span class='return' id='thoughts'>Thoughts</span></h4></div></div>");
    });

    $(document).on("click", "#myLocation", function() {

        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").show();
    });

    $(document).on("click", "#flow", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3><span class='topic'>The Flow of My Massage</span></h3>" +
            "<br>" +
            "<p class='topicp'>The client usually starts face down." +
            " I use Effleurage (long, slow strokes) at first to spread the lotion," +
            " then Petrissage (kneading strokes) to focus on right lower back, left lower back, then" +
            " both sides of the upper back.<br><br>" +
            "Generally, the order of what follows is: back of right leg and hip, back of left leg and hip," +
            " the client turns over, and right and left arm in turn, followed by chest," +
            " belly, front of left leg, and front of right leg. Hands and feet are" +
            " massaged at the end of each arm or leg, respectively.<br><br>" +
            "Throughout the session, the client should just breathe. Don't try to help as I move arms" +
            " or legs as I need to.<br><br>" +
            "Feedback is encouraged, or if you'd rather fall asleep, please do!</p><br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#benefits", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3><span class='topic'>Benefits of Massage Therapy</span></h3>" +
            "<br>" +
            "<p class='topicp'>Years ago, I found this list" +
            " of benefits of massage therapy:" +
            "<br><br>1. Posture gradually improves as the muscles around the spine become more flexible and less tense." +
            "<br><br>2. Circulation increases, which benefits muscle recovery and healing." +
            "<br><br>3. Massage encourages deeper breathing, which helps oxygen circulate to promote healing and growth." +
            "<br><br>4. Joint flexibility improves." +
            "<br><br>5. The stress hormone, cortisol, is decreased during a massage, while the hormones serotonin and dopamine (calm hormones) are increased." +
            "<br><br>6. These effects encourage a calm mind which boosts alertness and improves attention." +
            "<br><br>7. These hormonal changes can also boost your lymph flow and immune cell function." +
            "<br><br>8. This may also reduce stress, anxiety and depression." +
            "<br><br>That last one, I think, refers to this study: " + 
            "<a id='longlink' href='https://www.ncbi.nlm.nih.gov/pubmed/16162447' target='blank'>Cortisol Decreases</a>" +
            "<br><br>I do not remember where I saw this list. If someone knows, PLEASE" +
            " drop me a note in the comments; I'll certainly give credit." +
            "<br><br>Numbers 2 and 3 are often downplayed. Everyone knows that a massage helps relieve muscle soreness" +
            " from workouts, but much more than that, your muscles can't grow without the increased" +
            " oxygen and bloodflow that a massage encourages. Isn't increased size one of the main reasons to work out?" +
            "<br><br>This is my favorite study showing the importance of massage in muscle recovery: " +
            "<a id='longlink' href='https://www.runnersworld.com/health-injuries/a20850050/does-massage-work-the-rabbits-know/' target='blank'>" +
            "Rabbit Study</a></p><br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#stretching", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3><span class='topic'>The Importance of Frequent Stretching</span></h3>" +
            "<br>" + 
            "<p class='topicp'>Just bend over! So many day to day aches can be alleviated" +
            " by simply taking the time to let your muscles relax." +
            " After a shower, or a long drive, or whenever, start with a gentle bend in the knees, and just let your torso hang down to the floor. Don't" +
            " hold your head up; let gravity pull your head and torso to the floor." +
            " Keep breathing. Feel the backs of the legs and your lower back begin to release." +
            " Just rest there for 20 seconds. Don't bounce. It's no big deal. You'll relax a little" +
            " further each day. Do it every day, two or more times.</p><br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#thoughts", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3><span class='topic'>" +
            "My Random Thoughts about Massage Therapy - A Blog</span></h3>" +
            "<br>" +
            "<p class='topicp'>7/7/2018<br><a href='https://twitter.com/ChrisHallbeck/status/1015274366916063237?s=19' target='blank'>Promise this won't happen</a></p>" +
            "<br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#parking", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<img class='img-responsive center-block animated fadeIn'" +
        "id='parkingMap' src='assets/img/parkingPlain2.png' alt='downtown parking'>");
        //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#comments", function() {
        $("#stressview").hide();
        $("#logo").hide();
        $("#myCarousel").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<div class='row'>" +
            "<div class='col-xs-12'>" +
                "<h3><span class='topic'>Please leave reviews, comments or questions.</span></h3>" +
                "<div class='form-group'>" +
                    "<label for='email' id='lableText'>Email or Phone:</label>" +
                    "<input type='email' class='form-control' id='emailInput' placeholder='Enter Email/Phone For Reply' name='email'>" +
                    "<label for='comment' id='lableText'>Comments:</label>" +
                    "<textarea class='form-control' rows='5' id='clientCommentInput'></textarea>" +
                    "<button type='submit' id='addComment'>Submit</button>" +
            "</div></div></div>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });
});