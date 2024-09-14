// Function to toggle a section's visibility by adding/removing a 'hidden' class
function toggleVisibile(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle("hidden");
    }
}

// Add event listeners to buttons
document.getElementById("toggleContact")?.addEventListener("click", () => {
    toggleVisibile("contact");
});

document.getElementById("toggleEducation")?.addEventListener("click", () => {
    toggleVisibile("education");
});

document.getElementById("toggleSkills")?.addEventListener("click", () => {
    toggleVisibile("skills");
});

document.getElementById("toggleExperience")?.addEventListener("click", () => {
    toggleVisibile("experience");
});
document.getElementById("toggleProjects")?.addEventListener("click", () => {
    toggleVisibile("projects");
});