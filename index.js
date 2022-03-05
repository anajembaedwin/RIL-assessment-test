const button = document.getElementById("clickMe")
const square = document.getElementById("circle")
const box = document.getElementById("box")

let switched = false

button.addEventListener("click", () => {
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

	switched = !switched
})
