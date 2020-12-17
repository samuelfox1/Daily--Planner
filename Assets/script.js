console.log('linked!')

var day = moment().format('LL');
var time = moment().format('LT');

var eventsToday = [{
    hour: '9am',
    entry: '',
}, {
    hour: '10am',
    entry: ''
}]


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$('#currentDay').append(day)
$('#currentTime').append(time)

var lockTxtBtn9am = true
console.log($('.9amBtn').text())




//9am lock/ unlockl text
$('.9amBtn').on('click', function (event) {
    event.preventDefault()

    if (lockTxtBtn9am === true) {
        //unlock text box
        lockTxtBtn9am = false
        $('.9amText').removeAttr('disabled')
        $('.9amBtn').text('lock')

    } else {
        //lock text box
        lockTxtBtn9am = true
        var newEntry = $('.9amText').val()
        $('.9amText').attr('disabled', 'disabled')
        $('.9amBtn').text('unlock')
        eventsToday[0].entry = newEntry
        localStorage.setItem("eventsToday", JSON.stringify(eventsToday))
        console.log(eventsToday)

    }
})






//PULL DATA FROM LOCAL STORAGE
function pullLocalStorage() {

    //pull in events stored in local storage
    var storedEvents = JSON.parse(localStorage.getItem('eventsToday'))

    //if events are pulled in, update eventsToday Array
    if (storedEvents !== null)
        eventsToday = storedEvents

    loadPage()
}


function loadPage() {
    var storedEntry = eventsToday[0].entry

    $('.9amText').val(storedEntry)
}



pullLocalStorage()

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
