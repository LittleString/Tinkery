import { items } from './items.js';
import { recipes } from './recipes.js';

// Put all icons in iconContainer
function initIconPanel() {
    for (let i = 0; i < items.length; i++) {
        // Create icon element
        let iconDiv = document.createElement('div');

        // Add classes
        iconDiv.classList.add('icon');
        if (items[i].hardmode === true) {
            iconDiv.classList.add('hardmode');
        }
        if (items[i].finalCraft === true) {
            iconDiv.classList.add('finalCraft');
        }

        // Set attributes
        iconDiv.setAttribute('title', items[i].name); // Set hover text to item name
        iconDiv.setAttribute('data-name', items[i].name);

        // Create icon image
        let image = document.createElement('img');
        image.src = items[i].iconLocation;
        iconDiv.appendChild(image);

        // Append icon to iconContainer
        document.getElementById("iconContainer").appendChild(iconDiv);

        // Attach onClick function to div
        iconDiv.addEventListener('click', iconOnClick);
    }
};

// Search bar event listener - real time search
document.getElementById("iconSearchBar").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const icons = document.getElementById("iconContainer").getElementsByClassName("icon");

    Array.from(icons).forEach(icon => {
        const iconName = icon.getAttribute("data-name").toLowerCase();
        if (searchTerm === "" || iconName.includes(searchTerm)) {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
        }
    });
});

// When clicking an icon in left panel, info panel updates with details about the item, and recipes are drawn
function iconOnClick() {

    // Get and assign item attributes from items array
    let name = this.getAttribute('data-name');
    let item = items.find(i => i.name === name); // Get data of item from items array

    // Assign item data to variables
    let tooltip = item.tooltip;
    let copperValue = item.value.copper;
    let silverValue = item.value.silver;
    let goldValue = item.value.gold;
    let platinumValue = item.value.platinum;
    let wikiLink = item.wikiLink;
    let hardmode = item.hardmode;

    // Create icon image and clear current icon
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    imageDiv.classList.value = this.classList.value; // Give icon in info panel same styling
    image.src = item.iconLocation;
    imageDiv.appendChild(image);
    document.getElementById("iconPicContainer").innerHTML = "";

    // Hook up info panel icon to item's wiki URL
    let url = document.createElement('a');
    let urlIcon = document.createElement('img');
    urlIcon.src = "styling/arrow-up-right-from-square-solid.svg";
    urlIcon.classList.add("urlIcon");
    url.href = wikiLink;
    url.title = "Go to " + name + " official wiki";
    url.target = "_blank";
    url.appendChild(imageDiv);
    
    // Set attributes in info panel
    document.getElementById("selectedItemName").innerHTML = name;
    document.getElementById("iconPicContainer").appendChild(url);
    document.getElementById("iconPicContainer").appendChild(urlIcon);
    document.getElementById("tooltipVal").innerHTML = tooltip.replace(/\n/g, "<br>");
    document.getElementById("valueVal").innerHTML = copperValue+"\t"+silverValue+"\t"+goldValue+"\t"+platinumValue;
    document.getElementById("hardmodeVal").innerHTML = hardmode;

    // Call recipe tree
}

initIconPanel();