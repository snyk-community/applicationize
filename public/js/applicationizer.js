$(document).ready(function() { 
    "use strict";
    
    // Handle applicationize form submit
    $('.applicationize-form').submit(function(e)
    {
        // Get input URL
        var url = $(this).find('input[name="url"]').val();
        
        // No URL?
        if (!url) {
            alert('Please enter a valid web app URL to applicationize.');
            return e.preventDefault();
        }
        
        // Verify protocol
        if (url.substring(0, 4) !== 'http') {
            alert('Please provide a valid web app URL.\r\nExample: https://www.messenger.com/');
            return e.preventDefault();
        }
        
        // Grab spinner and submit elements
        var submit = $(this).find('.submit');
        var spinner = $(this).find('.spinner');
        
        // Hide submit button and show spinner
        submit.hide();
        spinner.show();
        
        // Wait a few seconds (ugly hack since we don't know when the file has been downloaded)
        setTimeout(function() {
            // Flip the visibility back to normal
            spinner.hide();
            submit.show();
        }, 2500);
    });
});