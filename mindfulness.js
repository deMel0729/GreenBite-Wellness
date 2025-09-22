// audio buttons 
const rainBtn = document.getElementById("rainBtn");
const rainAudio = document.getElementById("rainAudio");

const riverBtn = document.getElementById("riverBtn");
const riverAudio = document.getElementById("riverAudio");

// Stop all sounds
function stopAllSounds() {
    rainAudio.pause();
    rainAudio.currentTime = 0;
    riverAudio.pause();
    riverAudio.currentTime = 0;
}

// Toggle rain
rainBtn.addEventListener("click", () => {
    if (rainAudio.paused) {
        stopAllSounds();
        rainAudio.play();
    } else {
        rainAudio.pause();
        rainAudio.currentTime = 0;
    }
});

// Toggle river
riverBtn.addEventListener("click", () => {
    if (riverAudio.paused) {
        stopAllSounds();
        riverAudio.play();
    } else {
        riverAudio.pause();
        riverAudio.currentTime = 0;
    }
});

// Stop sounds when leaving page
window.addEventListener("beforeunload", stopAllSounds);


// --- Elements ---
const circleBox = document.querySelector('.circle');
const breathText = document.getElementById('breathLabel');
const countdownDisplay = document.getElementById('countdown');
const btnStart = document.getElementById('start'); // start both
const btnEnd = document.getElementById('end');    // stop both

// --- Timer ---
const totalMinutes = 25; 
const totalSeconds = totalMinutes * 60;
let timerId;

// --- Breathing ---
let breathingInterval;

// --- Format MM:SS ---
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// --- Breathing loop ---
function startBreathingLoop() {
  let inhale = true;

  breathingInterval = setInterval(() => {
    if (inhale) {
      breathText.textContent = "Inhale...";
      circleBox.style.transition = "transform 3s linear";
      circleBox.style.transform = "scale(1.4)";
    } else {
      breathText.textContent = "Exhale...";
      circleBox.style.transition = "transform 3s linear";
      circleBox.style.transform = "scale(1)";
    }
    inhale = !inhale;
  }, 4000); // 4 seconds per inhale/exhale
}

// --- Stop Breathing ---
function stopBreathingLoop() {
  clearInterval(breathingInterval);
  breathText.textContent = "";
  circleBox.style.transition = "none";
  circleBox.style.transform = "scale(1)";
}

// --- Pomodoro Timer ---
function runTimer(seconds) {
  countdownDisplay.textContent = formatTime(seconds);
  if (seconds <= 0) {
    stopBreathingLoop(); // stop breathing when timer ends
    return;
  }
  timerId = setTimeout(() => runTimer(seconds - 1), 1000);
}

// --- Stop Timer & Reset ---
function stopTimer() {
  clearTimeout(timerId);
  countdownDisplay.textContent = formatTime(totalSeconds); // reset display
}

// --- Start both ---
btnStart.addEventListener("click", () => {
  stopTimer();         // ensure any previous timer is cleared
  stopBreathingLoop(); // ensure breathing restarts clean
  runTimer(totalSeconds);
  startBreathingLoop();
});

// --- Stop both ---
btnEnd.addEventListener("click", () => {
  stopTimer();
  stopBreathingLoop();
});