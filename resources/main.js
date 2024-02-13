function toggleMenu() {
    let x = document.getElementsByClassName("navbar");
    if (x[0].style.display === "block") {
        x[0].style.display = "none";
    } else {
        x[0].style.display = "block";
    }
}

async function fetchCV() {
    try {
        const response = await fetch('resources/cv.json');
        const cv = await response.json();

        populateJobs(cv);
        populateEducation(cv);

    } catch (error) {
        
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