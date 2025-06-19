function updateExerciseImage(name) {
  const categories = {
    "cardio": ["jumping jacks", "mountain climbers", "high knees"],
    "strength": ["push-ups", "bodyweight squats", "lunges"],
    "stretch": ["plank", "standing hamstring stretch", "child's pose"]
  };

  let category = "cardio"; // fallback
  const lowerName = name.toLowerCase();

  for (const [cat, list] of Object.entries(categories)) {
    if (list.includes(lowerName)) {
      category = cat;
      break;
    }
  }

  const imgElement = document.getElementById("exercise-img");
  const imagePath = `workouts/${category}/${lowerName.replace(/ /g, "_")}.jpg`;
  imgElement.src = imagePath;
}