//Exercitiul 1
// spuare function
function square(number) {
    if (typeof (number) !== "number") {
        return 0;
    }
    
    return number * number;
};


//half function
function half(number) {
    if (typeof (number) !== "number") {
        return 0;
    }
    
    return number / 2;
};


//percent function
function percent(firstNumber, secondNumber) {
    if (typeof (firstNumber) === "number" && typeof (secondNumber) === "number") {
        return (firstNumber * 100) / secondNumber;
    }
    
    return 0;
};

//area function
function area(number) {
    if (typeof (number) === "number") {
       let result = square(number) * Math.PI;
       return Number(result.toFixed(2));
    }
    
    return 0;
};

//ex1
function myFunction(number) {
    if (typeof(number) !== "number") {
        console.log("Numarul introdus este invalid");
        return 0;
    }
    console.log("Numarul introdus este " + number);
    let result = half(number);
    console.log("Rezultat functia half: " + result);
    let resultSquare = square(result);
    console.log("Rezultat functia square: " + resultSquare);
    let resultArea = area(resultSquare);
    console.log("Rezultat functia area: " + resultArea);
    return Number(percent(resultSquare, resultArea).toFixed(2));
};

function submitClick() {
    alert("Esti sigur ca vrei sa trimiti acest mesaj?");
}

function myFunction3() {
   let inputValue = Number(document.getElementById("numberEx").value);
   if (isNaN(inputValue) === true || inputValue === 0) {
       alert("Numarul introdus este invalid");
       return 0;
   }
   let result = myFunction(inputValue);
   console.log("Rezultatul este " + result + "%");
   alert("Rezultatul este afisat in consola");
};

//Exercitiul 2
function myFunction2() {
    let ex2 = document.getElementById("ex2");
    //form
    let form = document.createElement("form");
    //first name
    let firstNameLabel = document.createElement("label");
    let firstNameLabelText = document.createTextNode("Nume");
    firstNameLabel.setAttribute("for", "firstName");
    firstNameLabel.appendChild(firstNameLabelText);
    
    firstNameLabel.style.color = "blue";
           
    let firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.setAttribute("type", "text");
    
    function addBr(n) {
       for (i = 0; i < n ; i++) {
           form.appendChild(document.createElement("br"));
       } 
    };
    
    form.appendChild(firstNameLabel);
    addBr(1);
    form.appendChild(firstNameInput);
    
    addBr(2);
    
    //email
    let emailLabel = document.createElement("label");
    let emailLabelText = document.createTextNode("Email");
    emailLabel.setAttribute("for", "email");
    emailLabel.appendChild(emailLabelText);
    
    emailLabel.style.color = "red";
    
    let emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("type", "email");
    
    form.appendChild(emailLabel);
    addBr(1);
    form.appendChild(emailInput);
    
    //mesaj
    let textLabel = document.createElement("label");
    let textLabelText = document.createTextNode("Mesaj");
    textLabel.setAttribute("for", "text");
    textLabel.appendChild(textLabelText);
    
    textLabel.style.color = "green";
    
    let textInput = document.createElement("textarea");
    textInput.setAttribute("id", "text");
    
    addBr(2);
    
    form.appendChild(textLabel);
    addBr(1);
    form.appendChild(textInput);
    
    //submit
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("onClick", "submitClick()");
    
    addBr(2);
    
    form.appendChild(submitButton);
        
    ex2.appendChild(form);
    
    
};

myFunction2();




