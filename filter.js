// This function will filter icons based on the label text
function filterIcons() {
    let searchBox = document.getElementById("searchBox");
    let filter = searchBox.value.toLowerCase();  // Convert search input to lowercase
    let previews = document.getElementsByClassName("preview");
    let resultCount = 0;  // To track how many icons match the search

    // Loop through all preview divs (icons)
    for (let i = 0; i < previews.length; i++) {
        let preview = previews[i];
        let label = preview.getElementsByClassName("label")[0].textContent.toLowerCase();  // Get the label text

        // If the label contains the search term, show the icon and increment result count
        if (label.indexOf(filter) > -1) {
            preview.style.display = "";  // Show the icon
            resultCount++;  // Increment result count
        } else {
            preview.style.display = "none";  // Hide the icon
        }
    }

    // Display the result count
    document.getElementById("resultCount").textContent = `Results: ${resultCount} icon(s) found`;
}