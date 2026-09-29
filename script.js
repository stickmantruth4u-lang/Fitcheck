// ==========================================
// USER ANSWERS
// ==========================================

let answers = {
    age: null,
    height: null,
    weight: null,
    pushups: null,
    pullups: null,
    experience: null,
    equipment: null,
    goal: null
};


// ==========================================
// HOME / SERVICE NAVIGATION
// ==========================================

function hideAllSections() {

    const sections = [
        "home",
        "quizCard",
        "resultCard",
        "workoutTool",
        "hydrationTool",
        "recoveryTool",
        "progressTool"
    ];

    sections.forEach(id => {

        const element = document.getElementById(id);

        if (element) {
            element.style.display = "none";
        }

    });
}


// ==========================================
// OPEN SERVICE
// ==========================================

function openService(service) {

    hideAllSections();

    if (service === "fitness") {

        restartQuiz();

        return;
    }


    if (service === "workout") {

        document.getElementById("workoutTool")
            .style.display = "block";

        return;
    }


    if (service === "hydration") {

        document.getElementById("hydrationTool")
            .style.display = "block";

        resetHydration();

        return;
    }


    if (service === "recovery") {

        document.getElementById("recoveryTool")
            .style.display = "block";

        resetRecovery();

        return;
    }


    if (service === "progress") {

        document.getElementById("progressTool")
            .style.display = "block";

        return;
    }
}


// ==========================================
// GO HOME
// ==========================================

function goHome() {

    hideAllSections();

    document.getElementById("home")
        .style.display = "block";
}


// ==========================================
// QUESTION NAVIGATION
// ==========================================

function nextQuestion(current) {

    if (current === 1) {

        const age = Number(
            document.getElementById("age").value
        );

        if (!age || age < 13 || age > 25) {

            alert("Please enter an age between 13 and 25.");

            return;
        }

        answers.age = age;
    }


    if (current === 2) {

        const height = Number(
            document.getElementById("height").value
        );

        if (!height || height < 100 || height > 250) {

            alert("Please enter a valid height.");

            return;
        }

        answers.height = height;
    }


    if (current === 3) {

        const weight = Number(
            document.getElementById("weight").value
        );

        if (!weight || weight < 20 || weight > 200) {

            alert("Please enter a valid weight.");

            return;
        }

        answers.weight = weight;
    }


    document
        .getElementById(`question${current}`)
        .classList.remove("active");


    document
        .getElementById(`question${current + 1}`)
        .classList.add("active");


    updateProgress(current + 1);
}


// ==========================================
// MULTIPLE CHOICE
// ==========================================

function selectAnswer(type, value, questionNumber) {

    answers[type] = value;


    document
        .getElementById(`question${questionNumber}`)
        .classList.remove("active");


    if (questionNumber < 8) {

        document
            .getElementById(`question${questionNumber + 1}`)
            .classList.add("active");


        updateProgress(questionNumber + 1);

    }

    else {

        updateProgress(8);

        generateRoutine();
    }
}


// ==========================================
// PROGRESS BAR
// ==========================================

function updateProgress(questionNumber) {

    const percentage = (questionNumber / 8) * 100;


    const progressBar =
        document.getElementById("progressBar");


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;
    }
}


// ==========================================
// AGE GROUP
// ==========================================

function getAgeGroup(age) {

    if (age >= 13 && age <= 14) {
        return "13–14";
    }


    if (age >= 15 && age <= 17) {
        return "15–17";
    }


    if (age >= 18 && age <= 21) {
        return "18–21";
    }


    return "22–25";
}


// ==========================================
// FITNESS LEVEL
// ==========================================

function getFitnessLevel() {

    if (answers.experience === "beginner") {

        return "beginner";
    }


    if (answers.experience === "experienced") {

        return "advanced";
    }


    return "intermediate";
}


// ==========================================
// ROUTINES
// ==========================================

const routines = {

    beginner: {

        fitness: {

            title: "Foundation Fitness",

            days: [

                {
                    name: "Day 1 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                },


                {
                    name: "Day 2 — Easy Movement 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Gentle mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 3 — Full Body 💪",

                    exercises: [

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2",
                            reps: "6–10 each side"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                },


                {
                    name: "Day 4 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Gentle mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                }

            ]
        },


        strength: {

            title: "Beginner Strength",

            days: [

                {
                    name: "Day 1 — Lower Body 🦵",

                    exercises: [

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2",
                            reps: "6–10 each side"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Calf raises",
                            sets: "2",
                            reps: "10–15"
                        }

                    ]
                },


                {
                    name: "Day 2 — Upper Body 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "6–10 each side"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                },


                {
                    name: "Day 3 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Gentle mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                }

            ]
        },


        athletic: {

            title: "Beginner Athletic Base",

            days: [

                {
                    name: "Day 1 — Movement ⚡",

                    exercises: [

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Step-ups",
                            sets: "2",
                            reps: "6–10 each side"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                },


                {
                    name: "Day 2 — Conditioning 🏃",

                    exercises: [

                        {
                            name: "Brisk walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Marching",
                            sets: "2",
                            reps: "30–60 seconds"
                        },

                        {
                            name: "Gentle mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 3 — Full Body 💪",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2",
                            reps: "6–10 each side"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "6–10 each side"
                        }

                    ]
                },


                {
                    name: "Day 4 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                }

            ]
        }

    },


    intermediate: {

        fitness: {

            title: "Full Body Fitness",

            days: [

                {
                    name: "Day 1 — Upper Body 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Bodyweight squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                },


                {
                    name: "Day 2 — Lower Body 🦵",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "12–15"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 3 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        },


        strength: {

            title: "Strength Builder",

            days: [

                {
                    name: "Day 1 — Push 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Pike push-ups",
                            sets: "2",
                            reps: "5–10"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 2 — Pull & Legs 🦵",

                    exercises: [

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                },


                {
                    name: "Day 3 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        },


        athletic: {

            title: "Athletic Conditioning",

            days: [

                {
                    name: "Day 1 — Lower Body 🦵",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Step-ups",
                            sets: "2",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 2 — Upper Body 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Bird dogs",
                            sets: "2",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                },


                {
                    name: "Day 3 — Conditioning 🏃",

                    exercises: [

                        {
                            name: "Brisk walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Marching",
                            sets: "2",
                            reps: "30–60 seconds"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "6–12"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        }

    },


    advanced: {

        fitness: {

            title: "Advanced Full Body",

            days: [

                {
                    name: "Day 1 — Upper Body 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                },


                {
                    name: "Day 2 — Lower Body 🦵",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "12–15"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 3 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        },


        strength: {

            title: "Advanced Strength",

            days: [

                {
                    name: "Day 1 — Push 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pike push-ups",
                            sets: "2",
                            reps: "6–10"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 2 — Pull 🏋️",

                    exercises: [

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Dead bugs",
                            sets: "2",
                            reps: "8–12 each side"
                        }

                    ]
                },


                {
                    name: "Day 3 — Legs 🦵",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Glute bridges",
                            sets: "2–3",
                            reps: "12–15"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        },


        athletic: {

            title: "Advanced Athletic Base",

            days: [

                {
                    name: "Day 1 — Lower Body 🦵",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Step-ups",
                            sets: "2",
                            reps: "8–12 each side"
                        },

                        {
                            name: "Calf raises",
                            sets: "2–3",
                            reps: "12–15"
                        }

                    ]
                },


                {
                    name: "Day 2 — Upper Body 💪",

                    exercises: [

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Band rows",
                            sets: "2–3",
                            reps: "8–12"
                        },

                        {
                            name: "Pike push-ups",
                            sets: "2",
                            reps: "6–10"
                        }

                    ]
                },


                {
                    name: "Day 3 — Recovery 🧘",

                    exercises: [

                        {
                            name: "Easy walking",
                            sets: "1",
                            reps: "15–20 minutes"
                        },

                        {
                            name: "Mobility",
                            sets: "1",
                            reps: "5–10 minutes"
                        }

                    ]
                },


                {
                    name: "Day 4 — Full Body ⚡",

                    exercises: [

                        {
                            name: "Squats",
                            sets: "2–3",
                            reps: "10–15"
                        },

                        {
                            name: "Push-ups",
                            sets: "2–3",
                            reps: "8–15"
                        },

                        {
                            name: "Pull-ups",
                            sets: "2–3",
                            reps: "3–8"
                        },

                        {
                            name: "Reverse lunges",
                            sets: "2–3",
                            reps: "8–12 each side"
                        }

                    ]
                }

            ]
        }

    }

};


// ==========================================
// EXERCISE ADAPTATION
// ==========================================

function adaptExercise(exercise) {

    if (
        answers.pushups === "no" &&
        exercise.name === "Push-ups"
    ) {

        return {
            name: "Incline push-ups",
            sets: "2",
            reps: "6–10"
        };
    }


    if (
        answers.pullups === "no" &&
        exercise.name === "Pull-ups"
    ) {

        return {
            name: "Assisted pulling exercise",
            sets: "2",
            reps: "6–10"
        };
    }


    if (
        answers.equipment === "none" &&
        exercise.name === "Band rows"
    ) {

        return {
            name: "Safe bodyweight pulling exercise",
            sets: exercise.sets,
            reps: exercise.reps
        };
    }


    if (
        answers.equipment === "dumbbells" &&
        exercise.name === "Band rows"
    ) {

        return {
            name: "Dumbbell rows",
            sets: exercise.sets,
            reps: exercise.reps
        };
    }


    return exercise;
}


// ==========================================
// GENERATE ROUTINE
// ==========================================

function generateRoutine() {

    const level = getFitnessLevel();

    const goal = answers.goal;

    let routineData = routines[level][goal];


    if (!routineData) {

        routineData = routines.beginner.fitness;
    }


    hideAllSections();


    document.getElementById("resultCard")
        .style.display = "block";


    const goalTitles = {

        fitness: "General Fitness",

        strength: "Build Strength",

        athletic: "Athletic Conditioning"

    };


    const goalTitle =
        goalTitles[answers.goal] || "Your Routine";


    document.getElementById("routineTitle")
        .textContent = goalTitle;


    const experienceLabels = {

        beginner: "Beginner",

        some: "Some experience",

        experienced: "Experienced"

    };


    const goalLabels = {

        fitness: "General Fitness",

        strength: "Build Strength",

        athletic: "Athletic Conditioning"

    };


    const ageGroup =
        getAgeGroup(answers.age);


    const experienceLabel =
        experienceLabels[answers.experience]
        || answers.experience;


    const goalLabel =
        goalLabels[answers.goal]
        || answers.goal;


    document.getElementById("categoryText").innerHTML =

        `Age group: <strong>${ageGroup}</strong><br>
         Experience: <strong>${experienceLabel}</strong><br>
         Goal: <strong>${goalLabel}</strong>`;


    let html = "";


    routineData.days.forEach(day => {

        html += `

            <div class="routine-section">

                <h3>${day.name}</h3>

        `;


        day.exercises.forEach(exercise => {

            const adapted =
                adaptExercise(exercise);


            html += `

                <div class="exercise">

                    <div class="exercise-name">
                        ${adapted.name}
                    </div>

                    <div class="exercise-details">
                        ${adapted.sets} sets × ${adapted.reps}
                    </div>

                </div>

            `;

        });


        html += `

            </div>

        `;

    });


    html += `

        <p class="warning">

            This is a general starting routine.
            Focus on controlled form and comfortable effort.
            If an exercise causes pain, stop and ask a parent/guardian
            or qualified professional for guidance.

        </p>

    `;


    document.getElementById("routine")
        .innerHTML = html;
}


// ==========================================
// WORKOUT PLANNER
// ==========================================

function showWorkoutPlan(goal) {

    const plans = {

        fitness: {

            title: "General Fitness Week",

            days: [

                "Monday — Full Body 💪",

                "Tuesday — Easy Movement 🚶",

                "Wednesday — Full Body ⚡",

                "Thursday — Recovery 🧘",

                "Friday — Full Body 💪",

                "Saturday — Optional Easy Activity",

                "Sunday — Rest / Recovery 😴"

            ]

        },


        strength: {

            title: "Strength Week",

            days: [

                "Monday — Full Body Strength 💪",

                "Tuesday — Recovery 🧘",

                "Wednesday — Full Body Strength 🏋️",

                "Thursday — Easy Movement 🚶",

                "Friday — Full Body Strength 💪",

                "Saturday — Optional Easy Activity",

                "Sunday — Rest 😴"

            ]

        },


        athletic: {

            title: "Athletic Conditioning Week",

            days: [

                "Monday — Strength + Movement ⚡",

                "Tuesday — Recovery 🧘",

                "Wednesday — Conditioning 🏃",

                "Thursday — Easy Movement 🚶",

                "Friday — Full Body + Movement 💪",

                "Saturday — Optional Easy Activity",

                "Sunday — Rest 😴"

            ]

        }

    };


    const selectedPlan =
        plans[goal] || plans.fitness;


    let html = `

        <div class="tool-result">

            <h3>${selectedPlan.title}</h3>

    `;


    selectedPlan.days.forEach(day => {

        html += `

            <p>${day}</p>

        `;

    });


    html += `

            <p style="margin-top:12px;">

                Use this as a simple starting schedule.
                Adjust activities around school, rest and other commitments.

            </p>

        </div>

    `;


    document.getElementById("workoutPlan")
        .innerHTML = html;
}


// ==========================================
// HYDRATION — AGE STEP
// ==========================================

function continueHydration() {

    const age = Number(
        document.getElementById("hydrationAge").value
    );


    if (!age || age < 13 || age > 25) {

        alert("Please enter an age between 13 and 25.");

        return;
    }


    document.getElementById("hydrationAgeStep")
        .style.display = "none";


    document.getElementById("hydrationActivityStep")
        .style.display = "block";


    document.getElementById("hydrationResult")
        .innerHTML = "";
}


// ==========================================
// HYDRATION HELPER
// ==========================================

function showHydration(level) {

    const age = Number(
        document.getElementById("hydrationAge").value
    );


    if (!age || age < 13 || age > 25) {

        alert("Please enter an age between 13 and 25.");

        return;
    }


    let baseRange;


    if (age >= 13 && age <= 17) {

        baseRange = "about 1.6–2.6 litres";

    }

    else {

        baseRange = "about 2.2–3.0 litres";
    }


    const activityText = {

        low:
            "For light activity, this is a useful general daily fluid guide.",

        medium:
            "For moderate activity, stay toward the higher end of the range and drink regularly around activity.",

        high:
            "For high activity, your fluid needs can increase, especially in hot weather or during longer sessions."
    };


    const selectedText =
        activityText[level] || activityText.low;


    document.getElementById("hydrationResult")
        .innerHTML = `

            <div class="tool-result">

                <h3>Daily Hydration 💧</h3>

                <p>

                    Age:
                    <strong>${age}</strong>

                </p>

                <p style="margin-top:8px;">

                    General daily guide:
                    <strong>${baseRange}</strong>

                </p>

                <p style="margin-top:10px;">

                    ${selectedText}

                </p>

                <p style="margin-top:12px;">

                    This is an approximate guide, not a strict target.
                    Needs vary between people and include fluids from drinks
                    and food.

                </p>

            </div>

        `;
}


// ==========================================
// RESET HYDRATION
// ==========================================

function resetHydration() {

    const ageInput =
        document.getElementById("hydrationAge");

    const ageStep =
        document.getElementById("hydrationAgeStep");

    const activityStep =
        document.getElementById("hydrationActivityStep");

    const result =
        document.getElementById("hydrationResult");


    if (ageInput) {
        ageInput.value = "";
    }


    if (ageStep) {
        ageStep.style.display = "block";
    }


    if (activityStep) {
        activityStep.style.display = "none";
    }


    if (result) {
        result.innerHTML = "";
    }
}


// ==========================================
// RECOVERY — AGE STEP
// ==========================================

function continueRecovery() {

    const age = Number(
        document.getElementById("recoveryAge").value
    );


    if (!age || age < 13 || age > 25) {

        alert("Please enter an age between 13 and 25.");

        return;
    }


    document.getElementById("recoveryAgeStep")
        .style.display = "none";


    document.getElementById("recoveryOptionsStep")
        .style.display = "block";


    document.getElementById("recoveryResult")
        .innerHTML = "";
}


// ==========================================
// RECOVERY GUIDE
// ==========================================

function showRecovery(type) {

    const age = Number(
        document.getElementById("recoveryAge").value
    );


    if (!age || age < 13 || age > 25) {

        alert("Please enter an age between 13 and 25.");

        return;
    }


    let selected;


    // ======================================
    // SLEEP
    // ======================================

    if (type === "sleep") {

        if (age >= 13 && age <= 17) {

            selected = {

                title: "Sleep Guide 😴",

                text:
                    "Aim for about 8–10 hours of sleep each night. A consistent sleep and wake schedule can also help your recovery."

            };

        }

        else {

            selected = {

                title: "Sleep Guide 😴",

                text:
                    "Aim for at least 7 hours of sleep each night. Keeping a consistent sleep and wake schedule can support recovery."

            };

        }

    }


    // ======================================
    // REST DAYS
    // ======================================

    else if (type === "rest") {

        selected = {

            title: "Rest Days 🧘",

            text:
                "Give your body time away from hard training. Easy walking is fine if comfortable, and gentle stretching can help you stay mobile. You do not need to train hard every day."

        };

    }


    // ======================================
    // RECOVERY ROUTINE
    // ======================================

    else {

        selected = {

            title: "Simple Recovery Routine 🌙",

            text:
                "After training, cool down, drink normally, eat regular balanced meals, do gentle mobility if it feels comfortable, and prioritize a good night's sleep."

        };

    }


    document.getElementById("recoveryResult")
        .innerHTML = `

            <div class="tool-result">

                <h3>${selected.title}</h3>

                <p>

                    Age:
                    <strong>${age}</strong>

                </p>

                <p style="margin-top:10px;">

                    ${selected.text}

                </p>

            </div>

        `;
}


// ==========================================
// RESET RECOVERY
// ==========================================

function resetRecovery() {

    const ageInput =
        document.getElementById("recoveryAge");

    const ageStep =
        document.getElementById("recoveryAgeStep");

    const optionsStep =
        document.getElementById("recoveryOptionsStep");

    const result =
        document.getElementById("recoveryResult");


    if (ageInput) {
        ageInput.value = "";
    }


    if (ageStep) {
        ageStep.style.display = "block";
    }


    if (optionsStep) {
        optionsStep.style.display = "none";
    }


    if (result) {
        result.innerHTML = "";
    }
}


// ==========================================
// FITNESS PROGRESS
// ==========================================

function calculateProgress() {

    const workouts = Number(
        document.getElementById("workoutsCompleted").value
    ) || 0;


    const pushups = Number(
        document.getElementById("pushupsCompleted").value
    ) || 0;


    const pullups = Number(
        document.getElementById("pullupsCompleted").value
    ) || 0;


    if (workouts < 0 || pushups < 0 || pullups < 0) {

        alert("Please enter positive numbers.");

        return;
    }


    const nextWorkout =
        Math.ceil((workouts + 1) / 5) * 5;


    const nextPushup =
        Math.ceil((pushups + 1) / 5) * 5;


    const nextPullup =
        Math.ceil((pullups + 1) / 5) * 5;


    document.getElementById("progressResult")
        .innerHTML = `

            <div class="tool-result">

                <h3>Your Progress 📈</h3>

                <p>
                    Workouts completed:
                    <strong>${workouts}</strong>
                </p>

                <p>
                    Push-ups completed:
                    <strong>${pushups}</strong>
                </p>

                <p>
                    Pull-ups completed:
                    <strong>${pullups}</strong>
                </p>

                <br>

                <p>
                    Next workout milestone:
                    <strong>${nextWorkout}</strong>
                </p>

                <p>
                    Next push-up milestone:
                    <strong>${nextPushup}</strong>
                </p>

                <p>
                    Next pull-up milestone:
                    <strong>${nextPullup}</strong>
                </p>

                <p style="margin-top:12px;">
                    This tracker is session-only for now.
                    Your numbers are not saved after refreshing the page.
                </p>

            </div>

        `;
}


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    answers = {

        age: null,
        height: null,
        weight: null,
        pushups: null,
        pullups: null,
        experience: null,
        equipment: null,
        goal: null

    };


    hideAllSections();


    document.getElementById("quizCard")
        .style.display = "block";


    document.querySelectorAll(".question")
        .forEach(question => {

            question.classList.remove("active");

        });


    document.getElementById("question1")
        .classList.add("active");


    document.getElementById("age").value = "";

    document.getElementById("height").value = "";

    document.getElementById("weight").value = "";


    updateProgress(1);
}