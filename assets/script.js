var apiKey = "3aec6929e5ae8b8999152eb3d38997f4";
var searchForm = document.querySelector("#search-form");
var submitButton = document.querySelector("#submit-button")


submitButton.addEventListener("click", handleCitySearch)

function handleCitySearch(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector("#searchInput").value.trim();
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInputVal + "&appid=" + apiKey;

    fetch(requestUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
}