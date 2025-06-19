document.getElementById("fitnessForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const level = formData.get("level").toLowerCase();
  const age = parseInt(formData.get("age"));
  const gender = formData.get("gender").toLowerCase();

  let ageModifier = "";
  if (age < 20) {
    ageModifier = "youth";
  } else if (age <= 40) {
    ageModifier = "adult";
  } else if (age <= 60) {
    ageModifier = "mature";
  } else {
    ageModifier = "senior";
  }

  // Create workout structure
  let plan = [];
  let intervals = [];

  if (level === "beginner") {
    plan = ["Jumping Jacks", "Bodyweight Squats", "Wall Sit", "Push-Ups", "Rest"];
    intervals = [30, 30, 30, 30, 60];
  } else if (level === "intermediate") {
    plan = ["Burpees", "Lunges", "Plank", "Push-Ups", "Mountain Climbers", "Rest"];
    intervals = [45, 45, 45, 45, 45, 60];
  } else if (level === "advanced") {
    plan = ["Jump Squats", "Push-Ups", "High Knees", "Plank to Push-Up", "Tuck Jumps", "Rest"];
    intervals = [60, 60, 60, 60, 60, 60];
  }

  if (ageModifier === "senior") {
    plan = ["Marching in Place", "Chair Squats", "Arm Circles", "Wall Push-Ups", "Rest"];
    intervals = [30, 30, 30, 30, 60];
  }

  localStorage.setItem("name", name);
  localStorage.setItem("plan", JSON.stringify(plan));
  localStorage.setItem("intervals", JSON.stringify(intervals));
  window.location.href = "plan.html";
});