function addNewWe(){
    //alert("hello");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonOb)
    }
    
    function addNewSkill() {
        let skillsContainer = document.getElementById("skills-container");
        let newSkillField = document.createElement("div");
        newSkillField.classList.add("form-group");
        newSkillField.innerHTML = '<input type="text" class="form-control skill-field" placeholder="Enter skill here">';
        skillsContainer.appendChild(newSkillField);
    }
    
    // Other existing functions (addNewWe, addNewAq, addNewec, generateCV, printCV)
    
    function addNewAq(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb)
    }
    
    function addNewec(){
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("ecField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder","Enter here");   
        let ecOb = document.getElementById("ec");
        let ecAddButtonOb = document.getElementById("ecAddButton");
        
        ecOb.insertBefore(newNode, ecAddButtonOb)
    }
    
    // Input validation for email and phone number
function validateForm() {
    let emailField = document.getElementById("emailField");
    let contactField = document.getElementById("contactField");
    let emailError = document.getElementById("emailError");
    let contactError = document.getElementById("contactError");
    let isValid = true;

    // Email validation
    if (!isValidEmail(emailField.value)) {
        emailError.innerText = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Phone number validation
    if (!isValidPhoneNumber(contactField.value)) {
        contactError.innerText = "Please enter a 10-digit phone number.";
        isValid = false;
    } else {
        contactError.innerText = "";
    }

    return isValid;
}

// Function to check if email is valid
function isValidEmail(email) {
    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to check if phone number is valid
function isValidPhoneNumber(phoneNumber) {
    // Regular expression for 10-digit phone number validation
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

// Generate CV function with form validation


v
function generateCV(){
        // console.log("genertaing");
        if (!validateForm()) {
            return;
        }
        let nameField = document.getElementById("nameField").value;
        document.getElementById("nameT").innerHTML = nameField;
        let nameT = document.getElementById("nameT");
        nameT.innerHTML = nameField;
        
        document.getElementById("nameT2").innerHTML = nameField;
        document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
        
        //contact
        document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
        //Address
        document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
        
        //links
        
        document.getElementById("gtT").innerHTML = document.getElementById("gtField").value;
        document.getElementById("lkT").innerHTML = document.getElementById("lkField").value;
        document.getElementById("insT").innerHTML = document.getElementById("insField").value;
        
        //objective
        document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
        
        // work exprience
        let wes = document.getElementsByClassName("weField");
        console.log("Number of elements with class 'weField':", wes.length);
        let str = '';
        for (let e of wes) {
            console.log("Value of element:", e.value);
            str = str + `<li> ${e.value} </li>`;
        }
        console.log("Resulting HTML string:", str);
        
        document.getElementById("weT").innerHTML = str;

        let skillsContainer = document.getElementById("skills-container");
        let skillFields = skillsContainer.getElementsByClassName("skill-field");
        let skills = [];
        for (let field of skillFields) {
            skills.push(field.value);
        }
    
        // Other code for generating the CV
    
        // Add skills to the CV template
        let skillsList = document.createElement("ul");
        for (let skill of skills) {
            let skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        }
        document.getElementById("skillsT").innerHTML = "";
        document.getElementById("skillsT").appendChild(skillsList);
        
        // Academic Qualification
        
        let aqs = document.getElementsByClassName("aqField");
        let str1 = '';
        for (let f of aqs) {
            console.log("Value of element:", f.value);
            str1 = str1 + `<li> ${f.value} </li>`;
        }
        console.log("Resulting HTML string:", str1);
        
        document.getElementById("aqT").innerHTML = str1;
        
        // extra curricular activbities
        
        let ecs = document.getElementsByClassName("ecField");
        let str2 = '';
        for (let g of ecs) {
            console.log("Value of element:", g.value);
            str2 = str2 + `<li> ${g.value} </li>`;
        }
        console.log("Resulting HTML string:", str2);
        
        document.getElementById("ecT").innerHTML = str2;
        
        //setting image
        let imgField = document.getElementById("imgField");
    if (imgField.files.length > 0) {
        let file = imgField.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            document.getElementById("imgT").src = reader.result;
        };
    } else {
        // Handle case when no image is selected
        // You might want to provide a default image or show an error message.
    }
        
        
        document.getElementById("cv-form-heading").style.display = "none";
        document.getElementById("generate-cv-button").style.display = "none";
        //hide form
        document.getElementById('cv-form').style.display = 'none';
        document.getElementById('cv-template').style.display = 'block';
        
    } 
    
    //print cv

    function printCV() {
        // Remove button text temporarily
        var printButton = document.querySelector("#cv-template .container.text-center button");
        var buttonText = printButton.textContent;
        printButton.textContent = "";
    
        // Print the CV
        window.print();
    
        // Restore button text
        printButton.textContent = buttonText;
    }
    
    
