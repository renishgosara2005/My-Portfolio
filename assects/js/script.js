var typed = new Typed(".text", {
  strings: ["Web Developer", "Fronted Developer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// document
//   .getElementById('contact-wrapper')
//   .addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting the default way

//     var name = document.getElementById('name').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var phone = document.getElementById('phone').value.trim();
//     var message = document.getElementById('message').value.trim();

//     // Basic form validation
//     if (!validateName(name)) {
//       displayMessage("Please enter a valid name.", "red");
//       return;
//     }
//     if (!validateEmail(email)) {
//       displayMessage("Please enter a valid email address.", "red");
//       return;
//     }
//     if (!validatePhone(phone)) {
//       displayMessage("Please enter a valid phone number.", "red");
//       return;
//     }
//     if (message === "") {
//       displayMessage("Please enter your message.", "red");
//       return;
//     }

//     // Display a success message
//     displayMessage(
//       "Thank you for your message. We will get back to you shortly.",
//       "green"
//     );

//     // Optionally, you can reset the form
//     document.getElementById('contact-wrapper').reset();
//   });

// function validateName(name) {
//   return name.length > 0;
// }

// function validateEmail(email) {
//   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }

// function validatePhone(phone) {
//   var phonePattern = /^\+?[0-9\s\-]+$/;
//   return phonePattern.test(phone);
// }

let circularprogress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 90,
  speed = 25;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularprogress.style.background = `conic-gradient(#0ef ${
    progressStartValue * 3.6
  }deg, #000000 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
  console.log("progressStartValue");
}, speed);

let circularprogress4 = document.querySelector(".circular-progress4"),
  progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,
  progressEndValue4 = 90,
  speed4 = 45;

let progress4 = setInterval(() => {
  progressStartValue4++;

  progressValue4.textContent = `${progressStartValue4}%`;
  circularprogress4.style.background = `conic-gradient(#0ef ${
    progressStartValue4 * 3.6
  }deg, #000000 0deg)`;

  if (progressStartValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
  console.log("progressStartValue4");
}, speed);

let circularprogress3 = document.querySelector(".circular-progress3"),
  progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
  progressEndValue3 = 90,
  speed3 = 25;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;
  circularprogress3.style.background = `conic-gradient(#0ef ${
    progressStartValue3 * 3.6
  }deg, #000000 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
  console.log("progressStartValue3");
}, speed);

let circularprogress2 = document.querySelector(".circular-progress2"),
  progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
  progressEndValue2 = 90,
  speed2 = 25;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;
  circularprogress2.style.background = `conic-gradient(#0ef ${
    progressStartValue2 * 3.6
  }deg, #000000 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
  console.log("progressStartValue2");
}, speed);


function getUrl() {
  
 const color = console.log(window.location.href); 
}