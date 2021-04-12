import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
//(a) Home Team name for 2014 world cup final
const year2014 = fifaData.filter(i => i["Year"] === 2014 && i["Stage"] === "Final");
console.log(year2014[0]["Home Team Name"]);
console.log(year2014);
//(b) Away Team name for 2014 world cup final
console.log(year2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
const homeGoals = year2014[0]["Home Team Goals"];
console.log(homeGoals);
//(d) Away Team goals for 2014 world cup final
const awayGoals = year2014[0]["Away Team Goals"];
console.log(awayGoals);
//(e) Winner of 2014 world cup final */
if (homeGoals > awayGoals) {
    console.log(year2014[0]["Home Team Name"])
} else {
    console.log(year2014[0]["Away Team Name"])
}
 
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(i => i["Stage"] === "Final");
}

// console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, getFinals) {
    const years = getFinals(arr).map(i => i["Year"]);
    return years;
}

console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, getFinals) {
    const winners = getFinals(arr).map(i => {
        if(i["Home Team Goals"] > i["Away Team Goals"]) {
        return (i["Home Team Name"])
        } else {
        return (i["Away Team Name"])
        }});
    return winners;
}

console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// getYears(arr, getFinals) gives array of years
//getWinners(arr, getFinals) gives array of winners

function getWinnersByYear(arr, getYears, getWinners) {
    const years = getYears(arr, getFinals);
    const winners = getWinners(arr, getFinals);
    return years.map((year, i) => `In ${year}, ${winners[i]} won the world cup!`);
}

console.log(getWinnersByYear(fifaData,getYears,getWinners));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
// Given the array of final games, add up all Home Team Goals divided by arr.length 
// Add all away team goals divided  by arr.length

function getAverageGoals(finalGameData) {
    const homeTotal = finalGameData.reduce((totalHome, item) => totalHome + item["Home Team Goals"],0)
    const awayTotal = finalGameData.reduce((totalAway, item) => totalAway + item["Away Team Goals"],0)
    const goalTotal = homeTotal + awayTotal;
    return (goalTotal/finalGameData.length).toFixed(2);
}

console.log(getAverageGoals(getFinals(fifaData)));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
