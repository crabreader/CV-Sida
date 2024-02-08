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
    const jobs = obj.arbetslivserfarenhet;

    for (const job of jobs) {
        const title = document.createElement("h3");
        const descriptionI = document.createElement("i");
        const expList = document.createElement("ul");

        title.textContent = job.titel;
        descriptionI.textContent = job.info;

        for (const exp of job.erfarenheter)
        {
            const listItem = document.createElement("li");
            listItem.textContent = exp;
            expList.appendChild(listItem);
        }

        jobsSection.appendChild(title);
        jobsSection.appendChild(descriptionI);
        jobsSection.appendChild(expList);
    }
}

function populateEducation(obj) {
    const eduSection = document.getElementById("utbildning");
    const educations = obj.utbildning;

    for (const edu of educations) {
        const title = document.createElement("h3");
        const info = document.createElement("i");
        const description = document.createElement("p");

        title.textContent = edu.namn;
        info.textContent = edu.info;
        description.textContent = edu.beskrivning;

        eduSection.appendChild(title);
        eduSection.appendChild(info);
        eduSection.appendChild(description);
    }
}