$(document).ready(function(){ 
    $('#envoi').click(function() {
 
        let firstname = $('#firstname').val();
        let lastname = $('#lastname').val();
        let phone = $('#phone').val();
        let mail02 = $('#mail02').val();
        let street = $('#street').val();

        $.ajax({
            url:'https://slack.com/api/chat.postMessage',
            type: "POST",
            data: {
                "channel": "bot",
                "text": firstname + "\n" + lastname + "\n" + phone + "\n" + mail02 + "\n" + street,
                "token": creds.token,
            },
            dataType: "text"
        }).done(function (response) {
        console.log(response)
        }).fail(function (error) {
        console.log(error)
        })
})
})