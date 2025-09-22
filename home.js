  window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // toggle 'scrolled' class as soon as scrollY > 0
  header.classList.toggle("scrolled", window.scrollY > 0);
});


  // Daily tips marquee
const tips = [
  "Drink at least 8 glasses of water today.",
  "Take a 10-minute walk after meals.",
  "Practice 5 minutes of deep breathing.",
  "Add one extra serving of vegetables to your meals.",
  " Stretch for 5 minutes in the morning.",
  "Avoid screens 1 hour before bed.",
  "Get at least 7-8 hours of sleep tonight.",
  "Choose whole fruits over processed snacks.",
  "Do 10 push-ups or squats during the day.",
  "Get some sunlight for vitamin D.",
  "Start your day with a healthy breakfast.",
  "Take breaks every hour if you work at a desk.",
  "Spend 10 minutes in nature or fresh air.",
  "Practice gratitude - think of 3 good things today.",
  "Take the stairs instead of the elevator."
];

//Simple daily tip selection
const day = new Date().getDate(); // Gets 1-31
const dailyTip = tips[day % tips.length];

//Update the marquee
document.getElementById("tip-text").innerHTML = ` ${dailyTip} `;


// Test different days manually
// const testDay = 5; 
// const dailyTip = tips[testDay % tips.length];
// document.getElementById("tip-text").innerHTML = ` ${dailyTip}`;



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Optional: close menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    // Get existing emails from localStorage or create empty array
    let subscribedEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];
    
    // Check if email already exists
    if (subscribedEmails.includes(email)) {
        alert('This email is already subscribed!');
        return;
    }
    
    // Add new email to array
    subscribedEmails.push(email);
    
    // Save back to localStorage
    localStorage.setItem('newsletterEmails', JSON.stringify(subscribedEmails));
    
    // Show success message and clear input
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
});