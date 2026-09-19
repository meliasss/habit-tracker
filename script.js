// Call the elements in HTML

const newHabitButton = document.querySelector("#add-habit");
const newHabitDiv = document.querySelector("#new-habit");
const newHabitTextInput = document.querySelector(".text-input");
const addHabitButton = document.querySelector("#add-habit-button");
const habitsContainer = document.querySelector("#habits-list");
const habitCheckbox = document.querySelector("input[type='checkbox']");
const habitBox = document.querySelector(".habit");

newHabitButton.addEventListener("click", () => {
    newHabitDiv.classList.toggle("is-active");
    console.log("new habit is active");
});

// Add new habit
addHabitButton.addEventListener("click", () => {
    
    const habit = document.createElement("div");
    habit.classList.add("habit");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const habitName = document.createElement("p");
    habitName.textContent = newHabitTextInput.value;

    const editLink = document.createElement("a");
    const icon = document.createElement("i");
    icon.classList.add("fi", "fi-rr-pencil");
    editLink.append(icon);

    habit.append(checkbox, habitName, editLink);
    habitsContainer.append(habit);


  console.log(newHabitTextInput.value);
});

// Check a habit state
habitCheckbox.addEventListener("click", () => {
    habitBox.classList.toggle("is-done");
    console.log("habit is done");

})

// Growing progress bar
