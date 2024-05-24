// Create dropdown menu function
function createDropdown(title, links) {
    // Create dropdown container
    var dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    // Create button
    var button = document.createElement("button");
    button.classList.add("dropbtn");
    button.textContent = title;

    // Append button to dropdown container
    dropdown.appendChild(button);

    // Create dropdown content container
    var dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    // Create links and append to dropdown content container
    links.forEach(function(link) {
        var a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        dropdownContent.appendChild(a);

        //Check if it contains an indicator
        if (link.indicator)
            {
                var img = document.createElement("img");
                img.src = link.indicator;
                img.classList.add("dropdown-indicator");
                // Append image next to text
                a.appendChild(img);
            }
    });

    // Append dropdown content container to dropdown container
    dropdown.appendChild(dropdownContent);

    // Append dropdown container to body
    document.getElementById("header").appendChild(dropdown);
}

// Create dropdown menus
createDropdown("Pages", [
    {url: "index.html", text: "Home"},
    {url: "contact.html", text: "Contact"}
]);

createDropdown("Games", [
    {url: "bloodfuel.html", text: "Blood Fuel ", indicator: "Media/Indicators/Unity.png"},
    {url: "dungeonbounties.html", text: "Dungeon Bounties ", indicator: "Media/Indicators/UE5.png"},
    {url: "kneecappers.html", text: "Knee Cappers ", indicator: "Media/Indicators/UE5.png"},
    {url: "thruster.html", text: "Thruster ", indicator: "Media/Indicators/Unity.png"},
    //{url: "poultry.html", text: "Poultry Panic ", indicator: "Media/Indicators/Clickteam.png"}
]);

//createDropdown("Software", [
    //{url: "", text: "ATLAS Character Maker"},
    //{url: "bloodfuel.html", text: "Garden Discord Bot"},
    //{url: "#", text: "RPG Discord Bot"}
//]);

createDropdown("Experiments", [
    {url: "Procedural.html", text: "Procedural Generation", indicator: "Media/Indicators/UE5.png"}
]);

createDropdown("Projects", [
    {url: "infinitefinality.html", text: "Infinite Finality"},
    {url: "SkyJellies.html", text: "Sky Jellies"},
    {url: "ATLAS.html", text: "ATLAS"}
]);