// acceptance criteria for reference

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

function update() {
    $("#currentDay").html(moment().format("ddd MMM Do, YYYY, hh:mm:ss A"))
}

setInterval(update, 1000);

function updateHour() {
    var hour = moment().hours();
    console.log(hour)

    $(".hour-block").each(function() {

        var currentHour = parseInt($(this).attr("id"));

        if ( currentHour === hour) {
            $(this).addClass("present");
        } else if (currentHour > hour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    });



}

updateHour();
setInterval(updateHour, 60000);

