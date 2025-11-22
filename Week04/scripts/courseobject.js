let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "01", enrolled: 25, instructor: "Prof. Ncube" },
        { section: "02", enrolled: 30, instructor: "Dr. Chikafu"}
    ]    
};

// Step 2: Populate sections table
function sectionTemplate(section) {
    return `<tr>
           <td>${section.section}</td>
           <td>${section.enrolled}</td>
           <td>${section.instructor}</td>
          </tr>`;
}

function renderSections(course) {
    const html = course.sections.map(sectionTemplate).join("");
    document.querySelector("#sections tbody").innerHTML = html;
}

function setCourseInfomation(course) {
    document.querySelector("#courseTitle").textContent = `${course.code} - ${course.title}`;
}

// Run both functions
setCourseInfomation(aCourse);
renderSections(aCourse);
 

