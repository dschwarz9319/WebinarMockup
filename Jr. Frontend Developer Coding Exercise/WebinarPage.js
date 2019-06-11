// Date the Webinar takes place
var countDownDate = new Date("Jun 14, 2019 17:00:00").getTime();

// Countdown to Webinar Function
var x = setInterval(function () {

    // Today's date and time
    var now = new Date().getTime();

    // Time displayed on countdown timer (time left until event)
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " Days, " + hours + " Hours, "
        + minutes + " Minutes " + seconds + " Seconds ";

    // If countdown reaches zero, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're sorry!! Please catch us at the next webinar!!";
    }
}, 1000);

//Function to sync up second checkbox button status to first one
function buttonOne() {
    //Local variables for both checkboxes
    var checkbox = document.getElementById('checkOne');
    var checkboxTwo = document.getElementById('checkTwo');

    //If the first checkbox is clicked, activate checkbox two
    if ((checkbox.checked == true) && (checkboxTwo.checked == false)) {
        checkboxTwo.checked = true;
    }

    //If the first checkbox is unclicked, deactivate checkbox two
    if ((checkbox.checked == false) && (checkboxTwo.checked == true)) {
        checkboxTwo.checked = false;
    }

}

//Function to sync up first checkbox button status to second one
function buttonTwo() {
    //local variables for both checkboxes
    var checkbox = document.getElementById('checkOne');
    var checkboxTwo = document.getElementById('checkTwo');

    //If the second checkbox is clicked, activate checkbox one
    if ((checkboxTwo.checked == true) && (checkbox.checked == false)) {
        checkbox.checked = true;
    }

    //If the second checkbox is unclicked, deactivate checkbox one
    if ((checkboxTwo.checked == false) && (checkbox.checked == true)) {
        checkbox.checked = false;
    }

}

//Function that calls API barring successul checking of checkboxes
function buttonAlert() {
    var checkbox = document.getElementById('checkOne');
    var checkboxTwo = document.getElementById('checkTwo');

    //If box checkboxes are checked, makes call to API and prints results below both blue buttons
    if ((checkbox.checked == true) && (checkboxTwo.checked == true)) {

        //I had trouble accessing the API, so I hardcoded the JSON object into the program
        var json = '{"submitbad":"Oops! Looks liker there is an error","submitok":"Congratulations! Your spot is reserved"}',
            obj = JSON.parse(json);

        //Prints out the submitok message below both blue buttons
        document.getElementById("APIcall").innerHTML = obj.submitok;
        document.getElementById("APIcallTwo").innerHTML = obj.submitok;
    }

    //If either checkbox is unclicked, prompts user with alert to check them before continuing
    if ((checkbox.checked == false) || (checkboxTwo.checked == false)) {
        alert("Please check off checkboxes before proceeding.")
    }
}
