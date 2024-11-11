import { items } from './items.js';
import { recipes } from './recipes.js';

// Put all icons in iconContainer
function initIconPanel() {
    for (let i = 0; i < items.length; i++) {
        // Create icon element
        let iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');
        iconDiv.setAttribute('title', items[i].name); // Set hover text to item name
        iconDiv.setAttribute('name', items[i].name);

        // Create icon image
        let image = document.createElement('img');
        image.src = items[i].iconLocation;
        iconDiv.appendChild(image);

        // Append icon to iconContainer
        document.getElementById("iconContainer").appendChild(iconDiv);
    }
};

// Search bar event listener - real time search
document.getElementById("iconSearchBar").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const icons = document.getElementById("iconContainer").getElementsByClassName("icon");

    Array.from(icons).forEach(icon => {
        const iconName = icon.getAttribute("name").toLowerCase();
        if (searchTerm === "" || iconName.includes(searchTerm)) {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
        }
    });
});


initIconPanel();