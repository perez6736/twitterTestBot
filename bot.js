console.log("Bot is starting.");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var tweet = { 
	status: 'my first post from node!' 
}

//test a post request by tweeting something. 
T.post('statuses/update', tweet, tweeted);

// returns an integer that tells you how many days until xmas
function calculateDaysUntilXmas(){
			var d = new Date();
		    var minutes = 1000*60;
            var hours = minutes*60;
            var days = hours*24;
            var year = d.year;

            //if(todays date is between 12/26 - 12/31)
            	//year++

            //todays date
            var todaysDate = 
            var christmasDay = getDateFromFormat("12/25/" + year, "M/d/y");

            var diff_date = Math.round((christmasDay - todaysDate)/days);
            alert("Diff date is: " + diff_date );
}


function tweeted(err, data, response) {
	if(err){
		console.log("something went wrong");
		console.log(err);
	}
	else{
  		console.log("it worked!");
  	}
}