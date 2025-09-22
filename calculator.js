  window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // toggle 'scrolled' class as soon as scrollY > 0
  header.classList.toggle("scrolled", window.scrollY > 0);
});
 
 
 const form = document.getElementById("userForm");
  const resetBtn = document.getElementById("resetBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector("input[name='gender']:checked")?.value || "";
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;

    if (!age || !gender || !height || !weight || !activity) {
      alert(" Please fill all fields correctly.");
      return;
    }

    //BMR
    let BMR;
    if (gender === "Male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    } 

    //Activity factor
    let factor = 1.2;
    if (activity === "sedentary") {
      factor = 1.2;
    } else if (activity === "light") {
      factor = 1.375;
    } else if (activity === "moderate") {
      factor = 1.55;
    } else if (activity === "very") {
      factor = 1.725;
    } else if (activity === "extra") {
      factor = 1.9;
    }

    const TDEE = BMR * factor;

    // Macros
    const carbs = (TDEE * 0.50) / 4;
    const protein = (TDEE * 0.20) / 4;
    const fat = (TDEE * 0.30) / 9;

    //  Update HTML
    document.getElementById("bmrOutput").textContent = BMR.toFixed(2);
    document.getElementById("tdeeOutput").textContent = TDEE.toFixed(2);
    document.getElementById("carbOutput").textContent = carbs.toFixed(0);
    document.getElementById("proteinOutput").textContent = protein.toFixed(0);
    document.getElementById("fatOutput").textContent = fat.toFixed(0);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    document.getElementById("bmrOutput").textContent = "-";
    document.getElementById("tdeeOutput").textContent = "-";
    document.getElementById("carbOutput").textContent = "-";
    document.getElementById("proteinOutput").textContent = "-";
    document.getElementById("fatOutput").textContent = "-";
  });