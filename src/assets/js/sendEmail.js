var applicationForm = {
    email: {
        presence: { message: "Please fill in your email" },
        email: true,
    },

    motivation: {
        presence: { message: "Don't be shy and share your thoughts with us :)" },
    },

    strengths: {
        presence: { message: "Don't be shy and share your thoughts with us :)" },
    },

    resume: {
        presence: { message: "Please attach your resume" },
    }
};

(function() {
    $('#application-form').submit(function(event) {
        event.preventDefault();
        var data = validate.collectFormValues(event.target);
        var errors = validate(data, applicationForm, { fullMessages: false }); 

        $('.has-error').removeClass('has-error');
        $('.error-message').remove();

        if (errors) {
            for (var name in errors) {
                $('[name="' + name + '"').parent().append('<div class="text-danger error-message top-xs">' + errors[name] + '</div>');
                $('[name="' + name + '"').parent().addClass('has-error');
            }

            return;
        }

        var questionMotivation = $('#motivation').parent().find('label').text();
        var questionStrengths = $('#strengths').parent().find('label').text();

        var data = {
            jobTitle: data.jobTitle,
            email: data.email,
            message: questionMotivation + '\n' + data.motivation + '\n\n' + questionStrengths + '\n' + data.strengths,
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
})();
