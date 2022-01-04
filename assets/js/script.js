

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

var saveSchedule = $(".save-btn");
var clearSchedule = $(".clear-btn");

function update() {
    $("#currentDay").html(moment().format("ddd MMM Do, YYYY, hh:mm:ss A"))
}

setInterval(update, 1000);


// updates id with past, present or future -- css is pre-setup to display relevant colours
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

saveSchedule.on("click", function() {

    var storeHour = $(this).siblings(".hour").text();
    var storeEvent = $(this).siblings(".event").val();

    localStorage.setItem(storeHour, storeEvent);
});

clearSchedule.on("click", function() {

    $(".hour").each(function() {
        $(this).siblings(".event").val("");
    });

    localStorage.clear();
});

function getEvents() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentEvent = localStorage.getItem(currentHour);

        if (currentEvent !== null) {
            $(this).siblings(".event").val(currentEvent);
        }
    });
}





updateHour();
getEvents();
setInterval(updateHour, 60000);

