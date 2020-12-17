console.log('linked!')

//header clock features
var day = moment().format('LL');
var time = moment().format('LT');
$('#currentDay').append(day)
$('#currentTime').append(time)

//refresh page every minute to keep clock up to date
// setInterval(function () {
//     location.reload()
// }, 60000)


var timeSlots = 10
var hour = ''
var event = ''
var eventsToday = []
var lockBtn0 = true
var lockBtn = []
var x = ''
var y = ''
var z = ''
var a = ''

buildLockBtnArray()

function buildLockBtnArray() {

    if (lockBtn < timeSlots) {
        for (let i = 0; i < timeSlots; i++) {
            var object = {
                button: i,
                status: true,
            }
            lockBtn.push(object)
        }
    }
}


//build local array
buildEventsArray()

function buildEventsArray() {
    // if events today is short or empty, create the array, avoids building second time as well
    if (eventsToday.length < timeSlots) {
        //list will start at 7:00
        var x = 7
        for (let i = 0; i < timeSlots; i++) {
            var object = {
                hour: `${x}:00`,
                entry: '',
                listTxt: `.listTxt-${i}`,
                listBtn: `.listBtn-${i}`,
                listHr: `.hour-${i}`,
            }
            eventsToday.push(object)
            x++
        }
    }
}






// list 0 instructions
$('.listBtn-0').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-0', '.listTxt-0', 0)
})

// list 1 instructions
$('.listBtn-1').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-1', '.listTxt-1', 1)
})

// list 2 instructions
$('.listBtn-2').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-2', '.listTxt-2', 2)
})

// list 3 instructions
$('.listBtn-3').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-3', '.listTxt-3', 3)
})

// list 4 instructions
$('.listBtn-4').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-4', '.listTxt-4', 4)
})

// list 5 instructions
$('.listBtn-5').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-5', '.listTxt-5', 5)
})

// list 6 instructions
$('.listBtn-6').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-6', '.listTxt-6', 6)
})

// list 7 instructions
$('.listBtn-7').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-7', '.listTxt-7', 7)
})

// list 8 instructions
$('.listBtn-8').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-8', '.listTxt-8', 8)
})

// list 9 instructions
$('.listBtn-9').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-9', '.listTxt-9', 9)
})






function textBoxToggle(x, y, z) {

    if (lockBtn[z].status === true) {
        //unlock text box
        lockBtn[z].status = false
        $(y).removeAttr('disabled')
        $(x).text('lock')

    } else {
        //lock text box
        lockBtn[z].status = true
        var newEntry = $(y).val()
        $(y).attr('disabled', 'disabled')
        $(x).text('unlock')
        eventsToday[z].entry = newEntry
        localStorage.setItem("eventsToday", JSON.stringify(eventsToday))
    }
}







//PULL DATA FROM LOCAL STORAGE
function pullLocalStorage() {

    //creat data array 'eventsToday' for local storage to work with
    //pull in events stored in local storage
    var storedEvents = JSON.parse(localStorage.getItem('eventsToday'))

    //if events are pulled in, update eventsToday Array
    if (storedEvents !== null)
        eventsToday = storedEvents

    for (let i = 0; i < eventsToday.length; i++) {

        $(eventsToday[i].listHr).append().text(eventsToday[i].hour)
        // convert stored event text to text on screen}
        var storedEntry = eventsToday[i].entry
        $(eventsToday[i].listTxt).val(storedEntry)

    }
}






pullLocalStorage()







//PULL DATA FROM LOCAL STORAGE
// function pullLocalStorage() {

    //creat data array 'eventsToday' for local storage to work with
    //pull in events stored in local storage
    // var storedEvents = JSON.parse(localStorage.getItem('eventsToday'))

    //if events are pulled in, update eventsToday Array
    // if (storedEvents !== null)
    //     eventsToday = storedEvents

    // $('.hour-0').append().text(eventsToday[0].hour)
    // convert stored event text to text on screen}
    // var storedEntry = eventsToday[0].entry
    // $('.listTxt-0').val(storedEntry)

// }

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
