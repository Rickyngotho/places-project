//Business Logic
function Place(destination, location, time, landmarks) {
  this.destination = destination;
  this.location = location;
  this.timeOfYear = time;
  this.landmarks = landmarks;
}

Place.prototype.details = function() {
  return this.destination + ", " + this.location;
}
//User Interface Logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedDestination = $("input#new-destination").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedTimeOfYear = $("input#new-time-of-year").val();
    var inputtedLandmarks = $("input#new-landmarks").val();

    var newPlace = new Place(inputtedDestination, inputtedLocation, inputtedTimeOfYear, inputtedLandmarks);

    $("ul#places").append("<li><span class='place'>" + newPlace.details() + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.destination);
      $(".destination").text(newPlace.destination);
      $(".location").text(newPlace.location);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".landmarks").text(newPlace.landmarks);
    });
    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-time-of-year").val("");
    $("input#new-landmarks").val("");
  });
});
