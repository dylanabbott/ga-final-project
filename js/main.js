// GLOBAL VARIABLES

let timerCurrent = 0;
let timerRun;
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
let currentStep = Number(
	document.querySelector('.current').getAttribute('id') - 1
);
let steps = document.querySelectorAll('.step');
const alertButton = document.getElementById('alert-button');
let target = document.getElementById('alert-message');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const timerDisplay = document.getElementById('timer-display');

// MODAL CODE

const photoLinks = document.querySelectorAll('.sample-photo');
const modal = document.querySelector('.photo-modal');
let fullImage = document.querySelector('.full-image');

for (let i = 0; i < photoLinks.length; i++) {
	photoLinks[i].addEventListener('click', function (event) {
		fullImage.setAttribute('src', event.target.src);
		modal.classList.add('show-modal');
	});
}

function closeModal() {
	modal.classList.remove('show-modal');
}

modal.addEventListener('click', closeModal);

// MENU TOGGLE CODE

const menuButton = document.querySelector('.toggle');
const menuAside = document.querySelector('.main-menu');
const arrow = document.querySelector('.toggle-icon');

function menuToggle() {
	event.preventDefault();
	menuAside.classList.toggle('main-menu-show');
	arrow.classList.toggle('toggle-icon-flip');
}

menuButton.addEventListener('click', menuToggle);

// STEP THROUGH CODE

function backStep() {
	event.preventDefault();
	clearInterval(timerRun);
	if (currentStep === 0) {
		console.log("can't go back");
	} else if (currentStep === 4) {
		timerCurrent = 5;
		timerDisplay.innerHTML = '05:00';
		timerDisplay.classList.remove('disabled');
		nextButton.disabled = false;
		startButton.disabled = false;
		stopButton.disabled = false;
		nextButton.classList.remove('disabled');
		startButton.classList.remove('disabled');
		stopButton.classList.remove('disabled');
		steps[currentStep].classList.remove('current');
		currentStep--;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else if (currentStep === 3) {
		timerCurrent = 0;
		timerDisplay.innerHTML = '00:00';
		timerDisplay.classList.add('disabled');
		nextButton.disabled = false;
		startButton.disabled = true;
		stopButton.disabled = true;
		nextButton.classList.remove('disabled');
		startButton.classList.add('disabled');
		stopButton.classList.add('disabled');
		steps[currentStep].classList.remove('current');
		currentStep--;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else if (currentStep === 2) {
		timerCurrent = 14;
		timerDisplay.innerHTML = '14:00';
		timerDisplay.classList.remove('disabled');
		nextButton.disabled = false;
		startButton.disabled = false;
		stopButton.disabled = false;
		nextButton.classList.remove('disabled');
		startButton.classList.remove('disabled');
		stopButton.classList.remove('disabled');
		steps[currentStep].classList.remove('current');
		currentStep--;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else if (currentStep === 1) {
		timerCurrent = 0;
		timerDisplay.innerHTML = '00:00';
		timerDisplay.classList.add('disabled');
		backButton.disabled = true;
		startButton.disabled = true;
		stopButton.disabled = true;
		backButton.classList.add('disabled');
		startButton.classList.add('disabled');
		stopButton.classList.add('disabled');
		steps[currentStep].classList.remove('current');
		currentStep--;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else {
		nextButton.disabled = false;
		nextButton.classList.remove('disabled');
		steps[currentStep].classList.remove('current');
		currentStep--;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	}
}

function nextStep() {
	event.preventDefault();
	clearInterval(timerRun);
	if (currentStep === 0) {
		timerCurrent = 14;
		timerDisplay.innerHTML = '14:00';
		timerDisplay.classList.remove('disabled');
		backButton.disabled = false;
		startButton.disabled = false;
		stopButton.disabled = false;
		backButton.classList.remove('disabled');
		startButton.classList.remove('disabled');
		stopButton.classList.remove('disabled');
		steps[currentStep].classList.remove('current');
		currentStep++;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else if (currentStep === 2) {
		timerCurrent = 5;
		timerDisplay.innerHTML = '05:00';
		timerDisplay.classList.remove('disabled');
		backButton.disabled = false;
		startButton.disabled = false;
		stopButton.disabled = false;
		backButton.classList.remove('disabled');
		startButton.classList.remove('disabled');
		stopButton.classList.remove('disabled');
		steps[currentStep].classList.remove('current');
		currentStep++;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else if (currentStep === steps.length - 2) {
		console.log('no more steps');
		timerCurrent = 0;
		timerDisplay.innerHTML = '00:00';
		timerDisplay.classList.add('disabled');
		nextButton.disabled = true;
		startButton.disabled = true;
		stopButton.disabled = true;
		nextButton.classList.add('disabled');
		steps[currentStep].classList.remove('current');
		currentStep++;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	} else {
		timerCurrent = 0;
		timerDisplay.innerHTML = '00:00';
		timerDisplay.classList.add('disabled');
		backButton.disabled = false;
		startButton.disabled = true;
		stopButton.disabled = true;
		backButton.classList.remove('disabled');
		startButton.classList.add('disabled');
		stopButton.classList.add('disabled');
		steps[currentStep].classList.remove('current');
		currentStep++;
		console.log(currentStep);
		steps[currentStep].classList.add('current');
	}
}

backButton.addEventListener('click', backStep);
nextButton.addEventListener('click', nextStep);

// ALERT MESSAGE CODE

function blinkText() {
	target.classList.toggle('alert-active');
	setTimeout(function () {
		target.classList.toggle('alert-active');
	}, 10000);
}

function blinkTextLong() {
	target.classList.toggle('alert-active-long');
	setTimeout(function () {
		target.classList.toggle('alert-active-long');
	}, 60000);
}

//alertButton.addEventListener("click", blinkText);

// TIMER CODE

// let timerCurrent = 0;
// let timerRun;

function countDown() {
	event.preventDefault();
	timerCurrent = timerCurrent * 60;

	function tick() {
		if (timerCurrent === 840) {
			blinkTextLong();
			let timerMinutes = Math.floor(timerCurrent / 60)
				.toString()
				.padStart(2, '0');
			let timerSeconds = (timerCurrent % 60).toString().padStart(2, '0');
			timerDisplay.innerHTML = `${timerMinutes}:${timerSeconds}`;
			timerCurrent--;
		} else if (timerCurrent !== 0 && timerCurrent % 60 === 0) {
			blinkText();
			let timerMinutes = Math.floor(timerCurrent / 60)
				.toString()
				.padStart(2, '0');
			let timerSeconds = (timerCurrent % 60).toString().padStart(2, '0');
			timerDisplay.innerHTML = `${timerMinutes}:${timerSeconds}`;
			timerCurrent--;
		} else if (timerCurrent !== 0) {
			let timerMinutes = Math.floor(timerCurrent / 60)
				.toString()
				.padStart(2, '0');
			let timerSeconds = (timerCurrent % 60).toString().padStart(2, '0');
			timerDisplay.innerHTML = `${timerMinutes}:${timerSeconds}`;
			timerCurrent--;
		} else {
			timerDisplay.innerHTML = 'DONE!';
			clearInterval(timerRun);
		}
	}

	timerRun = setInterval(tick, 1000);
}

startButton.addEventListener('click', countDown);

function stopTimer() {
	event.preventDefault();
	timerDisplay.innerHTML = '00:00';
	target.classList.remove('alert-active');
	target.classList.remove('alert-active-long');
	clearInterval(timerRun);
}

stopButton.addEventListener('click', stopTimer);
