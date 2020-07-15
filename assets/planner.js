$(document).ready(function() {

    let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(dateTime);

    let createRow = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createTextarea = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createButton = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createSaveImg = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (let i = 9; i < 18; i++) {

        createRow[i-9] = $("<row>");
        createRow[i-9].attr("class", "row time-block");
        createRow[i-9].attr("data-row", i);
        $(".container").append(createRow[i-9]);

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

        createTextarea[i-9] = $("<textarea>");
        createTextarea[i-9].attr("class", "col-10 description");
        createTextarea[i-9].attr("data-text", i);
        createRow[i-9].append(createTextarea[i-9])

        createButton[i-9] = $("<button>");
        createButton[i-9].attr("class", "col-1 saveBtn");
        createButton[i-9].attr("data-save", i);
        createRow[i-9].append(createButton[i-9]);

        createSaveImg[i-9] = $("<i>");
        createSaveImg[i-9].attr("class", "fa fa-save");
        createButton[i-9].append(createSaveImg[i-9]);

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
    
    $(".saveBtn").click(storeText);

    retrieveText();

    function storeText() {

        let hourNum = $(this).attr("data-save");
        let saveText = createTextarea[hourNum-9].attr("data-text", hourNum).val();
        localStorage.setItem("textarea" + hourNum, saveText); 
        console.log(localStorage);

    }

    function retrieveText() {

        let getText = [9, 10, 11, 12, 13, 14, 15, 16, 17];

        for (let i = 9; i < 18; i++) {

            getText[i-9] = localStorage.getItem("textarea" + i);
            let printText = createTextarea[i-9].attr("data-text", i);
            printText.html(getText[i-9]);  

        }
    }

    let clearBtn = $("<button>");
    clearBtn.attr("id", "clear");
    clearBtn.html("Clear Timeblocks");
    $("header").append(clearBtn);

    clearBtn.click(function() {
        localStorage.clear();
        location.reload();
    });

    let refreshBtn = $("<button>");
    refreshBtn.attr("id", "refresh");
    refreshBtn.html("Refresh Timeblocks");
    $("header").append(refreshBtn);

    refreshBtn.click(function() {
        location.reload();
    });
    
    let saveAllBtn = $("<button>");
    saveAllBtn.attr("id", "save-all");
    saveAllBtn.html("Save All Timeblocks");
    $("header").append(saveAllBtn);

    saveAllBtn.click(function() {
        for (let i = 9; i < 18; i++) { 
            let saveText = createTextarea[i-9].attr("data-text", i).val();
            localStorage.setItem("textarea" + i, saveText); 
        }
    });
});



