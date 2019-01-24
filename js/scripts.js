$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var intro = $("select#intro-class").val();
    var track = $("select#front-back-end").val();
    var size = $("select#company-size").val();
    var build = $("select#building").val();
    var interest = $("select#interested").val();
    if (intro === "No"){
      $("#track-intro").show();
    } else {
      $("#track-intro").hide();
    }
    if (build === "A TON of small, connected sites" && size === "Smaller or startup company" && track === "Back-end is my jam!") {
      $("#track-ruby").hide();
      $("#track-php").show();
      $("#track-webdev").hide();
      $("#track-java").hide();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (build === "Interactive web or phone apps" && size === "Smaller or startup company" && track === "Back-end is my jam!") {
      $("#track-ruby").show();
      $("#track-php").hide();
      $("#track-webdev").hide();
      $("#track-java").hide();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (build === "A TON of small, connected sites" && size === "Large company" && track === "Back-end is my jam!") {
      $("#track-ruby").hide();
      $("#track-php").show();
      $("#track-webdev").hide();
      $("#track-java").hide();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (build === "Interactive web or phone apps" && size === "Large company" && track === "Back-end is my jam!") {
      $("#track-ruby").hide();
      $("#track-php").hide();
      $("#track-webdev").hide();
      $("#track-java").show();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (build === "Business software" && size === "Large company" && track === "Back-end is my jam!") {
      $("#track-ruby").hide();
      $("#track-php").hide();
      $("#track-webdev").hide();
      $("#track-java").hide();
      $("#track-csharp").show()
      $("#more-info").hide();
    } else if (size === "Smaller or startup company" && track === "Back-end is my jam!") {
      $("#track-ruby").show();
      $("#track-php").show();
      $("#track-webdev").hide();
      $("#track-java").hide();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (size === "Large company" && track === "Back-end is my jam!") {
      $("#track-ruby").hide();
      $("#track-php").show();
      $("#track-webdev").hide();
      $("#track-java").show();
      $("#track-csharp").show();
      $("#more-info").hide();
    } else if (track === "Front-end all the way!"){
      $("#track-webdev").show();
      $("#track-ruby").hide();
      $("#track-php").hide();
      $("#track-java").hide();
      $("#track-csharp").hide()
      $("#more-info").hide();
    } else if (track === "How about a combination!") {
      $("#track-ruby").show();
      $("#track-webdev").hide();
      $("#track-php").hide();
      $("#track-java").hide();
      $("#track-csharp").hide();
      $("#more-info").hide();
    } else if (track === "Back-end is my jam!" && (size === "(select one)") || build === "(select one)") {
      $("#track-ruby").hide();
      $("#track-webdev").hide();
      $("#track-php").hide();
      $("#track-java").hide();
      $("#track-csharp").hide();
      $("#more-info").show();
    } else if (track === "Back-end is my jam!" && (size !== "(select one)" || build !== "(select one)")) {
      $("#track-ruby").hide();
      $("#track-webdev").hide();
      $("#more-info").hide();
    } else {
      $("#track-webdev").hide();
      $("#track-ruby").hide();
    }
    if (interest === "Beautiful content or user engagement" && size !== "(select one)" && track !== "(select one)" || interest === "Beautiful content or user engagement" && track === "How about a combination!") {
      $("#track-webdev").show();
    } else if (interest === "Internal sofware for big businesses" && size !== "(select one)" && track !== "(select one)" || interest === "Internal sofware for big businesses" && track === "How about a combination!") {
      $("#track-csharp").show();
    } else if (interest === "Databases or content managment" && size !== "(select one)" && track !== "(select one)" || interest === "Databases or content managment" && track === "How about a combination!") {
      $("#track-php").show();
    }
  });
});
