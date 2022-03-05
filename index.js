//get the ID properties from index.html (const is used because their variables won't change)
const button = document.getElementById("clickMe")
const square = document.getElementById("circle")
const box = document.getElementById("box")

//Instantiate button (use let to initialize because their variables will change later)
let switched = false

//add EventListener to button
button.addEventListener("click", function() {
	if (switched) {
		circle.style.backgroundColor = "#fff"
		box.style.backgroundColor = "#000"
		box.style.borderWidth = "0px"
	} else {
		circle.style.backgroundColor = "#000"
		box.style.backgroundColor = "#fff"
		box.style.borderStyle = "solid"
		box.style.borderWidth = "1px"
	}

	//This ensures the reverse of the function fires when the button is clicked again
	switched = !switched
})
