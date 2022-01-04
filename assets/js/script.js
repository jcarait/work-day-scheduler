var saveSchedule = $(".save-btn");
var clearSchedule = $(".clear-btn");

//display current time and date
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

//save key and text area to local storage
saveSchedule.on("click", function() {

    var storeHour = $(this).siblings(".hour").text();
    var storeEvent = $(this).siblings(".event").val();

    localStorage.setItem(storeHour, storeEvent);
});

// clear schedule button
clearSchedule.on("click", function() {

    $(".hour").each(function() {
        $(this).siblings(".event").val("");
    });

    localStorage.clear();
});

//obtains data from local storage and displays on scheduler
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