/*
Dark Mode for Seasons Home Page
*/

/*
JavaScript for welcome page
Greets a person by the time of day
*/

let today = new Date(); // new date object; based on number of ms since 1/1/70
console.log(Date.now()); // number of milliseconds since 1/1/1970
let day = today.getDay(); // current hour method to parse date object
console.log(day);
let date; // initialize variable
let paragraph = document.getElementById('date'); // accessing an element on the page

if (day == 0 ) {
  date = 'Sunday';
} else if (day == 1) {
  date = 'Monday';
} else if (day == 2) {
  date = 'Tuesday';
} else if (day == 3) {
  date = 'Wednesday';
} else if (day == 4) {
  date = 'Thursday';
} else if (day == 5) {
  date = 'Friday';
} else if (day == 6) {
  date = 'Saturday';
} else {
  date = 'Hello!';
}

paragraph.textContent = 'Today is ' + date + ', and remember to drink water :D!' ;






let bgchange = document.querySelectorAll('body');
console.log(bgchange);

let h1change = document.querySelectorAll('h1');
console.log(h1change);

let h2change = document.querySelectorAll('h2');
console.log(h2change);

let pchange = document.querySelectorAll('main > article > p');
console.log(pchange);

let ftrchange = document.querySelectorAll('footer > p');
console.log(ftrchange);

function changeBgToLight(){
	bgchange[0].style.backgroundColor = '#F7F7F7';
  h1change[0].style.color = 'black';
  pchange[0].style.color = 'black';
  ftrchange[0].style.color= 'black';

}

function changeBgToDark(){
	bgchange[0].style.backgroundColor = 'black';
  h1change[0].style.color = '#F7F7F7';
  pchange[0].style.color = '#F7F7F7';
  ftrchange[0].style.color= '#F7F7F7';
}

