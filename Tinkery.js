import { items } from './items.js';
import { recipes } from './recipes.js';

// Put all icons in iconContainer
function initIconPanel() {
    for (let i = 0; i < items.length; i++) {
        // Create icon element
        let iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');
        iconDiv.setAttribute('title', items[i].tooltip);

        // Create icon image
        let image = document.createElement('img');
        image.src = items[i].iconLocation;
        iconDiv.appendChild(image);

        // Create icon label (item name text)
        let iconName = document.createElement('p');
        iconName.innerText = items[i].name;
        iconDiv.appendChild(iconName);

        // Append icon to iconContainer
        document.getElementById("iconContainer").appendChild(iconDiv);
    }
};

initIconPanel();