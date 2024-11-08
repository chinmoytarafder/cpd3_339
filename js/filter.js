document.addEventListener("DOMContentLoaded", function() {
    const gradeFilter = document.getElementById("grade-filter");
    const athletes = document.querySelectorAll("#individual-results .athlete");

    // Event listener for the grade filter dropdown
    gradeFilter.addEventListener("change", function() {
        const selectedGrade = gradeFilter.value;

        athletes.forEach(athlete => {
            const gradeElement = athlete.querySelector("dd:nth-of-type(3)");
            const athleteGrade = gradeElement ? gradeElement.textContent.trim() : "";

            // Show/hide athletes based on the selected grade
            if (selectedGrade === "all" || athleteGrade === selectedGrade) {
                athlete.style.display = "block";
            } else {
                athlete.style.display = "none";
            }
        });
    });
});
