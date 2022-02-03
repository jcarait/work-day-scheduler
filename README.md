# Work day Scheduler

In Week 05 of the coding bootcamp by University of Sydney and Trilogy of education, we learnt about Third Party APIs such as jquery, bootstrap and a library for working with time called Moment.js.

---

[Github deployed application](https://jcarait.github.io/work-day-scheduler/)

## User Story

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## 3rd Party Libraries used in this project

- jQuery
- Bootstrap
- Moment.js

## Features

- Current local time and date is displayed on top of page
- Enter event or task in blank box which can be saved
- When refreshed, the page will continue to display any saved events or tasks
- Hour blocks in the past are grey :notebook: current in red :closed_book: future in green :green_book:

## Demo

![A user clicks on blank text area on colour-coded calendar and tests the functionality of the scheduler](./assets/images/work-day-scheduler.gif)
