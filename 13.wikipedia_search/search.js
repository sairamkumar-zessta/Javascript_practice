const searchInputEl = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const spinner = document.getElementById("spinner");
function createAndAppendSearchResult(result){
    const {title, link, description} = result;
    const resultContEl = document.createElement("div");
    resultContEl.classList.add("result-item");
    searchResults.appendChild(resultContEl);
    const titleEl = document.createElement("a");
    titleEl.classList.add("result-title");
    titleEl.textContent = title;
    titleEl.href=link;
    resultContEl.appendChild(titleEl);
    const titleBreak = document.createElement("br");
    resultContEl.appendChild(titleBreak);
    const linkEl = document.createElement("a");
    linkEl.classList.add("result-url");
    linkEl.textContent = link;
    linkEl.href=link;
    resultContEl.appendChild(linkEl);
    const linkBreak = document.createElement("br");
    resultContEl.appendChild(linkBreak);
    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    resultContEl.appendChild(descriptionEl);
}
const displayResults = function(search_results){
    for (const result of search_results){
        createAndAppendSearchResult(result)
    }
}
function searchWikipedia(event){
    if (event.key === "Enter"){
        spinner.classList.toggle("d-none");
        searchResults.innerHTML="";
        const searchInput = searchInputEl.value;
        const url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        const options = {
            method : "GET"
        }
        fetch(url,options).then(function(response){
            return response.json();
        })
        .then(
            function(jsonData){
                const {search_results} = jsonData;
                spinner.classList.toggle("d-none");
                displayResults(search_results)
            }
        )
    }

}
searchInputEl.addEventListener("keydown",searchWikipedia);