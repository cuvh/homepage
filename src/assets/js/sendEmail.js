(function() {
    $('#send-application').click(function(event) {
        if(!validateInput('#email', "Please fill in your email")) {
            return;
        }

        if (!validateInput('#message-1', "Don't be shy and share your thoughts with us")) {
            return;
        }

        if (!validateInput('#message-2', "Don't be shy and share your thoughts with us")) {
            return;
        }

        if(!validateInput('#resume', "Please attach your resume")) {
            return;
        }

        var message1 = $('#message-1').val();
        var message2 = $('#message-2').val();

        var data = {
            email: $('#email').val(),
            message: message1 + '\n\n' + message2,
            file: {}
        };

        var file = $('#resume').prop('files')[0];

        var reader = new FileReader();

        reader.onload = function() {
            data.file.content = reader.result.substr(reader.result.indexOf(',') + 1);
            data.file.name = file.name;

            $.ajax({
                method: 'POST',
                url: 'https://cu6wdvhnai.execute-api.us-east-1.amazonaws.com/dev/submit-form',
                dataType: 'json',
                contentType: 'application/json',
                crossDomain: true,
                processData: false,
                data: JSON.stringify(data),
                success: function(data) {
                    $('#success-modal').modal();
                },
                error: function(data){

                }
            });
        };

        reader.readAsDataURL(file);
    });

    $('#resume').on('change', function(event) {
        var file = event.target.files[0];

        $('#resume-name').text(file.name || 'No resume selected');
    });

    function validateInput(inputElement, errorMessage) {
        var $inputElement = $(inputElement);

        $('.has-error').removeClass('has-error');
        $('.error-message').remove();

        if (!$inputElement.val()) {
            $inputElement.parent().append('<div class="text-danger error-message top-xs">' + errorMessage + '</div>');
            $inputElement.parent().addClass('has-error');
            return false;
        }

        return true;
    }
})();
