(function() {
    $('#subscribe-form').on("submit", function(e) {
        e.preventDefault();
        var email = $('#subscribe-email').val();

        if (!email) {
            return;
        }

        var sendData = {
            email: email,
            groupId: '8863726'
        };

        $.ajax({
            type: 'POST', 
            url: 'https://arlku5gotf.execute-api.us-east-1.amazonaws.com/production/subscribe-list',
            data: JSON.stringify(sendData),
            contentType: 'application/json',
            beforeSend: function() {
                $('#subscribe-btn').prop('disabled', true);
                $('#subscribe-btn').text('Subscribing...');
            },
            success: function(data) {
            },
            error: function(err) {
            },
            complete: function(err) {
                $('#subscribe-btn').prop('disabled', false);
                $('#subscribe-btn').text('Subscribe');
                $('#subscribe-email').val('');
            }
        });
    })
})();
