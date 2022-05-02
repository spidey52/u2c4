// write js code here corresponding to index.html
// You should add submit event on the form


let form = document.getElementById("masaiForm")

let sechdule = JSON.parse(localStorage.getItem("schedule")) || []

form.addEventListener("submit", function (e) {
	e.preventDefault();

	sechdule.push({
		matchNum: form.matchNum.value,
		teamA: form.teamA.value,
		teamB: form.teamB.value,
		date: form.date.value,
		venue: form.venue.value
	})

	localStorage.setItem("schedule", JSON.stringify(sechdule))

})

