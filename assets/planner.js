$(document).ready(function() {

    let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
    
    // function createRow() {
    //     let row = $("<div>");
    //     row.addClass("row");
    //     row.add
    //     $(".container").append(row);

    //     console.log("hi");

    //     function createColumns() {
    //         let column1 = $("<div>");
    //         let column8 = $("<div>");
    //         let column1A = $("<div>");
    //         column1.addClass("col-1 time-block");
    //         column8.addClass("col-8 description");
    //         column1A.addClass("col-1 saveBtn");
    //         $(".row").append(column1);
    //         $(".row").append(column8);
    //         $(".row").append(column1A);
    //     }

    //     createColumns();

    // }

    // createRow();

    let textBox = $("#textarea"); 

    $(".saveBtn").click(storeText);

    function storeText() {
        // textBox.html(textBox.val());
        localStorage.setItem("textarea", textBox.val()); 
    }

    function getText() {
        let enterText = localStorage.getItem("textarea");
        $("#textarea").html(enterText);    
    }

    $("#clear").click(clearStorage);

    function clearStorage() {
        localStorage.clear();
        $("#textarea").empty();
    };

    getText();

    console.log(localStorage);
    
});


