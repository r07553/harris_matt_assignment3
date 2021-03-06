//alert("JavaScript works!");
// Matt Harris
// SDI 1301
// Project 3
// 1/24/2013
// More Video Games

// Start

// Global Variables
var myName = "Matt";
var myFavGames = ["Black Ops II", " Far Cry 3", " Borderlands 2", " Zelda Skyward Sword"];
var myConsoles = 3;
var freeTime = true;
var minutesPerGame = [54, 65, 13, 40]

console.log("Hello my name is " + myName + ", it is " + freeTime + " that I like to play games in my free time.");
console.log("My favorite games are; " + myFavGames + ".");
console.log("I have " + myConsoles + " game consoles.");

// JSON Data
var iPlay = {
	"myGames": {
		"game1": {
			"name": "Black Ops II",
			"console": "Xbox 360"
		},
		"game2": {
			"name": "Far Cry 3",
			"console": "Xbox 360"
		},
		"game3": {
			"name": "Borderlands 2",
			"console": "PS3"
		},
		"game4": {
			"name": "Zelda Skyward Sword",
			"console": "Wii"
		}
	}
};

console.log( iPlay.myGames );

// Method Procedure
var playTime = {
	hoursToPlay: function(freeHours){
	if (freeHours > 1) {
		console.log("I have " + freeHours + " hours to play games before I do my homework!");	
		} else {
			console.log("I dont have time for games today.")
		}	
		}
		
};

playTime.hoursToPlay(5)

//Boolean Function
console.log("Before I start playing games I want to get something to eat.");

var iEat = { 
	myMeal: function(slicesOfPizza, pop){
	if(slicesOfPizza + pop > 0) {
		var full = true
		return full; 
	} else {
		var hungry = false
		return hungry;
	}
	}
};


console.log("It is " + iEat.myMeal(4,1) + " that I eat pizza and drink pop, then I have to clean up the dishes!");

// Number Function With Accessor 
var chores = {
    cleanup: function(dishes){
	while (dishes < 4) {
		console.log(dishes + " dishes cleaned.");
		dishes = dishes + 1;
	}
	return dishes;
	}
};


console.log(chores.cleanup(0) + " dishes cleaned. Now to start playing video games!");

// String Function

var whatToPlay= {
	consoleToPlay: function(thisConsole, thatConsole){
	var microsoft = (" is fun to play with my friends.");
	var sony = (" has great graphics.")
	return thisConsole + microsoft + " But " + thatConsole + sony;
	}
};

var decision = whatToPlay.consoleToPlay("Xbox", "PS3");
console.log(decision);
console.log("I will play Xbox first then I will play PS3, and Maybe some Wii.");

// Array Function
var havingFun = {
	playingSomeGames: function(games, time){
	for (var gameNumber = 0; gameNumber < games.length; gameNumber++){
		var iPlayed = games; 
		var gameName = games[gameNumber],
			minutesThisGame = time[gameNumber];
		console.log("Starting to play " + gameName + " for " + minutesThisGame + " minutes.");
		for (var minutes = 0; minutes < minutesThisGame; minutes+= 5) {
		var minutesLeft = minutesThisGame - minutes;
		console.log(minutes + " played, " + minutesLeft + " left.");
	}
		console.log("I am bored with " + gameName + ".");
		return iPlayed;
	
		}
		}
};

var hadFun = havingFun.playingSomeGames(myFavGames, minutesPerGame);
console.log("I played " + hadFun + " until I got bored.");

// Method With Accessor and Mutator

var timePlayed = {

	"Xbox": 119,
	"PS3": 13,
	"Wii": 40,
	"playTime": function() {
		var totalPlayTime = this.Xbox + this.PS3 + this.Wii;
		var convertToHours = totalPlayTime / 60;
		return convertToHours;
	},
	"changeTime": function(playMore){
		this.Xbox = playMore;
	}
	 
};

console.log("I have played Xbox for " + timePlayed.Xbox + " minutes.");
console.log("I have played PS3 for " + timePlayed.PS3 + " minutes.");
console.log("I have played Wii for " + timePlayed.Wii + " minutes.");
console.log("This is only a total of " + timePlayed.playTime() + " hours.");
console.log("I think I will play more Xbox.");

timePlayed.changeTime(185); 

console.log("I have now played for " + timePlayed.playTime() + " hours.");

//Ending to the story
console.log("I think that is enough game playing for today. Time to start coding my homework!");

//Finish




















