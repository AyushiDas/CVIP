function showProjectDetails(projectNumber) {
    const projectDetails = {
        1: "Details about Project 1: This is a calculator project that performs basic arithmetic operations.",
        2: "Details about Project 2: This project is a temperature converter that converts between Celsius and Fahrenheit."
        // Add more project details as needed
    };

    const details = projectDetails[projectNumber];
    alert(details);
}

