let numberOfDrums = document.querySelectorAll(".drum").length;
let drumElements = document.querySelectorAll("button");
let samples = [numberOfDrums];
console.log(numberOfDrums);

for (var i = 0; i < numberOfDrums; i++) {
	let backgroundImage = "background-image: url(images/" + (i+1) + ".png";
	let sample = "./sounds/" + (i+1) + ".mp3";
	samples[i] = sample;
	let clickAudio = new Audio(sample);

	drumElements[i].setAttribute('style', backgroundImage ) 
	drumElements[i].addEventListener("click", function () {
		clickAudio.play();
		console.log(this.innerHTML);
		buttonAnimation(this.innerHTML);
	});
} // end of for loop

document.addEventListener("keypress", function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			var kick = new Audio(samples[0]);
			kick.play();
			break;
		case "a":
			var snare = new Audio(samples[1]);
			snare.play();
			break;
		case "s":
			var tom1 = new Audio(samples[2]);
			tom1.play();
			break;
		case "d":
			var tom2 = new Audio(samples[3]);
			tom2.play();
			break;
		case "j":
			var tom3	= new Audio(samples[4]);
			tom3.play();
		case "k":
			var tom4 = new Audio(samples[5]);
			tom4.play();
			break;
		case "l":
			var crash = new Audio(samples[6]);
			crash.play();
			break;
		default:
			console.log("wrong key!");
	}
}

function buttonAnimation (currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);
}
