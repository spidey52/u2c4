// write js code here corresponding to favourites.html

let favourites = JSON.parse(localStorage.getItem("favourites")) || []

display(favourites)

function display(data) {
	let tbody = document.querySelector("tbody")

	tbody.innerHTML = null

	data.forEach(function (e, index) {
		tbody.append(createRow(e, index))
	})
}

function createRow(data, index) {

	let row = document.createElement("tr")
	let teamA = document.createElement("td")
	let teamB = document.createElement("td")
	let date = document.createElement("td")
	let venue = document.createElement("td")
	let matchNum = document.createElement("td")
	let favourite = document.createElement("td")

	favourite.addEventListener("click", function () {
		favourites.splice(index, 1)
		localStorage.setItem("favourites", JSON.stringify(favourites))
		display(favourites)
	})

	teamA.innerHTML = data.teamA
	teamB.innerHTML = data.teamB
	date.innerHTML = data.date
	venue.innerHTML = data.venue
	matchNum.innerHTML = data.matchNum

	favourite.innerHTML = "Remove from favorites"
	favourite.style.color = "red"
	favourite.style.fontweight = "bold"
	favourite.style.cursor= "pointer"

	row.append(matchNum, teamA, teamB, date, venue, favourite)

	return row
}