// Attaching an event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault(); // PreventS default form submission behavior
    validateForm(); // CallS the validateForm function
});

// Function to validate the form
const validateForm = () => {
    // Array containing the IDs of form fields to validate
    const fields = ['firstName', 'lastName', 'email', 'package'];
    let isValid = true; // Variable to track form validity

    // Loop through each field in the fields array
    fields.forEach(field => {
        // Gets the value of the current field and remove leading/trailing whitespace
        const value = document.getElementById(field).value.trim();
        // Gets the error element corresponding to the current field
        const errorElement = document.getElementById(`${field}Error`);
        errorElement.textContent = ''; // Clear any previous error messages

        // Validates first name and last name fields
        if (field === 'firstName' || field === 'lastName') {
            // Checks if the value contains at least 2 alpha characters
            if (value.length < 2 || !/^[A-Za-z]+$/.test(value)) {
                // Displays error message if validation fails
                errorElement.textContent = `${field === 'firstName' ? 'First' : 'Last'} name must contain at least 2 alpha characters.`;
                isValid = false; // Set isValid to false
            }
        } 
        // Validates email field
        else if (field === 'email') {
            // Checks if the value matches the email pattern
            if (!value.match(/^\S+@\S+\.\S+$/)) {
                // Displays error message if validation fails
                errorElement.textContent = 'Please enter a valid email address.';
                isValid = false; // Set isValid to false
            }
        } 
        // Validates package field
        else if (field === 'package') {
            // Checks if the value is empty (no package selected)
            if (value === '') {
                // Displays error message if validation fails
                errorElement.textContent = 'Please select a package.';
                isValid = false; // Set isValid to false
            }
        }
    });

    // Validates subscribe checkbox
    if (!document.getElementById('subscribe').checked) {
        // Displays error message if the subscribe checkbox is not checked
        document.getElementById('subscribeError').textContent = 'Please subscribe to proceed.';
        isValid = false; // Set isValid to false
    }

    // If the form is valid, calls the displaySummary function
    if (isValid) {
        displaySummary();
    }
};

// Function to display the form summary
const displaySummary = () => {
    // Gets the values of form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const package = document.getElementById('package').value;

    // Gets the summary element
    const summary = document.getElementById('summary');
    // Sets the text content of the summary element with form field values
    summary.textContent = `Thank you, ${firstName} ${lastName}, for subscribing! 
    Your email ${email} is registered with our ${package} package.`;
    summary.style.display = 'block'; // Displays the summary

    // Hides the form
    document.getElementById('interactiveForm').style.display = 'none';
};
