const dogButton = document.getElementById("dog-button");
const FoxButton = document.getElementById("fox-button");
const randomFox = document.getElementById("random-fox");
const randomDog = document.getElementById("random-dog");

dogButton.addEventListener("click", function(){
    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => {
            randomDog.innerHTML = `<img src="${data.url}" alt="A random dog image"/>`
        }); 
})

FoxButton.addEventListener("click", function(){
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            randomFox.innerHTML = `<img src="${data.image}" alt="A random fox image"/>`
        });
})