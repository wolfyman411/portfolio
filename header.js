// Nav links
var navbar = document.createElement("nav");
navbar.className = "navbar navbar-expand-lg bg-body-tertiary"

var container = document.createElement("div");
container.className ="container-fluid d-flex flex-row mb-3";
navbar.appendChild(container)

var collapse = document.createElement("div");
collapse.className = "collapse navbar-collapse";
collapse.id = "navbarSupportedContent"
collapse.appendChild(container)

var list = document.createElement("ul");
list.className = "navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row mb-3";
collapse.appendChild(list)

document.getElementById("header").appendChild(list);

function createDropdown(title, links) {
    // Create dropdown and header for each title

    var dropdown = document.createElement("li");
    dropdown.className = "nav-item dropdown "

    var toggle = document.createElement("a");
    toggle.className = "nav-link dropdown-toggle p-3"
    toggle.href = "#"
    toggle.role = "button"
    toggle.text = title
    toggle.ariaExpanded = "false"
    toggle.setAttribute("data-bs-toggle","dropdown")
    dropdown.appendChild(toggle)

    var dropdownmenu = document.createElement("ul");
    dropdownmenu.className = "dropdown-menu"

    links.forEach(function(link) {
        var dropdownitem = document.createElement("li");
        var dropdownitemlink = document.createElement("a");
        dropdownitemlink.href = link.url
        dropdownitemlink.text = link.text
        dropdownitemlink.className = "dropdown-item";
        dropdownitem.appendChild(dropdownitemlink)

        dropdownmenu.appendChild(dropdownitem)
    });

    // Append dropdown content container to dropdown container
    dropdown.appendChild(dropdownmenu);

    // Append dropdown container to body
    list.appendChild(dropdown);
}

// Create dropdown menus
createDropdown("Information", [
    {url: "index.html", text: "Home"},
    {url: "contact.html", text: "Contact"}
]);

createDropdown("Software", [
    {url: "#", text: "Electronics Store"},
]);

createDropdown("Games", [
    {url: "infinitefinality.html", text: "Infinite Finality"},
    {url: "SkyJellies.html", text: "Sky Jellies"},
    {url: "dungeonbounties.html", text: "Dungeon Bounties ", indicator: "Media/Indicators/UE5.png"},
    {url: "kneecappers.html", text: "Knee Cappers ", indicator: "Media/Indicators/UE5.png"},
    {url: "thruster.html", text: "Thruster ", indicator: "Media/Indicators/Unity.png"},
    {url: "bloodfuel.html", text: "Blood Fuel ", indicator: "Media/Indicators/Unity.png"},
]);

//createDropdown("Software", [
    //{url: "", text: "ATLAS Character Maker"},
    //{url: "bloodfuel.html", text: "Garden Discord Bot"},
    //{url: "#", text: "RPG Discord Bot"}
//]);

createDropdown("Experiments", [
    {url: "Procedural.html", text: "Procedural Generation", indicator: "Media/Indicators/UE5.png"}
]);

function toggleGif(event) {
    const clickedItem = event.target
    var alterItem;
    var play = clickedItem.parentElement.children[2]
    var pause = clickedItem.parentElement.children[3]
    if (clickedItem.id === "gifImage")
    {
        alterItem = clickedItem.parentElement.children[1]
        pause.style.display = "none";
        play.style.display = "block";
    }
    else
    {
        alterItem = clickedItem.parentElement.children[0]
        pause.style.display = "block";
        play.style.display = "none";
    }
    alterItem.style.display = "block";
    clickedItem.style.display = "none";
}