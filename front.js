
const collectionOfDiv = document.querySelectorAll("#collectionOfDiv")
const Navbar = document.querySelectorAll("#Nav_bar");
const links = document.querySelectorAll(".a");
const imagePart = document.querySelectorAll("#image_part");
const image = document.querySelectorAll("#img");
const contentPart = document.querySelectorAll("#content_part");
const feedback = document.querySelectorAll("#feedback");
const footer = document.querySelectorAll("footer");
//add email regex 
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// display none while loading page
//loading sign while loading page
const loader = document.querySelector("#loader");
window.addEventListener("load", function(){
    alert("Explore more with me and don't forget to give feedback");
    loader.style.display = "none";
});

//onclick submit button and showed submitted after clicked button and add alert after submitting feedback
    document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); //when i submit the form the page will refresh and form data will be disappear so preventDefault helps to stop that.
//if there is empty place in form, donot submit form and give reminder about the emty field
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var country = document.getElementById('country');
    var email = document.getElementById('email');
    var feedback = document.getElementById('feedback1');

    if (!firstname.value) {
        alert('Please fill the Firstname field');
    } else if (!lastname.value) {
        alert('Please fill the Lastname field');
    } else if (!country.value) {
        alert('Please fill the Country field');
    } else if (!email.type) {
        alert('Please fill the Email Id field');
    } 
    else if (!emailRegex.test(email.value)) {
    alert('Please enter a valid Email Id');
    }
    else if (!feedback.value) {
        alert('Please fill the Feedback field');
    } else {
        alert("Thank You for submitting feedback");
        return;//this return will stop the function if an input is filled.
    }
});


