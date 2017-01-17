$.ajax({
   url: 'url',
   data: {
      format: 'json'
   },
   error: function() {
      console.log('An error has occurred');
   },
   dataType: 'jsonp',
   success: function(data) {
      /*var $title = $('<h1>').text(data.talks[0].talk_title);
      var $description = $('<p>').text(data.talks[0].talk_description);
      $('#info')
         .append($title)
         .append($description);*/
       console.log(data)
   },
   type: 'GET'
});

/* Tentativa com WebSocket
    var access_token = ''; 
    // Application OAuth Access Token
        
    //var socket = new WebSocket('wss://streamtip.com/ws?access_token=' + encodeURIComponent(access_token));
        
    socket.onopen = function(){
        alert("Connection open...");
    };
        socket.onmessage = function(){
        alert("Received Message : " + evt.data);
    };
        socket.onclose = function(){
        alert("Connection closed...");
    };
    socket.onmessage = function(message) {
        var event = JSON.parse(message.data);

        if(event.name === 'newTip') {
            // We got a new tip!
            console.log(event.data);
            /*
                {
                    "_id" : "5517a758964def7137164238",
                    "amount" : "100.00",
                    "cents" : 10000,
                    "channel" : "5456997a68db94ce04a5f4c3",
                    "currencyCode" : "USD",
                    "currencySymbol" : "$",
                    "date" : "2014-06-04T22:58:01.202Z",
                    "email" : "concerndoge@test.com",
                    "user" : {
                        "_id" : "5456997a68db94ce04a5f4c3",
                        "avatar" : "https://link.to/avatar/image.png",
                        "displayName" : "Test",
                        "name" : "test",
                        "provider" : "twitch",
                        "providerId" : 10101
                    },
                    "goal" : {
                        "_id" : "5455caccdd398acb7a28c3f0",
                        "user" : "55c3c0e744fd81974d98fdb5",
                        "cents" : 100000,
                        "description" : "testing",
                        "title" : "test goal",
                        "countReversals" : false,
                        "deleted" : false,
                        "startDate" : "2015-08-01T11:15:00.000Z",
                        "endDate" : "2015-08-05T11:15:00.000Z",
                        "amount" : "1000.00",
                        "progress" : {
                            "percentage" : 10.5,
                            "tips" : 2,
                            "amount" : "105.00",
                            "cents" : 10500,
                            "currencyCode" : "USD",
                            "currencySymbol" : "$"
                        },
                        "active" : true
                    },
                    "firstName" : "Test",
                    "lastName" : "User",
                    "note" : "such wow, very test",
                    "processor" : "PayPal",
                    "transactionId" : "4K2N0D835234BWKC",
                    "username" : "im_a_test_user"
                }
            *-/
        }
    };

    socket.onclose = function(err) {
        if(err.code === 4010) {
            console.log('authentication failed!!!');
        } else if(err.code === 4290) {
            console.log('rate limited');
        } else if(err.code === 4000) {
            console.log('bad request');
        }
    };
*/