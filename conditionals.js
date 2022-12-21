// exercise 1
const raining = true;
const cold = true;

if (raining) {
	  console.log("Don't forget your umbrella!");
}

if (cold) {
	  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// exercise 2
if (cold) {
	  console.log("Make sure you pick out a scarf!");
} else {
	  console.log("Short sleeves are fine.");
}

// exercise 3
const temperature = 15;

if (temperature < 0) {
	  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
	  console.log("Short sleeves won't cut it!");
} else {
	  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// exercise 4
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
	  console.log("You are eligible to vote.");
}

// exercise 5
if (temperature < -40 || temperature > 40) {
	  console.log("Maybe going outside isn't such a great idea…");
}

//exercise 6
if (!raining) {
	  console.log("Leave your umbrella at home!");
}
