const button = document.getElementById("next");
const dogImage = document.getElementById("dogImage");

let dogs = [];
let index = 0;

fetch ("indexHW.json")
    .then (response => response.json())
    .then(data => {
        dogs = data;
        dogsImage.src = dogs[index];
    })
    .catch(err => console.error("JSON download failed", err));

button.addEventListener("click", () =>{
    if (dogs.length > 0){
        index = (index +1) % dogs.length;
        dogImage.src = dogs[index];
    }
});