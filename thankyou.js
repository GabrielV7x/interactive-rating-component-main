console.log(window.location.search);

let urlParams = new URLSearchParams(window.location.search);
console.log("ADSS");
console.log(urlParams);
let rating = urlParams.get('rating')
console.log(rating);

const answer = document.querySelector(".answer");
answer.textContent = rating;
