const inputs = [...document.querySelectorAll("input[type=radio]")];
const labels = [...document.querySelectorAll("label")];
let number = "";

function chooseRating() {
    labels.forEach(label => {
        // console.log(rating);
        label.addEventListener("click", ratingSelected)
    })
}

chooseRating();

function ratingSelected(e) {
     number = e.target;

    // reset rating
    if (!number.classList.contains("ratingselected")) {
        labels.forEach(label => {
            // console.log(rating);
            label.classList.remove("ratingselected");
        })

        // rating chosen
        number.classList.add("ratingselected");
    }
    else {
        number.classList.remove("ratingselected");
    }

    number = number.textContent
    return number; 
}





