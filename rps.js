let options = ['Rock', 'Paper', 'Sessior'];


let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Sessior = document.getElementById("sessior");
let Start = document.getElementById("start");
let USER = document.getElementById("user");
let COMP = document.getElementById("computer");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
USER.style.visibility = "hidden";
COMP.style.visibility = "hidden";

// let hearts = 3;


Start.addEventListener("click", () => {
    USER.style.visibility = "visible";
    COMP.style.visibility = "visible";

    let comp_words = options[Math.floor(Math.random() * options.length)];
    console.log(comp_words);

    Rock.addEventListener("click", () => {
        box1.textContent = "Rock";
        alert("choosing Rock");
        if (comp_words == "Rock") {
            alert("tie");
            box2.textContent = comp_words;
        } else if (comp_words == "Paper") {
            alert("lost");
            box2.textContent = comp_words;
            // hearts -= 1;
        } else {
            alert('win');
            box2.textContent = comp_words;
        }
    })
    Paper.addEventListener("click", () => {
        box1.textContent = "paper"
        alert("choosing paper");
        if (comp_words == "Rock") {
            alert("win");
            box2.textContent = comp_words;
        } else if (comp_words == "Paper") {
            alert('tie');
            box2.textContent = comp_words;
        } else {
            alert("lost");
            box2.textContent = comp_words;
            // hearts -= 1;
        }
    })
    Sessior.addEventListener("click", () => {
        box1.textContent = "Sessior";
        alert("choosing sessior");
        if (comp_words == "Rock") {
            alert("lost");
            box2.textContent = comp_words;
            hearts -= 1;
        } else if (comp_words == "Paper") {
            alert("win");
            box2.textContent = comp_words;
        } else {
            alert("tie");
            box2.textContent = comp_words;
        }
    })
    // if (hearts == 0) {
    //     alert("end game");
    // }





})

