// CONSOLE
console.log("hello world!"); //statement - end of every statement needs a semicolon
console.log('');

//STRINGS
console.log('Strings -')
console.log('I wan\'t a smoothie!!');
console.log(':P' + ":0")

console.log('');

//NUMBERS
console.log('Numbers -');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3);


console.log('');

//STRINGS & NUMBERS (anything with quotations around it is a string; a string has no outcome)

console.log('Strings & Numbers -');

console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('I am ' + (8 * 8) + ' years old');
console.log('8 * 8:', 8 * 8);


console.log('');

//BOOLEANS

console.log('Booleans -');
console.log(true, false);
console.log('3 > 4:', 3 > 4); //comparisons
console.log('2 <= 2', 2 <= 2);
console.log('2 > 1 && 2 < 12:', 2 > 1 && 2 < 12); // AND operator
console.log('5 > 12 || 6<= 18:', 5 > 12 || 6<= 18); // OR operator

console.log('');

// THREE BASIC TYPES

console.log('Basic Types -');

console.log(typeof 'hello');
console.log(typeof 'hello', typeof (8-7), typeof (2 > 1));

console.log('');

//VARIABLES

console.log('Variables -');

var five = 5; //variables can't have numbers, THIS line has to go before the one below
console.log('five:', five);

var ten= 10;
console.log('five + ten:', five + ten);
console.log('five * ten:', five * ten);

console.log('');

// ALTERING Variables

console.log('Altering Variables -');

var myStudentDebt = 800;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt-= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt+= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt++;
console.log('myStudentDebt:', myStudentDebt);

console.log('');

//ARRAYS

console.log('ARRAYS -');

var myLuckyNumbers = [3, 7, 7, 14, 21];
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);

console.log('');

//FUNCTIONS

console.log('Functions -');

var squared = function (number) {
  return number * number
}

var danny = {
  name: 'Danny',
  age: 4,
  nativeNewYorker: true,
};

var describeMe = function (danny) {
  return 'My name is ' + danny.name +
  '! I am ' + danny.age + ' years old.' +
  ' If you asked me if Im a native New Yorker my response would be ' + danny.nativeNewYorker
};

console.log('');

//CONDITIONAL STATEMENTS

console.log('Conditional Statements -');

if (danny.age > 21) {
  console.log('party time')
} else if (danny.age > 5) {
  console.log ('why are you here')
} else {
  console.log('not quite yet')
}

console.log('');

//LOOP

console.log('Loops -');
var hamburgers = 0

for (var i = 0; hamburgers < 10; i++) {
  console.log(hamburgers + ' hamburger(s)')
  hamburgers++;
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log('how long does it take to get to the center of the tootsie pop?')

for (var licks = 1; licks <=4; licks++) {
  if (licks == 4) {
      console.log('CRUNCH!!!')
  } else {
      console.log(licks)
  }
}

  console.log(licks)


console.log('');
