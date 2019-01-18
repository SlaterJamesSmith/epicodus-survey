$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();


    var intro = parseInt($("select#intro").val());

    console.log(intro);

    if (intro === 1){
      $("#track-intro").show();
    }


  });
});
