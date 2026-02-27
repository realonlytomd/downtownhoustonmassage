$(document).ready(function() {

    // instead of writing over the uid each time I log in, just initialize it here.
    // since this string is how the db path is written
    var meUid = "g6ezIKLGQFh0A2v9CFu5fEo8Kxi2"; // the userCredential.uid from firebase
    //console.log("top of app, get meUid: " + meUid);
    var stresspicture = [];
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
    var blogDate = "";
    var blogToday = "";

    // capture the submit button click from a user making a comment

    $(document).on("click", "#addComment", function(event) {
        event.preventDefault();
        firebase.auth().signInAnonymously()
        .then(() => {
            // Signed in.. And assign anonymous user an uid
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log("this is after onAuthStateChanged");
                    var otherUid = user.uid; // other Uid initialized here for anon login
                    // Store and retrieve the most recent client inputs.
  
                    clientemail = $("#emailInput").val().trim();
                    clientcomment = $("#clientCommentInput").val().trim();
                    blogDate = "";
                    blogToday = "";
            
                    console.log(clientemail);
                    console.log(clientcomment);

                    //  the "initial load" into Firebase
                    database.ref("users/" + meUid).push({
                        clientcomment: clientcomment,
                        clientemail: clientemail,
                        blogDate: blogDate,
                        blogToday: blogToday
                    });
                    //empty out the input fields after submission
                    $("#emailInput").val("");
                    $("#clientCommentInput").val("");
                } else {
                  // User is signed out
                }
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("errorMessage: ", errorMessage);
        });
        
    });

    // this brings up a modal to test if only I am entering into the blog
    $(document).on("click", "#enterBlogModal", function(event) {
        event.preventDefault();
        $("#modalBlogTest").modal("show");
    });

    // sign me out
    $(document).on("click", "#signMeOut", function(event) {
        event.preventDefault();
        console.log("inside sign me out");
        firebase.auth().signOut()
            .then(() => {
            // Sign-out successful.
            console.log("I've signed out");
            })
            .catch((error) => {
                console.log("error: ", error);
            // An error happened.
          });
    });

    // if password entered correctly, bring up modal to enter in blog
    $(document).on("click", "#subPassTest", function(event) {
        event.preventDefault();
        // The following is for creating myself as a user in the firebase data
        var myemail = "onlytommassage@gmail.com"
        var mypassword = $("input#passwordEntry").val().trim();
        //    console.log("mypassword: ", mypassword);
        // This section is only for creating myself as an authorized user the first time.
        // firebase.auth().createUserWithEmailAndPassword(myemai$l, mypassword)
        //     .then((userCredential) => {
        //     // Signed in 
        //     console.log("userCredential: ", userCredential);
        //     console.log("userCredential.user: ", userCredential.user);
        //     console.log("userCredential.m: ", userCredential.m);
        //     console.log("userCredential.email: ", userCredential.email);
        //     me = userCredential.user;
        //     // ...
        //     })
        //     .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log("errorMessage: ", errorMessage);
        //     // ..
        //     });
        // The following is for signing in an existing user - me
        firebase.auth().signInWithEmailAndPassword(myemail, mypassword)
            .then((userCredential) => {
            // Signed in
            //console.log("userCredential: ", userCredential);
            //console.log("userCredential.user: ", userCredential.user);
            //console.log("userCredential.m: ", userCredential.m);
            //console.log("userCredential.email: ", userCredential.email);
            //console.log("userCredential.uid: ", userCredential.uid);
            // initialie meUid here for just me
            // meUid = userCredential.uid;
            //console.log(" after I log in to firebase, don't write over meUid: " + meUid);
            $("input#passwordEntry").val("");
            $("#modalBlogTest").modal("hide");
            $("#blogEntry").modal("show");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("errorMessage: ", errorMessage);
                console.log("oops, didn't type in correct password");
                $("input#passwordEntry").val("");
                $("#modalBlogTest").modal("hide");
            });
        // Later, if I want to add the ability update password...
        // const user = firebase.auth().currentUser;
        // const newPassword = getASecureRandomPassword();

        // user.updatePassword(newPassword).then(() => {
        // // Update successful.
        // }).catch((error) => {
        // // An error ocurred
        // // ...
        // });
    });


    $(document).on("click", "#addPost", function(event) {
        event.preventDefault();

        // Retrieve the blog post and today's date in correct format
        clientemail = "";
        clientcomment = "";
        blogToday = $("#blogTodayInput").val().trim();
        blogDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

        // load the data to firebase.
        // meUid here is set from my just logging in
        database.ref("users/" + meUid).push({
            clientcomment: clientcomment,
            clientemail: clientemail,
            blogDate: blogDate,
            blogToday: blogToday
        });

        // empty the input fields of the blog post
        $("#blogTodayInput").val("");
        $("#blogEntry").modal("hide");
        
    });

    // when a regular user goes to the site and clicks the text in the blog window,
    // this function starts and the user is logged in anonymously.
    $(document).on("click", "#loadBlog", function(event) {
        event.preventDefault();
        //console.log("inside loadBlog");
        firebase.auth().signInAnonymously()
        .then(() => {
            //console.log("inside loadBlog .then");
            // Signed in.. And assign anonymous user an uid
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    var otherUid = user.uid; // other Uid initialized here for anon login
                    //console.log("inside loadBlog after state change, otherUid: " + otherUid);
                    // otherUid is a throwaway uid since it's not really used in the db
                    window.location.reload();
                    
                } else {
                  // User is signed out
                }
            });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("errorMessage: ", errorMessage);
            // ...
        });
    });

    // so meUid must be defined from the beginning because the db uses it.
    // 
    // Create Firebase "watcher". Responds the first time,
    // and when a new input has been made (child)
    database.ref("users/" + meUid).on("child_added", function(snapshot) {
        // console.log("I'm inside the child_added.");
        //  change to .blog so complete pic shows
        if (!window.matchMedia("(orientation: portrait)").matches) {
        // Apply JavaScript-based style changes only if not in portrait
        $(".blog").css("margin-top", "0vh");
        } else {
            $(".blog").css("margin-top", "0vh");
        }
        var newEntry = $("<div>");
        var newReviewEntry = $("<div>");
        //console.log("clientEmail: " + snapshot.val().clientemail);
        var newReview = $("<h5>").text(snapshot.val().clientcomment);
        var newDate = $("<h5>").text(snapshot.val().blogDate);
        var newText = $("<h5>").text(snapshot.val().blogToday);
        // test if there is no entry for date, so it doesn't print
        if (snapshot.val().blogDate === "") {
            // change color of title so I know there's a comment
            $("#home").css("color", "green");
            if (snapshot.val().clientemail === "review") {
            //console.log("this must be a review");
            $("#home").css("color", "white");
            newReviewEntry.append(newReview);
            newReviewEntry.attr("id", "addTextBorder");
            $("#review").prepend(newReviewEntry);
            $("#titleReview").show();
            $("#review").show();
            }
        } else {
            newEntry.append(newDate);
            newEntry.append(newText);
            // if there's a URL, append it here.
            // use a regex(?) to check anywhere in the string for a url
            var str = snapshot.val().blogToday;
            var urlRE= new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+");
            var arr = str.match(urlRE);
            if (arr !== null) {
                //console.table("this is the result of the new match: ", arr);
                newEntry.append(
                    "<a href=" +
                    arr[0] + " target='_blank'>[CLICK HERE TO FOLLOW LINK]</a>");
            }
            newEntry.attr("id", "addTextBorder");
            $("#blog").prepend(newEntry);
        }
    }, function(errorObject) {
        $("#titleReview").hide();
        $("#review").hide();
        console.log("The read failed: " + errorObject.code);
    });
    
 
    function showStudio() {
        //console.log("in showstudio");
        $("#stressview").hide();
        $("#viewSpace").hide();
        $("#massageInfo").show();
        $("#googleMap").hide();
        $("#blog").show();
        $("#review").show();
        $(".padNumber").show();
        //console.log("background color: " + $("footer").css("background-color"));
        if($("footer").css("background-color") === "rgb(30, 54, 99)") {
            //console.log("less than 768");
            //console.log("background color: " + $("footer").css("background-color"));
            $("#myCarousel").hide();
            $("#newBackground").show(); // change back to show
        } else {
            //console.log("widescreen");
            //console.log("background color: " + $("footer").css("background-color"));
            $("#myCarousel").show(); // change back to show
            $("#newBackground").hide();
        }
    }

    showStudio();

    $(document).on("click", "#home", function() {
        showStudio();
    });

    function buildStresspicture() {

        for (i=0; i<3; i++) {
            stresspicture.push("stressbackground(" + i + ").gif");
        }

        for (i=3; i<84; i++) {
            stresspicture.push("stressbackground(" + i + ").jpg");
        }
    }
    
    buildStresspicture();

    var stressIndex;

    $(document).on("click", "#stressed", function() {
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        pickStress();
    });

    function pickStress() {
        stressIndex = Math.floor(Math.random() * stresspicture.length);
        //console.log("stressIndex = " + stressIndex);
        
        buildStresspic();

    }

    // function to build the image to display in the stress relief pic div.
    function buildStresspic() {
        // console.log("inside buildStresspic, stressIndex: ", stressIndex);
        // console.log("inside buildStresspic, stresspicture: ", stresspicture);
        // console.log("inside buildStresspic, stresspicture.length: ", stresspicture.length);
        $("#stressview").empty();
        var image = $("<img>");
        image.addClass("img-responsive");
        image.addClass("center-block");
        image.addClass("myImageStress");
        image.addClass("animated");
        image.addClass("fadeIn");
        image.attr("src", "assets/img/" + stresspicture[stressIndex]);
        image.attr("alt", "relax relaxation massage stress beautiful view calm");
        image.attr("title", "Click for Next");
        image.attr("id", "stressed");
        $("#stressview").append(image);
        $("#stressview").append("<div id='stressed' class='carousel-caption'><span " +
        //"class='glyphicon glyphicon-chevron-right' aria-hidden='true' " +
        "style='font-size:20px; text-shadow:2px 2px 4px #000000;'>Click for Next" +
        "</span></div>");

        $("#stressview").show();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $(".padNumber").hide();
        
        // using .splice(), simply remove the chosen stressIndex from the array stresspicture.
        // then when a new index is chosen, the used index is simply not available.
        // the array must be rebuilt after all the pics are spliced out.

        stresspicture.splice(parseInt(stressIndex), 1);

        // console.log("after splice, stresspicture.length: ", stresspicture.length);
        if (stresspicture.length === 0) {
            console.log("rebuilding stresspicture");
            buildStresspicture();
        }

    }

    $(document).on("click", "#myServices", function() {
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").hide();
        $("#massageInfo").show();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
    });

    $(document).on("click", "#myMassage", function() {

        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
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
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").hide();
        $("#massageInfo").hide();
        $("#googleMap").show();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
    });

    $(document).on("click", "#flow", function() {
        $("#viewSpace").empty();
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
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
            " or legs as I need to.<br><br>Draping is up to the comfort of the client, but in cooler weather," +
            " the table is heated which makes for a cozy massage even without a cover.<br><br>" +
            "Feedback is encouraged, or if you'd rather fall asleep, please do!</p><br>");
        $("#viewSpace").show();
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#benefits", function() {
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
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
            "</p><br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#stretching", function() {
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<h3><span class='topic'>The Importance of Frequent Stretching</span></h3>" +
            "<br>" + 
            "<p class='topicp'>Back, Hams and Glutes!<br>So many day to day aches can be alleviated" +
            " by simply taking the time to let your muscles relax." +
            " After a shower, or a long drive, or whenever, start with a gentle bend in the knees, and just let your torso hang down to the floor. Don't" +
            " hold your head up; let gravity pull your head and torso to the floor." +
            " Keep breathing. Feel the backs of the legs and your lower back begin to release." +
            " Just rest there for 20 seconds. Don't bounce. It's no big deal. You'll relax a little" +
            " further each day. Do it every day, two or more times.</p><br>");
        $("#viewSpace").append("<p class='topicp'>Lunges!<br>Look up the psoas muscle. Now put" +
            " one knee on the floor, and then the other leg's foot in front, so that the knee is" + 
            " at a 90 degree angle. Scooch (a technical term) that foot a few inches further away." + 
            " Now slowly and slightly move your hips forward. Do not lean your torso over the front" +
            " leg; keep it upright, as well as your head facing forward. You'll feel a slight" +
            " stretch in the thigh muscles (your quads) of the leg with the knee on the ground." + 
            " Imagine a rod through your hips. Keep that rod parallel to the ground (don't" +
            " tilt your hips). Keep that slight stretch in your front quads. Now release that" +
            " slight stretch and repeat with switched legs. Remember your psoas muscle? This" +
            " stretch keeps that muscle lengthened. It's very important to have a limber" +
            " psoas muscle for proper body alignment and posture.</p><br>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    // this function is currently not needed as the "blog" is on the home screen
    $(document).on("click", "#thoughts", function() {
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
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
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<img class='img-responsive center-block animated fadeIn'" +
        "id='parkingMap' src='assets/img/parkingPlain2.png' alt='downtown parking'>");
        //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });

    $(document).on("click", "#comments", function() {
        $("#stressview").hide();
        $("#myCarousel").hide();
        $("#newBackground").hide();
        $("#viewSpace").show();
        $("#massageInfo").hide();
        $("#googleMap").hide();
        $("#titleBlog").hide();
        $("#blog").hide();
        $("#titleReview").hide();
        $("#review").hide();
        $(".padNumber").hide();
        $("#viewSpace").empty();
        $("#viewSpace").append("<div class='row'>" +
            "<div class='col-xs-12'>" +
                "<h3><span class='topic'>" +
                "Please leave a review, comment or question. Let me know " +
                "what I can do better or different, or absolutely anything that comes to mind.<br>" +
                "Anonymous comments are welcome, but if you want an answer to a question, please leave some way " +
                "for me to respond.</span></h3>" +
                "<div class='form-group'>" +
                    "<label for='email' id='lableText'>Email, Phone, or Name:</label>" +
                    "<input type='email' class='form-control' id='emailInput' placeholder='Who are you?' name='email'>" +
                    "<label for='comment' id='lableText'>Comments:</label>" +
                    "<textarea class='form-control' rows='5' id='clientCommentInput' " +
                    "placeholder='This is completely private. No one will ever see this except Tom.'></textarea>" +
                    "<button type='submit' id='addComment'>Submit</button>" +
            "</div></div></div>");
            //"<h3><span class='return' id='myMassage'>Return</span></h3>");
    });
});