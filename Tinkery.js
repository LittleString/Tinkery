import { items } from './items.js';
import { recipes } from './recipes.js';

/*
TODO LIST:

- Fix page resizing issues
- Create rawItems.js with overworld items involved in crafting recipes
- Create tag display in infoPanel
- Add music boxes
- Add "Where to find" visual on infoPanel
- Add title above iconPanel
- Add key under iconPanel
- Add footer with disclaimer

*/




// Put all icons in iconContainer, initialize filter options
function initIconPanel() {
    let filterOptions = new Set();

    for (let i = 0; i < items.length; i++) {
        // Add tags to filterOptions
        items[i].tags.forEach(tag => filterOptions.add(tag));

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

        // If there are multiple iconLocations (meaning multiple icon images), set it up to rotate through them (Counterweight uses this, for example)
        if(Array.isArray(items[i].iconLocation)) {
            image.src = items[i].iconLocation[0];
            rotateImages(image, items[i].iconLocation);
        } else {
            image.src = items[i].iconLocation;
        }
        iconDiv.appendChild(image);

        // Append icon to iconContainer
        document.getElementById("iconContainer").appendChild(iconDiv);

        // Attach onClick function to div
        iconDiv.addEventListener('click', iconOnClick);
    }

    // Change set to array
    filterOptions = Array.from(filterOptions);

    // Create filter options based on tags
    for(let i = 0; i < filterOptions.length; i++) {
        // Create HTML elements
        let label = document.createElement('label');
        let checkbox = document.createElement('input');

        // Assign attributes
        checkbox.type = "checkbox";
        checkbox.name = filterOptions[i];
        // checkbox.classList.add("tagFilter");

        // Create event listeners for the checkboxes
        checkbox.addEventListener("change", applyFilters);

        // Append elements
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode("\t" + filterOptions[i]));
        document.getElementById("filterOptions").appendChild(label);
    }
};

// Filter button event listener
document.getElementById("filterSearch").addEventListener("click", function (event) {
    const popup = document.getElementById("filterPopup");
    const filterButton = document.getElementById("filterSearch");
    popup.classList.toggle("show");
  
    // Get button position and set the popup next to it
    const buttonRect = document.getElementById("filterSearch").getBoundingClientRect();
    popup.style.top = `${buttonRect.bottom + window.scrollY}px`;
    popup.style.left = `${buttonRect.left + window.scrollX}px`;

    // Close popup when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && !filterButton.contains(event.target)) {
            popup.classList.remove("show");
        }
    });

    // Close popup on window resize
    window.addEventListener("resize", function () {
        popup.classList.remove("show");
    });
});

// Search bar event listener - real time search
document.getElementById("iconSearchBar").addEventListener("input", applyFilters);

// Filter options filtering logic
function applyFilters() {
    // Get and assign search criteria and icons
    const selectedTags = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.name);
    const searchTerm = document.getElementById("iconSearchBar").value.toLowerCase();
    const icons = document.getElementById("iconContainer").getElementsByClassName("icon");

    // Checks each item if search or tags filter applies; if not, hide it
    Array.from(icons).forEach(icon => {
        const iconName = icon.getAttribute("data-name").toLowerCase();
        const item = items.find(item => item.name.toLowerCase() === iconName);
        
        // Check if the item meets both search and tag filter criteria
        const matchesSearch = searchTerm === "" || iconName.includes(searchTerm);
        const matchesTags = selectedTags.length === 0 || item.tags.some(tag => selectedTags.includes(tag)); // If the selected item contains at least one of the selected tags from filterOptions
        
        if (matchesSearch && matchesTags) {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
        }
    });
}






// When clicking an icon in left panel, info panel updates with details about the item, and recipes are drawn
function iconOnClick() {
    // Clear prior HTML
    document.getElementById("iconPicContainer").innerHTML = "";
    document.getElementById("recipeContent").innerHTML = "";

    // Get and assign item attributes from items array
    let name = this.getAttribute('data-name');
    let item = items.find(i => i.name === name); // Get data of item from items array

    // Fill info panel with item's details
    fillInfoPanel(item, this.classList.value);

    // Call recipe tree
    getRecipe(name);
}

// Takes in an item and a classList for icon styling and fills out information panel on the right
function fillInfoPanel(item, classList) {
    // Assign item data to variables
    let tooltip = item.tooltip;
    let wikiLink = item.wikiLink;

    // Create icon image and clear current icon
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    imageDiv.classList.value = classList; // Give icon in info panel same styling

    // Check if iconLocation is an Array; if so, cycle through images
    if(Array.isArray(item.iconLocation)) {
        image.src = item.iconLocation[0];
        rotateImages(image, item.iconLocation);
    } else {
        image.src = item.iconLocation;
    }    
    imageDiv.appendChild(image);
    

    // Hook up info panel icon to item's wiki URL
    let url = document.createElement('a');
    let urlIcon = document.createElement('img');
    urlIcon.src = "styling/arrow-up-right-from-square-solid.svg";
    urlIcon.classList.add("urlIcon");
    url.href = wikiLink;
    url.title = "Go to " + name + " official wiki";
    url.target = "_blank";
    url.appendChild(imageDiv);

    // Create value portion with coins
    const coins = [
        { type: 'platinumCoin', value: item.value.platinum },
        { type: 'goldCoin', value: item.value.gold },
        { type: 'silverCoin', value: item.value.silver },
        { type: 'copperCoin', value: item.value.copper }
    ];

    let fullValueContainer = document.getElementById("valueVal");
    fullValueContainer.innerHTML = ""; // Clear previous values

    coins.forEach(coin => {
        // Create a div for the coin icon
        const coinIcon = document.createElement('div');
        coinIcon.classList.add('coin', coin.type);
        
        // Create a span for the coin value
        const coinValue = document.createElement('span');
        coinValue.classList.add('coin-value');
        coinValue.textContent = `${coin.value}`;
        
        // Create a container div for each coin + value pair
        const coinContainer = document.createElement('div');
        // coinContainer.classList.add('coin-item');

        // Append the coin icon and value to the container
        coinContainer.appendChild(coinIcon);
        coinContainer.appendChild(coinValue);

        // Append the coin item container to the main container
        fullValueContainer.appendChild(coinContainer);
    });
    
    // Set attributes in info panel
    document.getElementById("selectedItemName").innerHTML = item.name;
    document.getElementById("iconPicContainer").appendChild(url);
    document.getElementById("iconPicContainer").appendChild(urlIcon);
    document.getElementById("tooltipVal").innerHTML = tooltip.replace(/\n/g, "<br>");
}

// Function to cycle through images
function rotateImages(imageElement, imagePaths) {
    let index = 0;
    
    // Set interval to change the image every 2 seconds
    setInterval(() => {
        index = (index + 1) % imagePaths.length; // Loop back to the start when reaching the end
        imageElement.src = imagePaths[index];
    }, 2000);
}

initIconPanel();















/*
Final craft = true -> that will be highest node in tree

will need to get recipe index of selected icon
*/

// Formatting all recipe data for the clicked item
function getRecipe(recipeName) {
    // Get the recipe of clicked item
    let recipe = recipes.find(r => r.name === recipeName);

    // If recipe from above is undefined, that means you selected a raw element - it doesn't have a crafting recipe.
    let data;
    if(recipe === undefined) {
        data = {
            name: recipeName
        }
    } else {
        // Format data for D3
        data = {
            name: recipe.name,
            children: recipe.ingredients
        };
    }

    // Function to recursively add ingredients as children if they exist as recipes
    function addIngredients(node) {
        if (!node.children) return; // Base case: if no children, stop recursion

        // Check if supplied recipe ingredients are have their own recipe; add ingredients if so; do this recursively for all ingredients until the end of the tree
        for (let i = 0; i < node.children.length; i++) {
            let ingredientRecipe = recipes.find(r => r.name === node.children[i].name);
            
            if (ingredientRecipe) {
                // Add the "ingredients" of the found recipe as children
                node.children[i].children = ingredientRecipe.ingredients;
                // Recursively add children for this ingredient if needed
                addIngredients(node.children[i]);
            }
        }
    }

    // Function to recursively add parent recipes (upward direction)
    function addParents(node) {
        // Find all recipes where this node is used as an ingredient
        let parentRecipes = recipes.filter(r =>
            r.ingredients && r.ingredients.some(ing => ing.name === node.name)
        );

        if (parentRecipes.length === 0) return; // Base case: no parents found, stop recursion

        // Wrap the current node in a new parent structure if there are parent recipes
        parentRecipes.forEach(parentRecipe => {
            // Create a parent node for each recipe that uses the current recipe as an ingredient
            let parentNode = {
                name: parentRecipe.name,
                children: parentRecipe.ingredients.map(ing =>
                    ing.name === node.name ? node : { name: ing.name }
                )
            };

            // Recursively add parents for each of these parent nodes
            addParents(parentNode);

            // Attach the new parent node above the current node structure
            // You can replace `data` with a list of parent nodes if needed
            data = parentNode; // Reassigning to 'data' will change the entire tree to root on this parent
        });
    }

    // Get all children items from this recipe
    addIngredients(data);
    addParents(data);

    // Create the recipe tree
    createTree(data);
}


function createTree(treeData) {
    // Create a D3 hierarchy from the data
    const root = d3.hierarchy(treeData);

    // Set a node spacing factor for each level of depth
    const nodeHeight = 100;  // Adjust this for more or less vertical spacing between nodes
    const calculatedHeight = (root.height + 1) * nodeHeight;
    const width = 1000;

    // Select the div and append an SVG element
    const svg = d3.select("#recipeContent")
    .append("svg")
    .attr("width", width)
    .attr("height", calculatedHeight + 100)
    .append("g")
    .attr("transform", "translate(0, 50)"); // Add top margin for root node

    // Create a tree layout and assign size (vertically aligned)
    const treeLayout = d3.tree().size([width - 100, calculatedHeight]);
    treeLayout(root);

    // Draw straight line links between nodes
    const links = svg.selectAll(".link")
    .data(root.links())
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y)
    .style("stroke", "#000")  // Custom stroke color
    .style("stroke-width", 2);

    // Create nodes
    const nodes = svg.selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.x},${d.y})`);

    
    nodes.append("rect")
    .attr("class", "treeIcon")
    .attr("rx", 10)
    .attr("x", -30)
    .attr("y", -30)
    .attr("fill", "blue")
    

    // Append images to each node with the correct icon path
    nodes.append("image")
    .attr("xlink:href", d => {
        // Find the matching item in items array based on node name
        const item = items.find(item => item.name === d.data.name);
        return item ? item.iconLocation : ""; // Default to empty string if no match
    })
    .attr("width", 32)
    .attr("height", 32)
    .attr("x", -15)
    .attr("y", -15);



    // Append labels to the nodes
    /*
    nodes.append("text")
    .attr("dy", 3)
    .attr("x", d => d.children ? -8 : 8)
    .style("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);
    */
}


