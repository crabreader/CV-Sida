export function toggleMenu() {
    console.log("toggleMenu called");
    const x = document.querySelector(".navbar");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

export async function fetchCV() {
    try {
        const response = await fetch('./cv.json');
        const cv = await response.json();

        populateJobs(cv);
        populateEducation(cv);

    } catch (error) {
        console.error('Error fetching CV:', error);
    }
}

function populateJobs(obj) {
    const jobsSection = document.getElementById("arbetslivserfarenhet");
    const jobs = obj.workExperience;

    for (const job of jobs) {
        const header = document.createElement("h3");
        const description = document.createElement("i");
        const expList = document.createElement("ul");

        header.textContent = job.roleName;
        description.textContent = `${job.yearStart}-${job.yearEnd} ${job.companyName}, ${job.location}`;

        for (const exp of job.experiences)
        {
            const listItem = document.createElement("li");
            listItem.textContent = exp;
            expList.appendChild(listItem);
        }

        jobsSection.appendChild(header);
        jobsSection.appendChild(description);
        jobsSection.appendChild(expList);
    }
}

function populateEducation(obj) {
    const eduSection = document.getElementById("utbildning");
    const educations = obj.education;

    for (const education of educations) {
        const name = document.createElement("h3");
        const info = document.createElement("i");
        const description = document.createElement("p");

        name.textContent = education.name;
        info.textContent = `${education.yearStart}-${education.yearEnd} ${education.schoolName}, ${education.location}`;
        description.textContent = education.description;

        eduSection.appendChild(name);
        eduSection.appendChild(info);
        eduSection.appendChild(description);
    }
}

export function easterEgg1() {
    const root = document.querySelector(":root");
    root.style.setProperty('--bg', 'blue');
    root.style.setProperty('--fg', 'red');
}