$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var intro = $("select#intro-class").val();
    var track = $("select#front-back-end").val();
    var size = $("select#company-size").val();
    var build = $("select#building").val();
    var interest = $("select#interested").val();

    console.log(intro);
    console.log(track);
    console.log(size);
    console.log(build);
    console.log(interest);


    if (intro === "No"){
      $("#track-intro").show();
    } else {
      $("#track-intro").hide();
    }
    if (track === "Front-end all the way!"){
      $("#track-webdev").show();
    } else if (track === "How about a combination!") {
      $("#track-ruby").show();
    }


  });
});
