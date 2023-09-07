//Get information from inputs, and create random numbers
function number() {
    var nombre1 = document.getElementById("TextInput").value;
    var nombre2 = document.getElementById("TextInput2").value;
    nombre_random_1 = Math.floor((Math.random() * nombre1+1));
    nombre_random_2 = Math.floor((Math.random() * nombre2+1));

    if (nombre_random_1 == 0){
        nombre_random_1 = 1
    }
    if (nombre_random_2 == 0){
        nombre_random_2 = 1
    }

    if (nombre_random_1 > 0 && nombre_random_2 > 0 && nombre1 != "" && nombre2 != ""){
        document.getElementById("calcul").innerHTML = "What is the result of: " + nombre_random_1 + "*" + nombre_random_2;
    }else{
        document.getElementById("calcul").innerHTML = "First or second number must be greater or equal to 0.";
    };

    var x = document.getElementById("resultDiv");
    if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
    };
};

//When button "Enter" is pressed - Faster way to enter the result
window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        resultButton();
    };
});

//Verify the result answer from the user and what it is expected
function resultButton() {
    result = nombre_random_1 * nombre_random_2;
    resultUser = document.getElementById("resultInput").value;
    if (resultUser != result) {
        document.getElementById("calcul").innerHTML = "Not the right answer, try again! " + nombre_random_1 + "*" + nombre_random_2;
    } else {
        document.getElementById("calcul").innerHTML = "Good! Next in 2 second";
        setTimeout(function(){
            document.getElementById("calcul").innerHTML = "Go";
        }, 1000);
        setTimeout(function(){
            number()
        }, 2000);
        var x = document.getElementById("resultDiv");
        x.style.display = "none";
    };
};