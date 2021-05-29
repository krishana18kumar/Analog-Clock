const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
let dateE1 = document.querySelector(".date");
let dayE1 = document.querySelector(".day");
let checkBox = document.querySelector("#checkBox");
var deg = 6;

checkBox.addEventListener("click", function () {
  let body = document.querySelector("body");
  body.classList.toggle("light");
});

setInterval(() => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thrusday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let d = new Date();
  let hh = d.getHours() * 30;
  let mm = d.getMinutes() * deg;
  let ss = d.getSeconds() * deg;

  var day = weekday[d.getDay()];
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  dateE1.innerHTML = date + "/" + month + "/" + year;
  dayE1.innerHTML = day;
});
