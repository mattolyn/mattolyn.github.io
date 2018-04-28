$(document).ready(function() {
    $("#traveldetailstext").hide();
    $("#lodgingdetailstext").hide();
    $("#venuebutton").css("text-shadow", "1px 1px 1px");

    $("#nybutton").css("text-shadow", "1px 1px 1px");
    $("#litodo").hide();
    $("#sbtodo").hide();
    $("#pjtodo").hide();

    $("#nybutton").click(function() {
        $("#nytodo").show();
        $("#litodo").hide();
        $("#sbtodo").hide();
        $("#pjtodo").hide();

        $("#nybutton").css("text-shadow", "1px 1px 1px");
        $("#libutton").css("text-shadow", "");
        $("#sbbutton").css("text-shadow", "");
        $("#pjbutton").css("text-shadow", "");
    });

    $("#libutton").click(function() {
        $("#nytodo").hide();
        $("#litodo").show();
        $("#sbtodo").hide();
        $("#pjtodo").hide();

        $("#nybutton").css("text-shadow", "");
        $("#libutton").css("text-shadow", "1px 1px 1px");
        $("#sbbutton").css("text-shadow", "");
        $("#pjbutton").css("text-shadow", "");
    });

    $("#sbbutton").click(function() {
        $("#nytodo").hide();
        $("#litodo").hide();
        $("#sbtodo").show();
        $("#pjtodo").hide();

        $("#nybutton").css("text-shadow", "");
        $("#libutton").css("text-shadow", "");
        $("#sbbutton").css("text-shadow", "1px 1px 1px");
        $("#pjbutton").css("text-shadow", "");
    });

    $("#pjbutton").click(function() {
        $("#nytodo").hide();
        $("#litodo").hide();
        $("#sbtodo").hide();
        $("#pjtodo").show();

        $("#nybutton").css("text-shadow", "");
        $("#libutton").css("text-shadow", "");
        $("#sbbutton").css("text-shadow", "");
        $("#pjbutton").css("text-shadow", "1px 1px 1px");
    });

    $("#venuebutton").click(function() {
        $("#lodgingdetailstext").hide();
        $("#traveldetailstext").hide();
        $("#venuedetailstext").show();

        $("#venuebutton").css("text-shadow", "1px 1px 1px");
        $("#travelbutton").css("text-shadow", "");
        $("#lodgingbutton").css("text-shadow", "");
    });

    $("#travelbutton").click(function() {
        $("#lodgingdetailstext").hide();
        $("#venuedetailstext").hide();
        $("#traveldetailstext").show();

        $("#venuebutton").css("text-shadow", "");
        $("#travelbutton").css("text-shadow", "1px 1px 1px");
        $("#lodgingbutton").css("text-shadow", "");
    });

    $("#lodgingbutton").click(function() {
        $("#traveldetailstext").hide();
        $("#venuedetailstext").hide();
        $("#lodgingdetailstext").show();

        $("#travelbutton").css("text-shadow", "");
        $("#venuebutton").css("text-shadow", "");
        $("#lodgingbutton").css("text-shadow", "1px 1px 1px");
    });

    var scrollToCenter = function(elem) {
        return function() {
            var el = $(elem)
            var eloffset = el.offset().top;
            var height = el.height();
            var windowheight = $(window).height();
            var offset;

            if (height < $(window).height()) {
                offset = eloffset - ((windowheight / 2) - (height / 2));
            } else {
                offset = eloffset;
            }
            $("html, body").animate({
                scrollTop: offset
            }, 2500)
        };
    };

    var scrollToTop = function(elem) {
        return function() {
            $("html, body").animate({
                scrollTop: $(elem).offset().top }, 2500);
        };
    };


    $("#storybutton").click(scrollToTop("#story"));
    $("#vtbutton").click(scrollToTop("#details"));
    $("#todobutton").click(scrollToCenter("#horizpanel1"));
    $("#teambutton").click(scrollToCenter("#carolyn"));
    $("#qabutton").click(scrollToCenter("#handhug"));
    $("#thxbutton").click(scrollToCenter("#thanksbody"));


    var bridesmaids = [
        { "name" : "Christina Matl",
          "title" : "Maid of Honor, Sis-to-be",
          "content" : "I can always count on Christina to make my day. Her witty, mischievous, (sometimes shockingly dark), one-of-a-kind humor never fails to make me laugh!",
          "img" : "christina.jpg"
        },
        { "name" : "Mary Matl",
          "title" : "Sister-to-be",
          "content" : "I've always admired how loving and caring Mary is. She is constantly looking after all of her siblings -- Matthew included!",
          "img" : "mary.jpg"
        },
        { "name" : "Jean Juang",
          "title" : "BFF from College",
          "content" : "You know how down-to-earth, true, and great a person is if a dog loves them. Chamois happens to love Jean very very much, and I do too.",
          "img" : "jean.jpg"
        },
        { "name" : "Elaine Chou",
          "title" : "BFF from College",
          "content" : "Elaine is the absolute sweetest, and yet she can pack a solid punch! As a master blackbelt in Tae kwon do, I know she really has my back!",
          "img" : "elaine.jpg"
        },
        { "name" : "Esther Rolf",
          "title" : "BFF and Grad Roomie",
          "content" : "Esther encourages me to live my best life. Whether it is eating healthier, running, or watching The Office, with her, I now enjoy life more than ever!",
          "img" : "esther.jpg"
        },
        { "name" : "Andrea Bajcsy",
          "title" : "BFF in Grad School",
          "content" : "My fren Andrea knows the way of the dank memes. Her endless supply of cute dog GIFs and motivational messages get me through a challenging week!",
          "img" : "andrea.jpg"
        },
        { "name" : "Olivia Belden",
          "title" : "Flower girl, Cousin-to-be",
          "content" : "I'm honored to have Olivia be my flower girl! One of the happiest and friendliest little girls I've ever met, she will be sure to sparkle and shine on our wedding day!",
          "img" : "olivia.jpg"
        },
        { "name" : "Chamois",
          "title" : "My sister!",
          "content" : "My little Chamois is so excited that Matt and I are getting married! Look out for my furry sister on our wedding day -- she might make a surprise appearance!",
          "img" : "chamois.jpg"
        },
    ];

    var bmid = 0;

    $("#la_bm").click(function() {
        bmid = bmid - 1;
        if (bmid < 0) {
            bmid = bridesmaids.length - 1;
        }
        $("#bm_name").text(bridesmaids[bmid]["name"]);
        $("#bm_title").text(bridesmaids[bmid]["title"]);
        $("#bm_content_txt").text(bridesmaids[bmid]["content"]);
        $("#bm_photo").attr("src", "assets/photos/party/" + bridesmaids[bmid]["img"]);
    });

    $("#ra_bm").click(function() {
        bmid = bmid + 1;
        if (bmid == bridesmaids.length) {
            bmid = 0;
        }
        $("#bm_name").text(bridesmaids[bmid]["name"]);
        $("#bm_title").text(bridesmaids[bmid]["title"]);
        $("#bm_content_txt").text(bridesmaids[bmid]["content"]);
        $("#bm_photo").attr("src", "assets/photos/party/" + bridesmaids[bmid]["img"]);
    });

    var groomsmen = [
        { "name" : "James Matl",
          "title" : "Best Man and Brother",
          "content" : "James has always been my partner in crime, whether we’re harassing Anthony, schooling the younger sibs in video games, or trying to get Dad outside to work on the house.",
          "img" : "james.jpg"
        },
        { "name" : "Curtis Chen",
          "title" : "Brother-to-be",
          "content" : "Whether he’s composing hilarious riffs on popular songs or laying out his scheme for adopting an entire basketball team, Curtis always has a perfect joke up his sleeve.",
          "img" : "curtis.jpg"
        },
        { "name" : "Anthony Matl",
          "title" : "Little Brother",
          "content" : "Despite being the youngest groomsman, Anthony has already been experiencing severe pain from “putting the wedding party on [his] back.”",
          "img" : "anthony.jpg"
        },
        { "name" : "Elliot Chang",
          "title" : "Grad School Roommate",
          "content" : "Elliot’s love for Pho might only be eclipsed by his love for acoustic covers of emo pop songs. I don’t think I’ll ever get Mayday Parade out of my head now.",
          "img" : "elliot.jpg"
        },
        { "name" : "Lawrence Liu",
          "title" : "Grad School Roommate",
          "content" : "“Uncle Larry,” as he’s affectionately known, already has plans for forcing our future children to run laps every time they drop a pop fly at his baseball summer camp.",
          "img" : "lawrence.jpg"
        },
        { "name" : "Miles Novack",
          "title" : "Best Friend in High School",
          "content" : "Miles has been the best friend and teammate I could ask for, whether we were waking up early for swimming, playing Lamar Park football, or running the table in 2v2 Super Smash.",
          "img" : "miles.jpg"
        },
        { "name" : "John Matl",
          "title" : "Ringbearer and little brother",
          "content" : "John’s favorite animal is either a dinosaur or a shark depending on the week, with special love reserved for the T-Rex and Megalodon.",
          "img" : "john.jpg"
        },
    ];

    var gmid = 0;

    $("#la_gm").click(function() {
        gmid = gmid - 1;
        if (gmid < 0) {
            gmid = groomsmen.length - 1;
        }
        $("#gm_name").text(groomsmen[gmid]["name"]);
        $("#gm_title").text(groomsmen[gmid]["title"]);
        $("#gm_content_txt").text(groomsmen[gmid]["content"]);
        $("#gm_photo").attr("src", "assets/photos/party/" + groomsmen[gmid]["img"]);
    });

    $("#ra_gm").click(function() {
        gmid = gmid + 1;
        if (gmid == groomsmen.length) {
            gmid = 0;
        }
        $("#gm_name").text(groomsmen[gmid]["name"]);
        $("#gm_title").text(groomsmen[gmid]["title"]);
        $("#gm_content_txt").text(groomsmen[gmid]["content"]);
        $("#gm_photo").attr("src", "assets/photos/party/" + groomsmen[gmid]["img"]);
    });

    var qanda = [
        { "question" : "What was your first date?",
          "answer" : "It could be argued that our first date was in Hampi, India, where Matthew pretended that he knew how to ride a motorcycle so that Carolyn would tour the breathtaking remains of the last great Hindu kingdom of South India with him on his bike... or our first date might have been when we went to the Bangalore zoo together and a monkey stole our masala chips!",
        },
        { "question" : "What was the proposal like?",
          "answer" : "Matthew spent weeks scouting out the *perfect* place to propose. Shakespeare Garden in San Francisco's Golden Gate park turned out to be the spot. Matt tricked Carolyn into having dinner with her good friend Yolanda while he secretly met up with his roommates, Elliot and Lawrence, to set up a romantic display of lanterns in the secluded garden. He proposed to Carolyn under the lights with a poem :) **swoon!!**"
        },
        { "question" : "Where's your honeymoon?",
          "answer" : "Vail, Colorado for some wildflower hikes, hot springs, and summer night music!"
        },
        { "question" : "What does she love about him?",
          "answer" : "Carolyn is constantly amazed, inspired, and spoiled by Matt's patience, boundless generosity, devotion to his family, infinite wisdom for how to build things (including a cat tower), willingness to wash the dishes, ability to read a textbook without falling asleep, ability to teach Carolyn something while she's falling asleep, his dad jokes, and his thicccc luscious eyebrows."
        },
        { "question" : "What does he love about her?",
          "answer" : "Matt loves the way Carolyn's voice changes when she talks about food or dogs, the sly look she gives him when she wants to quit working and start watching a movie, her willingness to try new things with him (skiing and hiking, yay!), her supportiveness, generosity, and kindness towards others, the way she's been a big sister to his sisters, her terrible puns, and her boa constrictor hugs."
        },
        { "question" : "What do you two do for fun?",
          "answer" : "We love to cook and EAT, hike and (more recently) ski, do our taxes (JUST KIDDING), make random things (like a cat tower), and lounge around watching shows like The Office together. Occasionally we will find ourselves chatting about robots, but we would much rather talk about dogs. Oh, and wedding planning has been plenty fun as well :)."
        },
        { "question" : "What are you most excited for?",
          "answer" : "We are incredibly excited to set up our own kitchen (we seriously spend the most time there), explore more of the world on conference money, raise a few adorable children, teach them everything we know and everything we don't know, laugh at each other's jokes before they're said, and to truly grow old together."
        },
    ];

    var qaid = 0;

    $("#la_qa").click(function() {
        qaid = qaid - 1;
        if (qaid < 0) {
            qaid = qanda.length - 1;
        }
        $("#question").text(qanda[qaid]["question"]);
        $("#answer").text(qanda[qaid]["answer"]);
    });

    $("#ra_qa").click(function() {
        qaid = qaid + 1;
        if (qaid == qanda.length) {
            qaid = 0;
        }
        $("#question").text(qanda[qaid]["question"]);
        $("#answer").text(qanda[qaid]["answer"]);
    });

});
