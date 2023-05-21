let year = document.querySelector("#year");

$(document).ready(function () {
year.innerText = new Date().getFullYear();
}); 


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
event.preventDefault(); // Prevents the default form submission behavior

alert('Query Submitted');
const formData = new FormData(event.target); // Get the form data

// Log the form data to the console
console.log('First Name:', formData.get('name'));
console.log('Email:', formData.get('email'));
console.log('Phone:', formData.get('phone'));
console.log('Message:', formData.get('message'));

// You can add your own code here to handle the form submission, such as sending it to a server using AJAX.
});


jQuery("input[type='text']").on("keyup", function () {
    if (jQuery(this).val() != "" ) {
        if (jQuery("#FullName").val() != '')
        {
            jQuery("#contact100-form-btn").removeAttr("disabled");
        }
    } else {
        jQuery("#contact100-form-btn").attr("disabled", "disabled");
    }
});
