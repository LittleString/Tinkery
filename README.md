# Tinkery
Welcome to **Tinkery**! A one-stop shop for the Tinkerer's Workshop crafting in Terraria. 

Tinkery is based around vanilla, PC console Terraria.

**Disclaimer:** This is a fan-made project inspired by Terraria. This project is not affiliated with, endorsed by, or associated with Re-Logic

# Quick Reference
### Key Features
- Dynamic Crafting Recipes: Generate hierarchical crafting trees for any item used at the Tinkerer's Workshop.
- Searchable & Filterable Icons: Quickly locate items through a responsive interface.
- Detailed Item Information: Learn about an item's name, value, crafting sources, and drop locations.
- Wiki Integration: One-click access to the Terraria wiki for additional details on any item.
- Seamless Navigation: Toggle tree traversal to see crafting guides for an item's parent recipes.

### How to Use
1. Find your item
   * Scroll through the icon panel, search for the item name, or filter based on item tags to find your item
     

https://github.com/user-attachments/assets/bf7b988f-caea-4e72-9b00-8a3abfa23d49


2. View crafting recipes
   * Click the desired item to generate a hierarchical recipe tree containing a comprehensive ingredient list needed to create your item
     

https://github.com/user-attachments/assets/c2d9fc7e-50e3-4b8f-8097-2ee14ba26154


3. Learn more about recipe ingredients
   * Click a node on the recipe tree to see info about it in the right panel, such as:
     * Name
     * Value
     * Tooltip
     * Tags
     * Location and drop rates (if applicable)
    * Want more details? Click the item's icon in the info panel to open its wiki page in a new tab.
      

https://github.com/user-attachments/assets/5e62775c-e4d7-4671-a716-cccfae0e53e7


4. Select parent recipes
    * Toggle tree traversal to show the crafting guide for an item's parent recipe
      

https://github.com/user-attachments/assets/17fcf2e2-fb94-4704-b667-341541fc5369


5. Navigate Recipes
    * Zoom in or out, and hold click to drag and move the recipe tree to focus on the info you need


https://github.com/user-attachments/assets/9a09f362-12c0-4533-b7c7-d4653f3a19f8




## Overview of Tinkery
### What is it?
Tinkery acts as a comprehensive UI for crafting recipes, item information, and more for anything involved in the "Tinkerer's Workshop" crafting station in the video game "Terraria." 

### How does it work?
All items involved in any Tinkerer's Workshop recipe are displayed in a searchable and filterable icon panel. Upon clicking an icon, a hierarchical tree is generated to display the recipes required to create that item, as well as all of the parent recipes that that item is an ingredient for. The info panel on the right displays information about the clicked item, such as its name, value, and where to find it, if applicable. 

Clicking the item icon in the info panel will open a new tab routed to the wiki page for that item. Clicking tree nodes when a recipe is generated will populate the info panel with the clicked item's information, but it will not change the displayed recipe unless "Toggle Tree Traversal" is checked.

### Why is it needed?
Tinkerer's Workshop crafting recipes are notoriously long and complicated. Recipes form a crafting hierarchy, as crafted items are then involved in other recipes as ingredients. Some recipes have over 20 items involved to reach the final product. 
Additionally, some recipes have multiple ways of crafting the same item. Figuring out which recipe is best for your in-game circumstances is a tedious process of rabbit hole diving down the wiki.

And this is just assuming you know what you want to craft. Let's say you want to do more melee damage. You have to first search the wiki to figure out what your options are, then go down that same rabbit hole of determining what items 
you can currently get, given your circumstances (for instance, if you are in hardmode or not).

Members of online Terraria community forums have come up with visual aids to help in this process ([here](https://www.reddit.com/r/Terraria/comments/csam1f/mindmap_of_all_accessory_combinations_crafted_at/), 
[here](https://www.reddit.com/r/Terraria/comments/h055q3/an_updated_tinkerers_workshop_spreadsheet/), and [here](https://www.reddit.com/r/Terraria/comments/hqacz5/all_accessory_combinations_tinkerers_workshop/), for instance).
These aids are great (I've used them for years!), but they do have limitations: searching for the exact item that you need, figuring out where to find the item in the overworld, and finding Tinkerer's Workshop items for a specific use case (like boosting melee damage) are some examples.

Tinkery dynamically generates recipes on a per-need basis (i.e., clicking the icon of the item that you want). You can search for the exact item that you need with the search bar, or filter items based on their tags. Tinkery also provides location information of items that can be found in the overworld, including drop rates. And if there's info that you need that isn't displayed, you can click the item's icon in the info panel to be directly routed to the item's wiki.

Tinkery eliminates the traditional 15+ open-tabs-of-the-wiki endeavor of using the Tinkerer's Workshop.

# Development
This project is **open-source**. If there's an additional aspect to this UI you would like to add, please feel free! This includes potential mod support.

### Contributing Guidelines
1. Fork this repository
2. Create a new branch: 
```
bash git checkout -b feature/<feature-name>
```
3. Commit and push your changes:
```
git commit -m "Add <feature>"
git push origin feature/<feature-name>
```
4. Open a pull request for review

**Attribution**: Please keep the footer text as is:
> Made by LittleString899. This is a fan-made project inspired by Terraria. This project is not affiliated with, endorsed by, or associated with Re-Logic.

### Technologies Used
- **HTML** for structuring the content.
- **CSS** for styling.
- **JavaScript** for interactivity.
- **D3.js** for creating dynamic data visualizations.
- **Font Awesome** for icons.

# License
This project is licensed under the MIT License - see the LICENSE file for details.














