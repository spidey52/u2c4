// write js code here corresponding to matches.html

let sechdule = JSON.parse(localStorage.getItem("schedule")) || []
let favourites = JSON.parse(localStorage.getItem("favourites")) || []

let filtervenue = document.querySelector('#filterVenue')

display(sechdule);

filtervenue.addEventListener('click', function (e) {
	filter(e.target.value);
})


function display(data) {
	let tbody = document.querySelector("tbody")

	tbody.innerHTML = null

	data.forEach(function (e) {
		tbody.append(createRow(e))
	})
}


function createRow(data) {

	let row = document.createElement("tr")
	let teamA = document.createElement("td")
	let teamB = document.createElement("td")
	let date = document.createElement("td")
	let venue = document.createElement("td")
	let matchNum = document.createElement("td")
	let favourite = document.createElement("td")

	favourite.addEventListener("click", function () {
		favourites.push(data);
		localStorage.setItem("favourites", JSON.stringify(favourites))
	})

	teamA.innerHTML = data.teamA
	teamB.innerHTML = data.teamB
	date.innerHTML = data.date
	venue.innerHTML = data.venue
	matchNum.innerHTML = data.matchNum

	favourite.innerHTML = "Add to favorites"
	favourite.style.color = "green"
	favourite.style.fontweight = "bold"
	favourite.style.cursor = "pointer"

	row.append(matchNum, teamA, teamB, date, venue, favourite)

	return row
}

function filter(val) {
	if (val === "none")
		display(sechdule)
	else
		display(sechdule.filter(ele => ele.venue === val))
}

