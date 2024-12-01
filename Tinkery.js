import { items } from './items.js';
import { allRecipes } from './recipes.js';
import { rawItems } from './rawItems.js';

/*
TODO LIST:

NOTES:
- i didn't include music box recipes or ecto mist recipes
- i use details and percentages for PC version of terraria; if you're using different console, might not be perfectly right

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
        iconDiv.classList.add('iconPanel');
        if (items[i].hardmode === true) {
            iconDiv.classList.add('hardmode');
        } else {
            iconDiv.classList.add('prehardmode');
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
    document.getElementById("tagsContainer").innerHTML = "";

    // Get and assign item attributes from items array
    let name = this.getAttribute('data-name');
    let item = items.find(i => i.name === name); // Get data of item from items array
    if (item === undefined) {
        item = rawItems.find(i => i.name === name);
    }

    // Fill info panel with item's details
    fillInfoPanel(item, this.classList.value);

    let toggleTreeTraversal = document.getElementById("toggleTreeTraversal");

    // console.log(this.classList.contains("icon"));
    // Call recipe tree
    if(this.classList.contains("iconPanel")) { // If it's in icon panel, always get recipe
        document.getElementById("recipeContent").innerHTML = "";
        getFullCraftingRecipe(name);
    } else if (!toggleTreeTraversal.checked) {
        // Don't get recipe if tree traversal isn't on
    } else { // Get recipe if tree traversal is on
        document.getElementById("recipeContent").innerHTML = "";
        getFullCraftingRecipe(name);
    }
    
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
    url.title = "Go to " + item.name + " official wiki";
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

    // Add tags
    if(item.tags) {
        for(let i = 0; i < item.tags.length; i++) {
            let tag = document.createElement("li");
            tag.innerHTML = item.tags[i];
            tag.classList.add("tag");
            document.getElementById("tagsContainer").appendChild(tag);
        }
    };
    

    // Set attributes in info panel
    document.getElementById("selectedItemName").innerHTML = item.name;
    document.getElementById("iconPicContainer").appendChild(url);
    document.getElementById("iconPicContainer").appendChild(urlIcon);
    document.getElementById("tooltipVal").innerHTML = tooltip.replace(/\n/g, "<br>");

    // Get location information for the item
    fillLocationTable(item);
}

// Fill location information about the item into the info panel on the right
function fillLocationTable(item) {
    // Get location table and clear it
    let locationObj = item.location;
    let locationTable = document.getElementById("itemLocationTable");
    locationTable.innerHTML = ""; // Clear HTML
    
    // Check if oject has location attribute. If not, bail
    if(!locationObj) {
        locationTable.style.display = 'none';
        return; 
    }

    // Set display to table and add table body for content
    locationTable.style.display = 'table';
    let locationTableBody = document.createElement("tbody");
    locationTableBody.id = "itemLocationTableBody";
    locationTable.appendChild(locationTableBody);

    // Create table header info
    let tableHeader = document.createElement("thead");
    let headerLocation = document.createElement("th");
    let headerOdds = document.createElement("th");
    let headerRow = document.createElement("tr");

    // Set header content and styling
    headerLocation.innerHTML = "Location";
    headerLocation.style = "width: 35%";
    headerOdds.innerHTML = "Odds";

    // Append elements
    headerRow.appendChild(headerLocation);
    headerRow.appendChild(headerOdds);
    tableHeader.appendChild(headerRow);
    locationTable.appendChild(tableHeader);

    // Dynamically add rows and inner odds table
    locationObj.forEach(location => {
        let row = document.createElement("tr");
        let locationName = document.createElement("td");
        locationName.innerHTML = location.place;
        row.appendChild(locationName);

        // Add odds to table
        if(Array.isArray(location.odds)) { // If odds is an array, make a table and add all rows
            let oddsTable = document.createElement("table");
            oddsTable.id = "oddsTable";
            location.odds.forEach((obj, index) => {
                const keys = Object.keys(obj);
                keys.forEach((key) => {
                    let oddsRow = document.createElement("tr");
                    let oddsLocation = document.createElement("td");
                    let oddsChance = document.createElement("td");

                    oddsLocation.innerHTML = key;
                    oddsChance.innerHTML = obj[key];

                    oddsRow.appendChild(oddsLocation);
                    oddsRow.appendChild(oddsChance);
                    oddsTable.appendChild(oddsRow);
                });
            });
            row.appendChild(oddsTable);
        } else { // If odds is not an array, then it's just a base percentage - just add it as a cell
            let odds = document.createElement("td");
            odds.innerHTML = location.odds;
            row.appendChild(odds);
        }

        // Append the row to the table body
        locationTableBody.appendChild(row);
    });

    // Append table body to the table
    locationTable.appendChild(locationTableBody);
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




// Formatting all recipe data for the clicked item
function getFullCraftingRecipe(recipeName) {
    let recipe = allRecipes.find(r => r.name === recipeName);
    let parentRecipes;
    
    if(!recipe || recipe.recipes === undefined) {
        recipe = {
            name: recipeName
        }
        parentRecipes = addParents(recipe);
    } else {
        parentRecipes = addParents(recipe);
        addIngredients(recipe.recipes);
    }

    // Adds first layer of parent recipes for a clicked item
    function addParents(recipe) {
        const recipeName = recipe.name;

        let parentRecipeData = {
            name: recipe.name,
            children: []
        };

        // Find all recipes where this item is used as an ingredient
        let parentRecipes = allRecipes.filter(r =>
            r.recipes.some(recipe =>
                recipe.ingredients.some(ing => ing.name === recipeName)
            )
        );

        if (parentRecipes.length === 0) return parentRecipeData; // Base case: no parents found, stop recursion

        // Iterate through all parent recipes
        parentRecipes.forEach(parentRecipe => {
            let recipeContainsItemAsIngredient = false;
            if (!parentRecipeData.children.some(parent => parent.name === parentRecipe.name)) {
                // Create a parent node for each recipe entry in the parent recipe
                parentRecipe.recipes.forEach(parentRecipeEntry => {
                    if (parentRecipeEntry.ingredients.some(ing => ing.name === recipeName)) {
                        // Set flag to true
                        recipeContainsItemAsIngredient = true;
                    }
                });

                // If flag is true, add that recipe to parents
                if(recipeContainsItemAsIngredient) {
                    let parentNode = {
                        name: parentRecipe.name
                    };
                    
                    // Attach the parent node to the current recipe
                    parentRecipeData.children.push(parentNode);
                }
            }
        });

        return parentRecipeData;
    }

    // Function to recursively add ingredients if they exist as recipes
    function addIngredients(ingredientList) {
        // Base case: if no ingredients, stop recursion
        if (ingredientList.length === 0) {
            return
        };

        // Check if supplied recipe ingredients are have their own recipe; add ingredients if so; do this recursively for all ingredients until the end of the tree
        for (let i = 0; i < ingredientList.length; i++) { // For list of recipes of the clicked item
            for (let j = 0; j < ingredientList[i].ingredients.length; j++) { // For list of ingredients for each recipe
                let ingredientRecipe = allRecipes.find(r => r.name === ingredientList[i].ingredients[j].name);
                if(ingredientRecipe) {
                    ingredientList[i].ingredients[j].children = ingredientRecipe.recipes;
                    addIngredients(ingredientList[i].ingredients[j].children);
                }
            }
        }
    }

    // Fix data hierarchical naming format for D3.js
    function renameProperties(obj) {
        // Check if the object is an array or object
        if (Array.isArray(obj)) {
            return obj.map(item => renameProperties(item));
        } else if (typeof obj === "object" && obj !== null) {
            const newObj = {};
            for (const key in obj) {
                let newKey = key;
                // Rename the keys if they match
                if (key === "recipes" || key === "ingredients") {
                    newKey = "children";
                }
                // Recurse for nested objects or arrays
                newObj[newKey] = renameProperties(obj[key]);
            }
            // Check and handle the "nested children array" case
            if (newObj.children && Array.isArray(newObj.children)) {
                newObj.children = flattenChildren(newObj.children);
            }
            return newObj;
        }
        // Return primitive values unchanged
        return obj;
    }
    
    // Helper function to flatten nested children arrays
    function flattenChildren(childrenArray) {
        // Check if the array only contains one object with its own "children" array
        if (
            childrenArray.length === 1 &&
            childrenArray[0].children &&
            Array.isArray(childrenArray[0].children)
        ) {
            // Replace the current array with the nested "children" array
            return flattenChildren(childrenArray[0].children);
        }
        return childrenArray.map(child => renameProperties(child)); // Ensure all children are processed
    }    

    let treeData = renameProperties(recipe);
    
    // Create the recipe tree
    createTree(treeData, parentRecipes);
}




// Draw full recipe tree with all styling
function createTree(treeData, parentRecipes) {
    // Set dimension variables
    const nodeWidth = 75; // Horizontal spacing between nodes
    const nodeHeight = 120; // Vertical spacing between nodes
    const container = d3.select("#recipeContent");
    const containerWidth = container.node().clientWidth;

    // Container that holds all trees and zoom g elements
    const svg = container
        .append("svg")
        .attr("width", "100%")
        .attr("height", "95%");

    // --- ZOOM AND PAN ---
    // Add a 'g' element for zoom/pan transformations
    const zoomG = svg.append("g")
    .attr("transform", `translate(${containerWidth / 2}, 50) scale(0.9)`);

    const initialTransform = d3.zoomIdentity
    .translate(containerWidth / 2, 50)
    .scale(0.9);

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.5, 2]) // Min and max zoom levels
        .on("zoom", (event) => {
            zoomG.attr("transform", event.transform); // Apply transformations to the 'g' group
        });

    // Apply zoom behavior to the SVG
    svg.call(zoom)
    .call(zoom.transform, initialTransform); // Set the initial zoom transform

    // Apply the same initial transform to the 'g' group
    zoomG.attr("transform", initialTransform);

    // Disable double-click to zoom
    d3.select("svg").on("dblclick.zoom", null);

    
    // --- END ZOOM AND PAN ---






    // Create a D3 hierarchy for data
    const root = d3.hierarchy(treeData); // Complete recipe info
    const parentNodes = d3.hierarchy(parentRecipes) // Direct parent recipes

    // Define tree layout / spacing between nodes
    const treeLayout = d3.tree().nodeSize([nodeWidth, nodeHeight]);
    treeLayout.separation((a, b) => (a.parent === b.parent ? 1 : 1.5));

    // Create tree layout for both datasets (recipes and parent recipes)
    treeLayout(root);
    treeLayout(parentNodes);


    // --- Gradient stuff ---
    // Add <defs> for gradients to the SVG
    const defs = svg.append("defs");

    // Define the blue "finalCraftGradient"
    const finalCraftGradient = defs.append("linearGradient")
        .attr("id", "finalCraftGradient")
        .attr("gradientTransform", "rotate(135)");

    finalCraftGradient.append("stop").attr("offset", "0%").attr("stop-color", "#5f63d3");
    finalCraftGradient.append("stop").attr("offset", "25%").attr("stop-color", "#6fa4ff");
    finalCraftGradient.append("stop").attr("offset", "50%").attr("stop-color", "#36d1dc");
    finalCraftGradient.append("stop").attr("offset", "75%").attr("stop-color", "#76ffb8");
    finalCraftGradient.append("stop").attr("offset", "100%").attr("stop-color", "#5f63d3");

    finalCraftGradient.attr("gradientTransform", "rotate(135)")
    .append("animateTransform")
    .attr("attributeName", "gradientTransform")
    .attr("type", "translate")
    .attr("from", "0 0")
    .attr("to", "0 100")
    .attr("dur", "8s")
    .attr("repeatCount", "indefinite");

    // Define the red "hardmodeFinalCraftGradient"
    const hardmodeFinalCraftGradient = defs.append("linearGradient")
        .attr("id", "hardmodeFinalCraftGradient")
        .attr("gradientTransform", "rotate(135)");

    hardmodeFinalCraftGradient.append("stop").attr("offset", "0%").attr("stop-color", "#db406b");
    hardmodeFinalCraftGradient.append("stop").attr("offset", "25%").attr("stop-color", "#ff6b8a");
    hardmodeFinalCraftGradient.append("stop").attr("offset", "50%").attr("stop-color", "#ff8e4a");
    hardmodeFinalCraftGradient.append("stop").attr("offset", "75%").attr("stop-color", "#ffd27f");
    hardmodeFinalCraftGradient.append("stop").attr("offset", "100%").attr("stop-color", "#db406b");

    // Animate the position of the gradient
    hardmodeFinalCraftGradient.attr("gradientTransform", "rotate(135)")
    .append("animateTransform")
    .attr("attributeName", "gradientTransform")
    .attr("type", "translate")
    .attr("from", "0 0")
    .attr("to", "0 100")
    .attr("dur", "8s")
    .attr("repeatCount", "indefinite");

    // --- End gradient stuff


    // Upward Tree
    const gUpward = zoomG.append("g")
    .attr("id", "upward-tree")
    .attr("transform", "translate(0, 250)"); // Center root vertically

    gUpward.selectAll("line")
        .data(parentNodes.links())
        .enter()
        .append("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => -d.source.y) // Reverse y-coordinates
        .attr("x2", d => d.target.x)
        .attr("y2", d => -d.target.y) // Reverse y-coordinates
        .attr("stroke", "#313562")
        .style("stroke-width", 3);


    // Create downward recipe tree
    const gDownward = zoomG.append("g")
    .attr("id", "downward-tree")
    .attr("transform", "translate(0, 250)"); // Center root vertically

    // Draw links (horizontal + vertical "L" connectors) for downward tree
    gDownward.selectAll(".link")
    .data(root.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", d => {
        // Start at the bottom of the source node
        const startX = d.source.x;
        const startY = d.source.y;

        // Go straight down to the vertical midpoint between source and target
        const midY = (d.source.y + d.target.y) / 2;

        // Go horizontally to the x-coordinate of the target node
        const endX = d.target.x;
        const endY = d.target.y;

        // Construct a "T" shape path
        return `M${startX},${startY} 
                V${midY} 
                H${endX} 
                V${endY}`;
    })
    .style("fill", "none")
    .style("stroke", "#313562") // Customize as needed
    .style("stroke-width", 3);

    addTreeStyling(root, gDownward, "down");
    addTreeStyling(parentNodes, gUpward, "up");


    // --- Recipe option
    // Create optional recipe crafting symbol on the tree
    const optionalRecipe = gDownward.selectAll(".optionalRecipe")
    .data(root.descendants().filter(d => d.data.invisible))
    .enter()
    .append("g")
    .attr("class", "optional")
    .attr("transform", d => `translate(${d.x},${d.y})`);

    // Add circles to nodes
    optionalRecipe.append("circle")
        .attr("r", 10)
        .attr("fill", "#ffffff");

    optionalRecipe.append("text")
        .text("~")
        .style("font-size", "21px")
        .attr("x", -4.5)
        .attr("y", 7.5);

    // Turn off zoom and pan when hovering over an icon
    d3.selectAll('.icon')
    .on('mouseover', () => {
        svg.on('.zoom', null);
    })
    .on('mouseout', () => {
        svg.call(zoom);
    });


    // Creates tree with all styling (icon pic, gradient, onClick, etc.)
    function addTreeStyling(data, gElement, upOrDown) {
        // Create nodes
        const nodes = gElement.selectAll(".node")
        .data(data.descendants().filter(d => !d.data.invisible))
        .enter()
        .append("g")
        .attr("class", "node")

        if(upOrDown === "up") {
            nodes.attr("transform", d => `translate(${d.x},${-d.y})`);
        } else if (upOrDown === "down") {
            nodes.attr("transform", d => `translate(${d.x},${d.y})`);
        }
        

        // Create an inner `g` group for hover effects
        const hoverGroup = nodes.append("g")
        .attr("class", d => {
            // Find the corresponding item in the items array
            const item = items.find(item => item.name === d.data.name);
            // Create a class list based on item properties
            let classList = "icon recipeNode";
            if (item) {
                if (item.hardmode) {
                    classList += " hardmode";
                } else {
                    classList += " prehardmode";
                }
                if (item.finalCraft) classList += " finalCraft";
            }

            // If the item is undefined, that means it's a raw item - look there instead
            if (item === undefined) {
                classList += " rawItem";
            }

            return classList;
        })
        .attr("data-name", d => d.data.name)
        .on("click", function(event, d) {
            iconOnClick.call(this, event, d)
        });

        // Create rect element on node
        hoverGroup.append("rect")
        .attr("rx", 10)
        .attr("x", -30)
        .attr("y", -30)
        .attr("height", 60)
        .attr("width", 60)
        .style("fill", function(d) {
            const item = items.find(item => item.name === d.data.name);
            if (item === undefined) { return; }
            if (item.finalCraft) {
                return item.hardmode ? "url(#hardmodeFinalCraftGradient)" : "url(#finalCraftGradient)"
            }
        })
        .style("stroke", function(d) {
            const item = items.find(item => item.name === d.data.name);
            if (item) {
                return item.hardmode ? "#b31c2b" : "rgb(29 26 38 / 41%)";
            }
        });

        // Append images to each node with the correct icon path
        hoverGroup.append("image")
        .attr("xlink:href", d => {
            // Find the matching item in items array based on node name
            let item = items.find(item => item.name === d.data.name);
            if (item === undefined) {
                item = rawItems.find(item => item.name === d.data.name);
            } else if(Array.isArray(item.iconLocation)) {
                return item.iconLocation[0];
            }

            return item ? item.iconLocation : "";
        })
        .attr("width", 32)
        .attr("height", 32)
        .attr("x", -15)
        .attr("y", -15);

        // Add text to nodes only if the data point has a 'text' attribute
        nodes.append("text")
        .filter(d => d.data.text)
        .text(d => d.data.text)
        .attr("y", 45)
        .style("font-size", "16px")
        .style("fill", "#fff")
        .each(function() { 
            const bbox = this.getBBox();
            d3.select(this).attr("x", -bbox.width / 2);
        });
    }
}