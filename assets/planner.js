$(document).ready(function() {

    let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);

    let createRow = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createTextarea = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createButton = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let createSaveImg = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (let i = 9; i < 18; i++) {

        createRow[i-9] = $("<row>");
        createRow[i-9].attr("class", "row time-block");
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
        createRow[i-9].append(createHour[i-9]);

        createTextarea[i-9] = $("<textarea>");
        createTextarea[i-9].attr("class", "col-10 description");
        createRow[i-9].append(createTextarea[i-9])

        createButton[i-9] = $("<button>");
        createButton[i-9].attr("class", "col-1 saveBtn");
        createRow[i-9].append(createButton[i-9]);

        createSaveImg[i-9] = $("<i>");
        createSaveImg[i-9].attr("class", "fa fa-save");
        createButton[i-9].append(createSaveImg[i-9]);

    }

    let enterText = $(".description"); 

    $(".saveBtn").click(storeText);

    function storeText() {
        // textBox.html(textBox.val());
        localStorage.setItem("textarea", enterText.val()); 
    }

    function retrieveText() {
        let getText = localStorage.getItem("textarea");
        $(".description").html(getText);    
    }

    retrieveText();

    console.log(localStorage);
    
});


