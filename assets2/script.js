console.log('linked!')
//check console log to view eventsToday and lockBtn object arrays
//also to verify clock time in referenct to page time slots


//moment.js link to month and displayed on screen
var month = moment().format('MMMM')
$('.display-3').text(month)

//moment.js link to day and time then displayed on the screen
var day = moment().format('dddd Do YYYY')
var time = moment().format('kk:mm');
$('#currentDay').append(day)
$('#currentTime').append(time)
var currentHour = moment().format('k')


//establish global variables
var timeSlots = 10
var hour = ''
var event = ''
var eventsToday = []
var lockBtn = []
var x = ''
var y = ''
var z = ''
var a = ''


//check each class tag string (stored in eventsToday[].hour) & compare to var currentHour.
//append styling attributes to textboxes according to past, present or future hour status
function timeChecker() {
    console.log(`current hour = ${currentHour}:00`)
    for (let i = 0; i < 10; i++) {
        var element = eventsToday[i].listTxt

        if (eventsToday[i].hour === `${currentHour}:00`) {
            console.log(`current hour = ${eventsToday[i].hour}`)
            $(element).attr('id', 'present')
        }
        if (parseInt(eventsToday[i].hour) < parseInt(`${currentHour}:00`)) {
            console.log(`past hour = ${eventsToday[i].hour}`)
            $(element).attr('id', 'past')

        }
        if (parseInt(eventsToday[i].hour) > parseInt(`${currentHour}:00`)) {
            console.log(`future hour = ${eventsToday[i].hour}`)
            $(element).attr('id', 'future')
        }
    }
}

//build object array to house toggle button booleans tracking our lock/unlock button position
// UPDATE-- learned about 'this' keyword and targeting relaties -- would have been much easier
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
    console.log(lockBtn)
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
    console.log(eventsToday)
}




// list of button click listeners tagged to each button and the values to use in textBoxToggle function
$('.listBtn-0').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-0', '.listTxt-0', 0)
})
$('.listBtn-1').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-1', '.listTxt-1', 1)
})
$('.listBtn-2').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-2', '.listTxt-2', 2)
})
$('.listBtn-3').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-3', '.listTxt-3', 3)
})
$('.listBtn-4').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-4', '.listTxt-4', 4)
})
$('.listBtn-5').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-5', '.listTxt-5', 5)
})
$('.listBtn-6').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-6', '.listTxt-6', 6)
})
$('.listBtn-7').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-7', '.listTxt-7', 7)
})
$('.listBtn-8').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-8', '.listTxt-8', 8)
})
$('.listBtn-9').on('click', function (event) {
    event.preventDefault()
    textBoxToggle('.listBtn-9', '.listTxt-9', 9)
})

// when a button is clicked, chek its boolean status.
//If locked, unlocked and change styling and attributes accordingly.
//If unlocked, change styling and attributes accordingly and store data in local storage
function textBoxToggle(x, y, z) {

    if (lockBtn[z].status === true) {
        //unlock text box
        lockBtn[z].status = false
        $(y).removeAttr('disabled')
        $(x).text('lock')
        $(x).attr('id', 'unlockedBtn')

    } else {
        //lock text box
        lockBtn[z].status = true
        var newEntry = $(y).val()
        $(y).attr('disabled', 'disabled')
        $(x).text('unlock')
        $(x).attr('id', 'lockedBtn')
        eventsToday[z].entry = newEntry
        localStorage.setItem("eventsToday", JSON.stringify(eventsToday))
    }
}


//check local storage for saved entries.
//if local storage exists, use this data to display on screen.
//loop through the eventsToday index object to retrieve .entry values and write them to their 
//associated text boxes referenced from the eventsToday.listHr value
function pullLocalStorage() {
    var storedEvents = JSON.parse(localStorage.getItem('eventsToday'))

    if (storedEvents !== null)
        eventsToday = storedEvents

    for (let i = 0; i < eventsToday.length; i++) {
        $(eventsToday[i].listHr).append().text(eventsToday[i].hour)
        var storedEntry = eventsToday[i].entry
        $(eventsToday[i].listTxt).val(storedEntry)
    }
    timeChecker()
}

//start process to retrieve local storage values
pullLocalStorage()