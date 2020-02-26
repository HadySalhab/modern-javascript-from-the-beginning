let val;

const today = new Date(); //by default, it returns today's date

let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");
val = birthday;

val = today.getMonth(); //this is zero based, january is zero
val = today.getDate();
val = today.getDay(); //Monday=1 ,tuesday=2 ...
val = today.getFullYear(); //2020
val = today.getHours(); //24 hours format
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //timestamp, amount of scds passed since january first 1970

birthday.setMonth(2); //set march as a month
birthday.setDate(12); // March 12
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(typeof val);
console.log(birthday);
