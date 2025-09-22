  window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // toggle 'scrolled' class as soon as scrollY > 0
  header.classList.toggle("scrolled", window.scrollY > 0);
});
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple workout database
const exercises = {
    arms: {
        none: [
            { name: 'Push-ups', duration: 30, sets: 3 },
            { name: 'Pike Push-ups', duration: 30, sets: 3 },
            { name: 'Tricep Dips', duration: 30, sets: 3 },
            { name: 'Arm Circles', duration: 30, sets: 2 }
        ],
        dumbbells: [
            { name: 'Bicep Curls', duration: 45, sets: 3 },
            { name: 'Overhead Press', duration: 45, sets: 3 },
            { name: 'Tricep Extensions', duration: 45, sets: 3 },
            { name: 'Hammer Curls', duration: 45, sets: 3 }
        ],
        'resistance-bands': [
            { name: 'Band Bicep Curls', duration: 45, sets: 3 },
            { name: 'Band Tricep Extensions', duration: 45, sets: 3 },
            { name: 'Band Pull-Aparts', duration: 30, sets: 3 },
            { name: 'Band Rows', duration: 45, sets: 3 }
        ]
    },
    legs: {
        none: [
            { name: 'Squats', duration: 45, sets: 3 },
            { name: 'Lunges', duration: 45, sets: 3 },
            { name: 'Calf Raises', duration: 30, sets: 3 },
            { name: 'Wall Sits', duration: 30, sets: 3 }
        ],
        dumbbells: [
            { name: 'Goblet Squats', duration: 45, sets: 3 },
            { name: 'Romanian Deadlifts', duration: 45, sets: 3 },
            { name: 'Walking Lunges', duration: 45, sets: 3 },
            { name: 'Step-ups', duration: 45, sets: 3 }
        ],
        'resistance-bands': [
            { name: 'Band Squats', duration: 45, sets: 3 },
            { name: 'Band Side Steps', duration: 45, sets: 3 },
            { name: 'Band Leg Raises', duration: 30, sets: 3 },
            { name: 'Band Glute Bridges', duration: 45, sets: 3 }
        ]
    },
    'full-body': {
        none: [
            { name: 'Burpees', duration: 30, sets: 3 },
            { name: 'Jump Squats', duration: 30, sets: 3 },
            { name: 'Mountain Climbers', duration: 30, sets: 3 },
            { name: 'High Knees', duration: 30, sets: 3 }
        ],
        dumbbells: [
            { name: 'Thrusters', duration: 45, sets: 3 },
            { name: 'Squat to Press', duration: 45, sets: 3 },
            { name: 'Deadlift to Row', duration: 45, sets: 3 },
            { name: 'Clean and Press', duration: 45, sets: 3 }
        ],
        'resistance-bands': [
            { name: 'Band Thrusters', duration: 45, sets: 3 },
            { name: 'Band Burpees', duration: 30, sets: 3 },
            { name: 'Band Wood Chops', duration: 45, sets: 3 },
            { name: 'Band Mountain Climbers', duration: 30, sets: 3 }
        ]
    }
};

// Workout variables
let workout = [];
let currentIndex = 0;
let currentSet = 1;
let timer;
let timeLeft = 0;
let paused = false;

// Get DOM elements
const form = document.getElementById('workout-form');
const workoutDiv = document.getElementById('workout-container');
const workoutList = document.getElementById('workout-list');
const startBtn = document.getElementById('start-workout');
const timerDiv = document.getElementById('timer-container');
const exerciseName = document.getElementById('current-exercise');
const setDisplay = document.getElementById('current-set');
const totalSets = document.getElementById('total-sets');
const timerDisplay = document.getElementById('timer');
const pauseBtn = document.getElementById('pause-btn');
const skipBtn = document.getElementById('skip-btn');
const stopBtn = document.getElementById('stop-btn');

// Generate workout when form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bodyPart = document.getElementById('body-part').value;
    const equipmentChecked = document.querySelectorAll('input[name="equipment"]:checked');
    const equipment = Array.from(equipmentChecked).map(cb => cb.value);
    
    // Validation
    if (!bodyPart) {
        alert('Please select a body part!');
        return;
    }
    
    if (equipment.length === 0) {
        alert('Please select at least one equipment option!');
        return;
    }
    
    // Build workout from selected options
    workout = [];
    equipment.forEach(eq => {
        if (exercises[bodyPart] && exercises[bodyPart][eq]) {
            workout = workout.concat(exercises[bodyPart][eq]);
        }
    });
    
    // Shuffle and limit to 4 exercises
    workout = shuffleArray(workout).slice(0, 4);
    
    // Display the generated workout
    displayWorkout();
});

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display workout plan
function displayWorkout() {
    workoutList.innerHTML = '';
    
    workout.forEach(exercise => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <h4>${exercise.name}</h4>
            <p><strong>Duration:</strong> ${exercise.duration} seconds</p>
            <p><strong>Sets:</strong> ${exercise.sets}</p>
        `;
        workoutList.appendChild(exerciseDiv);
    });
    
    // Show workout container and hide form
    workoutDiv.classList.remove('hidden');
    workoutDiv.scrollIntoView({ behavior: 'smooth' });
}

// Start workout
startBtn.addEventListener('click', function() {
    if (workout.length === 0) return;
    
    currentIndex = 0;
    currentSet = 1;
    
    // Show timer container and hide workout plan
    timerDiv.classList.remove('hidden');
    workoutDiv.classList.add('hidden');
    
    startCurrentExercise();
    timerDiv.scrollIntoView({ behavior: 'smooth' });
});

// Start current exercise
function startCurrentExercise() {
    if (currentIndex >= workout.length) {
        finishWorkout();
        return;
    }
    
    const exercise = workout[currentIndex];
    
    // Update display
    exerciseName.textContent = exercise.name;
    setDisplay.textContent = currentSet;
    totalSets.textContent = exercise.sets;
    
    // Set timer
    timeLeft = exercise.duration;
    updateTimerDisplay();
    startTimer();
}

// Start countdown timer
function startTimer() {
    timer = setInterval(() => {
        if (!paused) {
            timeLeft--;
            updateTimerDisplay();
            
            // Warning effect for last 5 seconds
            if (timeLeft <= 5 && timeLeft > 0) {
                timerDisplay.classList.add('warning');
                playBeep();
            } else {
                timerDisplay.classList.remove('warning');
            }
            
            // Time's up
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerDisplay.classList.remove('warning');
                timerDisplay.classList.add('finished');
                playFinishSound();
                
                setTimeout(() => {
                    timerDisplay.classList.remove('finished');
                    moveToNext();
                }, 1000);
            }
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Move to next set or exercise
function moveToNext() {
    const exercise = workout[currentIndex];
    
    if (currentSet < exercise.sets) {
        // Next set of same exercise
        currentSet++;
        startCurrentExercise();
    } else {
        // Next exercise
        currentIndex++;
        currentSet = 1;
        
        if (currentIndex < workout.length) {
            startCurrentExercise();
        } else {
            finishWorkout();
        }
    }
}

// Finish workout
function finishWorkout() {
    timerDiv.classList.add('hidden');
    workoutDiv.classList.remove('hidden');
    
    // Reset workout state
    currentIndex = 0;
    currentSet = 1;
    paused = false;
    pauseBtn.textContent = ' Pause';
    
    // Show simple alert
    alert('🏆 Workout Complete! Great job!');
}

// Control button functions
pauseBtn.addEventListener('click', function() {
    paused = !paused;
    pauseBtn.textContent = paused ? ' Resume' : 'Pause';
});

skipBtn.addEventListener('click', function() {
    if (timer) {
        clearInterval(timer);
    }
    timerDisplay.classList.remove('warning', 'finished');
    moveToNext();
});

stopBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to stop the workout?')) {
        if (timer) {
            clearInterval(timer);
        }
        
        // Reset everything
        timerDiv.classList.add('hidden');
        workoutDiv.classList.remove('hidden');
        currentIndex = 0;
        currentSet = 1;
        paused = false;
        pauseBtn.textContent = ' Pause';
        timerDisplay.classList.remove('warning', 'finished');
        
        workoutDiv.scrollIntoView({ behavior: 'smooth' });
    }
});

// Simple sound effects
function playBeep() {
    // Simple beep sound for last 5 seconds
    try {
        const audio = new (window.AudioContext || window.webkitAudioContext)();
        const beep = audio.createOscillator();
        beep.frequency.value = 800;
        beep.connect(audio.destination);
        beep.start();
        beep.stop(audio.currentTime + 0.1);
    } catch (e) {
        // No sound if not supported
    }
}

function playFinishSound() {
    // Success sound when exercise finishes
    try {
        const audio = new (window.AudioContext || window.webkitAudioContext)();
        const success = audio.createOscillator();
        success.frequency.value = 600;
        success.connect(audio.destination);
        success.start();
        success.stop(audio.currentTime + 0.3);
    } catch (e) {
        // No sound if not supported
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code can go here
    console.log('Workout Generator loaded successfully!');
});