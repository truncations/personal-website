const today = new Date();
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const weekday = weekdays[today.getDay()];

var weekday_element
var time_element

window.onload = function onLoad() {
    weekday_element = document.getElementById("today-weekday")
    time_element = document.getElementById("today-time")
    main()
}

function main() {
    weekday_element.textContent = weekday
    time_element.textContent = today.toLocaleTimeString()
}