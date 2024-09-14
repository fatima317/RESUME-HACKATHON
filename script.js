var _a, _b, _c, _d, _e;
// Function to toggle a section's visibility by adding/removing a 'hidden' class
function toggleVisibile(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle("hidden");
    }
}
// Add event listeners to buttons
(_a = document.getElementById("toggleContact")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    toggleVisibile("contact");
});
(_b = document.getElementById("toggleEducation")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    toggleVisibile("education");
});
(_c = document.getElementById("toggleSkills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    toggleVisibile("skills");
});
(_d = document.getElementById("toggleExperience")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    toggleVisibile("experience");
});
(_e = document.getElementById("toggleProjects")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    toggleVisibile("projects");
});
