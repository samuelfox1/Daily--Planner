# Daily-Planner

https://samuelfox1.github.io/Daily-Planner/

[unlocked task](Assets/screenshots/01-Daily-Planner-unlocked-task-bar.png)
[locked task](Assets/screenshots/02-Daily-Planner-locked-taskbar.png)

This project was built to track the simple events throughout the day.
The app features the date and time at the top of the page and holds a time slot for each business hour of the day.

A user can use the blue 'unlock' button on the right of each text box to activate the text box and add tasks for the day.
After adding a new task, click the corresponding red lock button to deactivate the text infut, and also store your entry in your local browser storage.
This way, your tasks will not be deleted until you complete them and remove them.

The time slots for each day are dynamically colorcoded as well.
Each morning, the time slots will all start out green.
The current hour's box will be highlighted in red, the past boxes will turn grey.
All future boxes will stay green, until the next hour approaches and highlight the new hour in red.

The app features a simplistic design using Twitter's bootstap html features. 
The dynamic features are ran in javascript jQuery.


The code is pretty lengthy and redundant at times. The project was great practice for me and has helped me develope my javascript and jQuery knowledge.
After designing the apps lock/unlock buttons with booleans stashed in an array, I learned and understood the benefit of the 'this' keyword and targeting parent elements to handle redundant functions. This is something that would have made this project much much easier to develope, and easier for others to read the code! I had a fun time learning about arrrays and obects in arrays, utilizing the 'set' and 'get' methods for a browsers localStorage, and coming up with some unique ways to monitor button toggle positions.

Thank you for reading,

--Samuel Fox--
 
