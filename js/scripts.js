// Main function which is called in the contact us page and runs the other functions
function validateForm() {
  if (nameEnteredCheck() != false && emailEnteredCheck() != false && telNoEnteredCheck() != false && messageEnteredCheck() != false && telNoLengthCheck() != false) { 
    formSubmit();
  }
}

// Checks if the name box is empty
function nameEnteredCheck() {
  var x = document.contactUsForm.name.value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Checks if the email box is empty
function emailEnteredCheck() {
  var x = document.contactUsForm.email.value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}

// Checks if the telephone number box is empty
function telNoEnteredCheck() {
  var x = document.contactUsForm.telNo.value;
  if (x == "") {
    alert("Telephone Number must be filled out");
    return false;
  }
}

// Checks if the message box is empty
function messageEnteredCheck() {
  var x = document.contactUsForm.message.value;
  if (x == "") {
    alert("A message must be entered");
    return false;
  }
}

// Checks if the telephone number is 11 characters long
function telNoLengthCheck() {
  var x = document.contactUsForm.telNo.value;
  if (x.length != 11) {
    alert("Telephone number must be 11 digits");
    return false;
  }
}

// Shows a message saying that the form has been submitted if all other checks completed
function formSubmit() {
    alert("The form was submitted");
}