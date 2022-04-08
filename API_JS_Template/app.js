const dogButton = document.getElementById("dog-button");
const duckButton = document.getElementById("duck-button");
const randomDuck = document.getElementById("random-duck");
const randomDog = document.getElementById("random-dog");

dogButton.addEventListener("click", function(){
    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => {
            randomDog.innerHTML = `<img src="${data.url}" alt="A random dog image"/>`
        }); 
})

duckButton.addEventListener("click", function(){
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            randomDuck.innerHTML = `<img src="${data.image}" alt="A random fox image"/>`
        });
})