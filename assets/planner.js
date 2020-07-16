$(document).ready(function() {

    // Prints time to jumbotron from moment.js
    let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(dateTime);

    // Create array variables for for-loop
    let createRow = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createTextarea = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createButton = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createSaveImg = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // For-loop for creating timeblocks in HTML
    for (let i = 9; i < 18; i++) {

        // Create the shell for each timeblock
        createRow[i-9] = $("<row>");
        createRow[i-9].attr("class", "row time-block");
        createRow[i-9].attr("data-row", i);
        $(".container").append(createRow[i-9]);

        // Create the time column in each timeblock
        createHour[i-9] = $("<div>");
        createHour[i-9].attr("class", "col-1 hour");
        if (i >= 9 && i <= 11) {
            createHour[i-9].html(i + " am");
        } else if (i === 12) {
            createHour[i-9].html(i + " pm");
        } else {
            createHour[i-9].html((i-12) + " pm");
        }
        createHour[i-9].attr("data-hour", i);
        createRow[i-9].append(createHour[i-9]);

        // Create the textarea in each timeblock
        createTextarea[i-9] = $("<textarea>");
        createTextarea[i-9].attr("class", "col-10 description");
        createTextarea[i-9].attr("data-text", i);
        createRow[i-9].append(createTextarea[i-9])

        // Create the save button in each timeblock
        createButton[i-9] = $("<button>");
        createButton[i-9].attr("class", "col-1 saveBtn");
        createButton[i-9].attr("data-save", i);
        createRow[i-9].append(createButton[i-9]);

        // Include the floppy disk image for each save button
        createSaveImg[i-9] = $("<i>");
        createSaveImg[i-9].attr("class", "fa fa-save");
        createButton[i-9].append(createSaveImg[i-9]);

        // Assign color for the text area in each timeblock
        let blockHour = createHour[i-9].attr("data-hour");
        let momentHour = moment().hour();

        if (blockHour == momentHour) {
            createTextarea[i-9].addClass("present");
        }
        else if (blockHour < momentHour) {
            createTextarea[i-9].addClass("past");
        }
        else if (blockHour > momentHour) {
            createTextarea[i-9].addClass("future");
        }

    }
    
    // Click function to save text from the respective timeblock to local storage
    $(".saveBtn").click(storeText);

    // Gets text from local storage upon rendering or refreshing page
    retrieveText();

    // Function for storing text to local storage by clicking the respective timeblock's save button
    function storeText() {

        let hourNum = $(this).attr("data-save");
        let saveText = createTextarea[hourNum-9].attr("data-text", hourNum).val().trim();
        localStorage.setItem("textarea" + hourNum, saveText); 
        console.log(localStorage);

    }

    // Function for retrieving text from local storage and printing it into the textarea 
    function retrieveText() {

        let getText = [9, 10, 11, 12, 13, 14, 15, 16, 17];

        for (let i = 9; i < 18; i++) {

            getText[i-9] = localStorage.getItem("textarea" + i);
            let printText = createTextarea[i-9].attr("data-text", i);
            printText.html(getText[i-9]);  

        }
    }

    // Create a clear-all button which clears local storage
    let clearBtn = $("<button>");
    clearBtn.attr("id", "clear");
    clearBtn.addClass("motion");
    clearBtn.html("Clear Timeblocks");
    $("header").append(clearBtn);

    // Click function to clear textarea values in local storage and reload page
    clearBtn.click(function() {
        let askConfirm = confirm("Are you sure you want to clear all timeblocks?");
        
        // Confirm prompt to caution user before clearing textareas on page and in local storage
        if (askConfirm) {
            for (let i = 9; i < 18; i++) {
                localStorage.removeItem("textarea" + i);
            }
            location.reload();
        }
    });

    // Create a refresh button for user's convenience to reload page
    let refreshBtn = $("<button>");
    refreshBtn.attr("id", "refresh");
    refreshBtn.addClass("motion");
    refreshBtn.html("Refresh Timeblocks");
    $("header").append(refreshBtn);

    // Click function for refresh button to reload page
    refreshBtn.click(function() {
        location.reload();
    });
    
    // Create a save-all button for user's convenience
    let saveAllBtn = $("<button>");
    saveAllBtn.attr("id", "save-all");
    saveAllBtn.addClass("motion");
    saveAllBtn.html("Save All Timeblocks");
    $("header").append(saveAllBtn);

    // Click function to save every timeblock's text in one click into local storage
    saveAllBtn.click(function() {
        for (let i = 9; i < 18; i++) { 
            let saveText = createTextarea[i-9].attr("data-text", i).val();
            localStorage.setItem("textarea" + i, saveText); 
        }
    });

});



