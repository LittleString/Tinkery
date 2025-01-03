// All information about every item in Tinkerer's Workshop recipes

export let items = [

    // --- Pre-hardmode Items ---
    {
        "name": "Tackle Box",
        "tooltip": "Decreases chance of bait consumption",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Tackle_Box.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Tackle_Box",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        "location": [
            {place: "Angler Quest", odds: "2.5%"}
        ]
    },
    {
        "name": "Honey Balloon",
        "tooltip": "Increases jump height\nReleases bees and douses the user in honey when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Honey_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Honey_Balloon",
        "hardmode": false,
        "tags": [
            "Health",
            "Mobility"
        ]
    },
    {
        "name": "Lucky Horseshoe",
        "tooltip": "Negates fall damage\n'Said to bring good fortune and keep evil spirits at bay'",
        "value": {
            "copper": 0,
            "silver": 54,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lucky_Horseshoe.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lucky_Horseshoe",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {place: "Azure Crate", odds: "25%"},
            {place: "Sky Crate", odds: "25%"},
            {place: "Skyware Chest", odds: "25%"}
        ]
    },
    {
        "name": "Sailfish Boots",
        "tooltip": "The wearer can run super fast",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sailfish_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sailfish_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {
                place: "Iron Crate", 
                odds: "4.26%"
            },
            {
                place: "Mythril Crate", 
                odds: "4.19%"
            },
            {
                place: "Pearlwood Crate", 
                odds: "2.49%"
            },
            {
                place: "Wooden Crate", 
                odds: "2.5%"
            }
        ]
    },
    {
        "name": "Frog Leg",
        "tooltip": "Increases jump speed and allows auto-jump\nIncreases fall resistance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frog_Leg.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frog_Leg",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {
                "place": "Fishing catch", 
                "odds": [
                    {"Fishing Power 50%": "0.2%"},
                    {"Fishing Power 100%": "0.4%"}
                ]
            }
        ]
    },
    {
        "name": "High Test Fishing Line",
        "tooltip": "Fishing line will never break",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/High_Test_Fishing_Line.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/High_Test_Fishing_Line",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        "location": [
            {place: "Angler Quest", odds: "2.5%"}
        ]
    },
    {
        "name": "Angler Earring",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Angler_Earring.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Angler_Earring",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        "location": [
            {place: "Angler Quest", odds: "2.5%"}
        ]
    },
    {
        "name": "Medicated Bandage",
        "tooltip": "Immunity to Poison and Bleeding",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Medicated_Bandage.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Medicated_Bandage",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Countercurse Mantra",
        "tooltip": "Immunity to Silence and Curse",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Countercurse_Mantra.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Countercurse_Mantra",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Obsidian Shield",
        "tooltip": "Grants immunity to knockback\nGrants immunity to fire blocks",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Shield",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Mana Flower",
        "tooltip": "8% reduced mana cost\nAutomatically use mana potions when needed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mana_Flower.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mana_Flower",
        "hardmode": false,
        "tags": [
            "Magic"
        ]
    },
    {
        "name": "Brick Layer",
        "tooltip": "Increases tile placement speed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Brick_Layer.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Brick_Layer",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Extendo Grip",
        "tooltip": "Increases block placement & tool range by 3\nIncreases tile reach",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Extendo_Grip.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Extendo_Grip",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Paint Sprayer",
        "tooltip": "Automatically paints or coats placed objects",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Paint_Sprayer.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Paint_Sprayer",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Portable Cement Mixer",
        "tooltip": "Increases wall placement speed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Portable_Cement_Mixer.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Portable_Cement_Mixer",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Jellyfish Diving Gear",
        "tooltip": "Grants the ability to swim and greatly extends underwater breathing\nGenerates a very subtle glow which becomes more vibrant underwater",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Jellyfish_Diving_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Jellyfish_Diving_Gear",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Jellyfish Necklace",
        "tooltip": "Generates a very subtle glow which becomes more vibrant underwater\nProvides light under water",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Jellyfish_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Jellyfish_Necklace",
        "hardmode": false,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Blue Jellyfish", 
                odds: "1%"
            },
            {
                place: "Green Jellyfish",
                odds: "1%"
            },
            {
                place: "Pink Jellyfish",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Fishing_Bobber",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        location: [
            {
                place: "Angler Quest", 
                odds: "2.94%"
            }
        ]
    },
    {
        "name": "Glowing Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Glowing_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Glowing_Fishing_Bobber",
        "hardmode": false,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Honey Comb",
        "tooltip": "Releases bees and douses the user in honey when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Honey_Comb.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Honey_Comb",
        "hardmode": false,
        "tags": [
            "Health",
            "Damage"
        ],
        "location": [
            {place: "Queen Bee drop", odds: "33%"}
        ]
    },
    {
        "name": "Blizzard in a Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Blizzard_in_a_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Blizzard_in_a_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Blizzard in a Bottle",
        "tooltip": "Allows the holder to double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Blizzard_in_a_Bottle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Blizzard_in_a_Bottle",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Boreal Crate", 
                odds: "16.67%"
            },
            {
                place: "Frozen Chest",
                odds: "15.51%"
            },
            {
                place: "Frozen Crate",
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Cloud in a Bottle",
        "tooltip": "Allows the holder to double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Cloud_in_a_Bottle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Cloud_in_a_Bottle",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Gold chests in underground and caverns", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Shiny Red Balloon",
        "tooltip": "Increases jump height",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Shiny_Red_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Shiny_Red_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {place: "Azure Crate", odds: "25%"},
            {place: "Sky Crate", odds: "25%"},
            {place: "Skyware Chest", odds: "25%"}
        ]
    },
    {
        "name": "Cloud in a Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Cloud_in_a_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Cloud_in_a_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Sandstorm in a Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sandstorm_in_a_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sandstorm_in_a_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Bundle of Balloons",
        "tooltip": "Allows the holder to quadruple jump\nIncreases jump height",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Bundle_of_Balloons.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Bundle_of_Balloons",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Celestial Magnet",
        "tooltip": "Increases pickup range for mana stars",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Celestial_Magnet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Celestial_Magnet",
        "hardmode": false,
        "tags": [
            "Magic"
        ],
        location: [
            {
                place: "Azure Crate", 
                odds: "25%"
            },
            {
                place: "Sky Crate",
                odds: "25%"
            },
            {
                place: "Skyware Chest",
                odds: "25%"
            }
        ]
    },
    {
        "name": "Magic Cuffs",
        "tooltip": "Increases maximum mana by 20\nRestores mana when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magic_Cuffs.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magic_Cuffs",
        "hardmode": false,
        "tags": [
            "Magic"
        ]
    },
    {
        "name": "PDA",
        "tooltip": "Displays everything",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/PDA.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/PDA",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Magic Mirror",
        "tooltip": "Gaze in the mirror to return home",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magic_Mirror.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magic_Mirrors",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Gold chests in underground and caverns", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Ice Mirror",
        "tooltip": "Gaze in the mirror to return home",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ice_Mirror.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magic_Mirrors",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Frozen chests in Ice biome", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Band of Regeneration",
        "tooltip": "Slowly regenerates life",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Band_of_Regeneration.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Band_of_Regeneration",
        "hardmode": false,
        "tags": [
            "Health"
        ],
        location: [
            {
                place: "Gold chests in underground and caverns", 
                odds: "N/A"
            },
            {
                place: "Living mahogany trees in underground jungle",
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Megaphone",
        "tooltip": "Immunity to Silence",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Megaphone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Megaphone",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Green Jellyfish", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Blood Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Dark Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Pixie",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Nazar",
        "tooltip": "Immunity to Curse",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Nazar.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Nazar",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Crimson Axe", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Cursed Hammer",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Cursed Skull",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Enchanted Sword",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Giant Cursed Skull",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Diving Gear",
        "tooltip": "Grants the ability to swim\nGreatly extends underwater breathing",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Diving_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Diving_Gear",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Flipper",
        "tooltip": "Grants the ability to swim",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Flipper.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Flipper",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Ocean Crate", 
                odds: "22.5%"
            },
            {
                place: "Seaside Crate",
                odds: "22.5%"
            },
            {
                place: "Water Chest",
                odds: "22.5%"
            }
        ]
    },
    {
        "name": "Diving Helmet",
        "tooltip": "Greatly extends underwater breathing",
        "value": {
            "copper": 0,
            "silver": 2,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Diving_Helmet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Diving_Helmet",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Orca", 
                odds: [
                    {"Classic": "5%"},
                    {"Expert": "N/A"},
                    {"Master": "N/A"}
                ]
            },
            {
                place: "Shark",
                odds: [
                    {"Classic": "2%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Spectre Boots",
        "tooltip": "Allows flight\nThe wearer can run super fast",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Spectre_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Spectre_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Flower Boots",
        "tooltip": "Flowers grow on the grass you walk on",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Flower_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Flower_Boots",
        "hardmode": false,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Bramble Crate", 
                odds: "5%"
            },
            {
                place: "Jungle Crate", 
                odds: "5%"
            },
            {
                place: "Ivy Chest", 
                odds: "4.57%"
            }
        ]
    },
    {
        "name": "Fart in a Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fart_in_a_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fart_in_a_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Fart in a Jar",
        "tooltip": "Allows the holder to double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fart_in_a_Jar.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fart_in_a_Jar",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Magma Stone",
        "tooltip": "Melee attacks inflict fire damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magma_Stone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magma_Stone",
        "hardmode": false,
        "tags": [
            "Melee"
        ],
        "location": [
            {
                place: "Hellbat", 
                odds: "0.67%"
            },
            {
                place: "Lava Bat",
                odds: "2%"
            }
        ]
    },
    {
        "name": "Fish Finder",
        "tooltip": "Displays weather, moon phase, and fishing information",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fish_Finder.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fish_Finder",
        "hardmode": false,
        "tags": [
            "Fishing",
            "Tools"
        ]
    },
    {
        "name": "Fisherman's Pocket Guide",
        "tooltip": "Displays fishing information",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fisherman's_Pocket_Guide.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fisherman%27s_Pocket_Guide",
        "hardmode": false,
        "tags": [
            "Fishing",
            "Tools"
        ],
        "location": [
            {
                place: "Angler Quest", 
                odds: "3.33%"
            }
        ]
    },
    {
        "name": "Weather Radio",
        "tooltip": "Displays the weather",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Weather_Radio.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Weather_Radio",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Angler Quest", 
                odds: "3.33%"
            }
        ]
    },
    {
        "name": "Sextant",
        "tooltip": "Displays the phase of the moon",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sextant.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sextant",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Angler Quest", 
                odds: "3.33%"
            }
        ]
    },
    {
        "name": "Frog Flipper",
        "tooltip": "Grants the ability to swim\nIncreases jump speed and allows auto-jump\nIncreases fall resistance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frog_Flipper.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frog_Flipper",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Tiger Climbing Gear",
        "tooltip": "Allows the ability to climb walls",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Tiger_Climbing_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Tiger_Climbing_Gear",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Frog Webbing",
        "tooltip": "Allows the ability to climb walls\nIncreases jump speed and allows auto-jump\nIncreases fall resistance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frog_Webbing.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frog_Webbing",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Frostspark Boots",
        "tooltip": "Allows flight, super fast running, and extra mobility on ice\n8% increased movement speed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 7,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frostspark_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frostspark_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Lightning Boots",
        "tooltip": "Allows flight, super fast running\n8% increased movement speed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lightning_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lightning_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Ice Skates",
        "tooltip": "Provides extra mobility on ice\nIce will not break when you fall on it",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ice_Skates.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ice_Skates",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Boreal Crate", 
                odds: "16.67%"
            },
            {
                place: "Frozen Chest", 
                odds: "15.51%"
            },
            {
                place: "Frozen Crate", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Goblin Tech",
        "tooltip": "Displays movement speed, damage per second, and valuable ore",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Goblin_Tech.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Goblin_Tech",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Metal Detector",
        "tooltip": "Displays the most valuable ore around you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Metal_Detector.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Metal_Detector",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Lost Girl", 
                odds: [
                    {"Classic": "50%"},
                    {"Expert": "100%"},
                    {"Master": "100%"}
                ]
            },
            {
                place: "Nymph",
                odds: [
                    {"Classic": "50%"},
                    {"Expert": "100%"},
                    {"Master": "100%"}
                ]
            }
        ]
    },
    {
        "name": "Stopwatch",
        "tooltip": "Displays how fast the player is moving",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Stopwatch.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Stopwatch",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "DPS Meter",
        "tooltip": "Displays your damage per second",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/DPS_Meter.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/DPS_Meter",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "GPS",
        "tooltip": "Shows position\nTells the time",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/GPS.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/GPS",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Gold Watch",
        "tooltip": "Tells the time\nCrafted at a table with a chair",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Gold_Watch.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Gold_Watch",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Depth Meter",
        "tooltip": "Displays depth",
        "value": {
            "copper": 0,
            "silver": 25,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Depth_Meter.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Depth_Meter",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Cave Bat", 
                odds: "1%"
            },
            {
                place: "Crawdad",
                odds: "1.25%"
            },
            {
                place: "Giant Bat",
                odds: "1%"
            },
            {
                place: "Giant Shelly",
                odds: "1.25%"
            },
            {
                place: "Ice Bat",
                odds: "1%"
            },
            {
                place: "Jungle Bat",
                odds: "1%"
            },
            {
                place: "Salamander",
                odds: "1.25%"
            },
            {
                place: "Spore Bat",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Compass",
        "tooltip": "Displays horizontal position",
        "value": {
            "copper": 0,
            "silver": 25,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Compass.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Compass",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Armored Viking", 
                odds: "2%"
            },
            {
                place: "Crawdad",
                odds: "1.23%"
            },
            {
                place: "Mother Slime",
                odds: "2%"
            },
            {
                place: "Giant Shelly",
                odds: "1.25%"
            },
            {
                place: "Piranha",
                odds: "1.33%"
            },
            {
                place: "Snow Flinx",
                odds: "2%"
            },
            {
                place: "Salamander",
                odds: "1.23%"
            },
            {
                place: "Undead Viking",
                odds: "2%"
            }
        ]
    },
    {
        "name": "Platinum Watch",
        "tooltip": "Tells the time\nCrafted at a table with a chair",
        "value": {
            "copper": 0,
            "silver": 30,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Platinum_Watch.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Platinum_Watch",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Ancient Chisel",
        "tooltip": "Increases mining speed by 25%\n'Ancient problems require ancient solutions'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ancient_Chisel.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ancient_Chisel",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Mirage Crate", 
                odds: "12.5%"
            },
            {
                place: "Oasis Crate",
                odds: "12.5%"
            },
            {
                place: "Sandstone Chest",
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "Treasure Magnet",
        "tooltip": "Increases pickup range for items",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Treasure_Magnet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Treasure_Magnet",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Obsidian Lock Box", 
                odds: "20%"
            },
            {
                place: "Shadow Chest",
                odds: "20%"
            }
        ]
    },
    {
        "name": "Step Stool",
        "tooltip": "Hold Up to reach higher",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Step_Stool.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Step_Stool",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Chest", 
                odds: "8.33%"
            },
            {
                place: "Wooden Crate",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Flame Waker Boots",
        "tooltip": "'Never get cold feet again'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Flame_Waker_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Flame_Waker_Boots",
        "hardmode": false,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Hellstone Crate", 
                odds: "19%"
            },
            {
                place: "Obsidian Crate",
                odds: "19%"
            }
        ]
    },
    {
        "name": "Lava Waders",
        "tooltip": "Provides the ability to walk on water, honey, & lava\nGrants immunity to fire blocks and 7 seconds of immunity to lava\nReduces damage from touching lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lava_Waders.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lava_Waders",
        "hardmode": false,
        "tags": [
            "Mobility",
            "Immunity"
        ]
    },
    {
        "name": "Obsidian Water Walking Boots",
        "tooltip": "Provides the ability to walk on water & honey\nGrants immunity to fire blocks",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Water_Walking_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Water_Walking_Boots",
        "hardmode": false,
        "tags": [
            "Mobility",
            "Immunity"
        ]
    },
    {
        "name": "Water Walking Boots",
        "tooltip": "Provides the ability to walk on water & honey",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Water_Walking_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Water_Walking_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Ocean Crate", 
                odds: "10%"
            },
            {
                place: "Seaside Crate",
                odds: "10%"
            },
            {
                place: "Ocean Crate",
                odds: "10%"
            }
        ]
    },
    {
        "name": "Lava Charm",
        "tooltip": "Provides 7 seconds of immunity to lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lava_Charm.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lava_Charm",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Hellstone Crate", 
                odds: "5%"
            },
            {
                place: "Obsidian Crate",
                odds: "5%"
            }
        ]
    },
    {
        "name": "Obsidian Rose",
        "tooltip": "Reduces damage from touching lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Rose.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Rose",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Fire Imp", 
                odds: "5%"
            }
        ]
    },
    {
        "name": "Molten Charm",
        "tooltip": "Grants immunity to fire blocks\nProvdes 7 seconds of immunity to lava",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 7,
            "platinum": 0
        },
        "iconLocation": "images/icons/Molten_Charm.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Molten_Charm",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Lavaproof Fishing Hook",
        "tooltip": "Allows fishing in lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lavaproof_Fishing_Hook.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lavaproof_Fishing_Hook",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        location: [
            {
                place: "Hellstone Crate", 
                odds: "19%"
            },
            {
                place: "Obsidian Crate",
                odds: "19%"
            }
        ]
    },
    {
        "name": "Anklet of the Wind",
        "tooltip": "10% increased movement speed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Anklet_of_the_Wind.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Anklet_of_the_Wind",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Bramble Crate", 
                odds: "19%"
            },
            {
                place: "Jungle Crate", 
                odds: "19%"
            },
            {
                place: "Ivy Chest", 
                odds: "21.72%"
            }
        ]
    },
    {
        "name": "Aglet",
        "tooltip": "5% increased movement speed",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Aglet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Aglet",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Chest", 
                odds: "8.33%"
            },
            {
                place: "Pearlwood Crate", 
                odds: "1%"
            },
            {
                place: "Wooden Crate", 
                odds: "1%"
            }
        ]
    },
    {
        "name": "Mana Regeneration Band",
        "tooltip": "Increases maximum mana by 20\nIncreases mana regeneration rate",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mana_Regeneration_Band.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mana_Regeneration_Band",
        "hardmode": false,
        "tags": [
            "Magic"
        ]
    },
    {
        "name": "Shackle",
        "tooltip": "Grants 1 point of defense",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Shackle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Shackle",
        "hardmode": false,
        "tags": [
            "Defense"
        ],
        location: [
            {
                place: "Frozen Zombie", 
                odds: "2%"
            },
            {
                place: "Raincoat Zombie",
                odds: "2%"
            },
            {
                place: "Zombie",
                odds: "2%"
            }
        ]
    },
    {
        "name": "Magma Skull",
        "tooltip": "Provides 7 seconds of immunity to lava\nGrants immunity to fire blocks",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magma_Skull.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magma_Skull",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Obsidian Skull",
        "tooltip": "Grants immunity to fire blocks",
        "value": {
            "copper": 0,
            "silver": 54,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Skull.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Skull",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Nature's Gift",
        "tooltip": "6% reduced mana cost",
        "value": {
            "copper": 0,
            "silver": 54,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Nature's_Gift.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Nature%27s_Gift",
        "hardmode": false,
        "tags": [
            "Magic"
        ],
        location: [
            {
                place: "Harvested from rare flower on Jungle grass in Underground Jungle", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Band of Starpower",
        "tooltip": "Increases maximum mana by 20",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Band_of_Starpower.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Band_of_Starpower",
        "hardmode": false,
        "tags": [
            "Magic"
        ],
        location: [
            {
                place: "Corrupt Crate", 
                odds: "20%"
            },
            {
                place: "Defiled Crate",
                odds: "20%"
            },
            {
                place: "Shadow Orb",
                odds: "20%"
            }
        ]
    },
    {
        "name": "Bezoar",
        "tooltip": "Immunity to Poison",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Bezoar.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Bezoar",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        "location": [
            {
                place: "Hornet", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Moss Hornet",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Toxic Sludge",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Obsidian Skull Rose",
        "tooltip": "Grants immunity to fire blocks\nReduces damage from touching lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Skull_Rose.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Skull_Rose",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Multicolor Wrench",
        "tooltip": "Right click while holding to edit wire settings",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Multicolor_Wrench.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Multicolor_Wrench",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Red Wrench",
        "tooltip": "Places red wire",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Red_Wrench.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Wrenches",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Blue Wrench",
        "tooltip": "Places blue wire",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Blue_Wrench.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Wrenches",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Green Wrench",
        "tooltip": "Places green wire",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Green_Wrench.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Wrenches",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Yellow Wrench",
        "tooltip": "Places yellow wire",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Yellow_Wrench.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Wrenches",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Wire Cutter",
        "tooltip": "Removes wire",
        "value": {
            "copper": 0,
            "silver": 40,
            "gold": 20,
            "platinum": 0
        },
        "iconLocation": "images/icons/Wire_Cutter.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Wire_Cutter",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Cobalt Shield",
        "tooltip": "Grants immunity to knockback",
        "value": {
            "copper": 0,
            "silver": 75,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Cobalt_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Cobalt_Shield",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Golden Lock Box", 
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "R.E.K. 3000",
        "tooltip": "Displays number of monsters, kill count, and rare creates",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/R.E.K._3000.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/R.E.K._3000",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Sharkron Balloon",
        "tooltip": "Increases jump height\nAllows the holder to double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sharkron_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sharkron_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Feral Claws",
        "tooltip": "12% increased melee speed\nEnables auto swing for melee weapons",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Feral_Claws.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Feral_Claws",
        "hardmode": false,
        "tags": [
            "Melee"
        ],
        location: [
            {
                place: "Bramble Crate", 
                odds: "19%"
            },
            {
                place: "Jungle Crate", 
                odds: "19%"
            },
            {
                place: "Ivy Chest", 
                odds: "21.72%"
            }
        ]
    },
    {
        "name": "Tally Counter",
        "tooltip": "Displays how many monsters have been killed",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Tally_Counter.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Tally_Counter",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Angry Bones", 
                odds: "1%"
            },
            {
                place: "Cursed Skull",
                odds: "1%"
            },
            {
                place: "Dark Caster",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Lifeform Analyzer",
        "tooltip": "Displays the name of rare creatures around you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lifeform_Analyzer.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lifeform_Analyzer",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Radar",
        "tooltip": "Detects enemies around you",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Radar.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Radar",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "location": [
            {
                place: "Chest", 
                odds: "8.33%"
            },
            {
                place: "Pearlwood Crate",
                odds: "1%"
            },
            {
                place: "Wooden Crate",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Sandstorm in a Bottle",
        "tooltip": "Allows the holder to do an improved double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sandstorm_in_a_Bottle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sandstorm_in_a_Bottle",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Mirage Crate", 
                odds: "2.86%"
            },
            {
                place: "Oasis Crate",
                odds: "2.86%"
            }
        ]
    },
    {
        "name": "Tsunami in a Bottle",
        "tooltip": "Allows the holder to double jump",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Tsunami_in_a_Bottle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Tsunami_in_a_Bottle",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {
                place: "Iron Crate", 
                odds: "4.04%"
            },
            {
                place: "Mythril Crate", 
                odds: "3.98%"
            },
            {
                place: "Pearlwood Crate", 
                odds: "2.24%"
            },
            {
                place: "Wooden Crate", 
                odds: "2.44%"
            }
        ]
    },
    {
        "name": "Balloon Pufferfish",
        "tooltip": "Increases jump height",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Balloon_Pufferfish.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Balloon_Pufferfish",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {
                place: "Fishing in any biome", 
                odds: "0.16%"
            }
        ]
    },
    {
        "name": "Magic Conch",
        "tooltip": "If you listen closely, you can hear the ocean",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magic_Conch.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magic_Conch",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Mirage Crate", 
                odds: "12.5%"
            },
            {
                place: "Oasis Chest", 
                odds: "12.5%"
            },
            {
                place: "Sandstone Chest", 
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "Demon Conch",
        "tooltip": "If you listen closely, you can hear screams\n'Watch your toes'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Demon_Conch.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Demon_Conch",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Fishing in lava", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Hermes Boots",
        "tooltip": "The wearer can run super fast",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Hermes_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Hermes_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Chests in underground and caverns", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Rocket Boots",
        "tooltip": "Allows flight",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Rocket_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Rocket_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Purchased from Goblin Tinkerer", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Flurry Boots",
        "tooltip": "The wearer can run super fast",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Flurry_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Flurry_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Boreal Crate", 
                odds: "16.67%"
            },
            {
                place: "Frozen Chest", 
                odds: "15.51%"
            },
            {
                place: "Frozen Crate", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Dunerider Boots",
        "tooltip": "The wearer can run super fast, and even faster on sand\n'Walk without rhythm and you won't attract the worm'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Dunerider_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Dunerider_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Mirage Crate", 
                odds: "12.5%"
            },
            {
                place: "Oasis Chest", 
                odds: "12.5%"
            },
            {
                place: "Sandstone Chest", 
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "Shark Tooth Necklace",
        "tooltip": "Increases armor penetration by 5",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Shark_Tooth_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Shark_Tooth_Necklace",
        "hardmode": false,
        "tags": [
            "Damage"
        ],
        location: [
            {
                place: "Blood Zombie", 
                odds: [
                    {"Classic": "0.67%"},
                    {"Expert": "1.33%"},
                    {"Master": "1.33%"}
                ]
            },
            {
                place: "Drippler",
                odds: [
                    {"Classic": "0.67%"},
                    {"Expert": "1.33%"},
                    {"Master": "1.33%"}
                ]
            }
        ]
    },
    {
        "name": "Panic Necklace",
        "tooltip": "Increases movement speed after taking damage",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Panic_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Panic_Necklace",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Crimson Crate", 
                odds: "20%"
            },
            {
                place: "Crimson Heart", 
                odds: "20%"
            },
            {
                place: "Hematic Crate", 
                odds: "20%"
            }
        ]
    },
    {
        "name": "Mechanical Lens",
        "tooltip": "Grants improved wire vision",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mechanical_Lens.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mechanical_Lens",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Mechanical Ruler",
        "tooltip": "Creates measurement lines on screen for block placement",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mechanical_Ruler.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mechanical_Ruler",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Purchased from the Mechanic", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Climbing Claws",
        "tooltip": "Allows the ability to slide down walls\nImproved ability if combined with Shoe Spikes",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Climbing_Claws.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Climbing_Claws",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "location": [
            {
                place: "Chest", 
                odds: "8.33%"
            },
            {
                place: "Pearlwood Crate",
                odds: "1%"
            },
            {
                place: "Wooden Crate",
                odds: "1%"
            }
        ]
    },
    {
        "name": "Shoe Spikes",
        "tooltip": "Allows the ability to slide down walls\nImproved ability if combined with Climbing Claws",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Shoe_Spikes.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Shoe_Spikes",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Gold chests in underground and caverns", 
                odds: "N/A"
            },
            {
                place: "Rich mahogany chests in underground jungle", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Super Absorbant Sponge",
        "tooltip": "Capable of soaking up an endless amount of water",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Super_Absorbant_Sponge.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Super_Absorbant_Sponge",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Angler Quest (after complething 10th quest)", 
                odds: "1.43%"
            }
        ]
    },
    {
        "name": "Lava Absorbant Sponge",
        "tooltip": "Capable of soaking up an endless amount of lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lava_Absorbant_Sponge.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lava_Absorbant_Sponge",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Fishing in lava", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Honey Absorbant Sponge",
        "tooltip": "Capable of soaking up an endless amount of honey",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Honey_Absorbant_Sponge.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Honey_Absorbant_Sponge",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        location: [
            {
                place: "Pre-hardmode Angler Quest for Bumblebee Tuna", 
                odds: "25%"
            },
            {
                place: "Hardmode Angler Quest for Bumblebee Tuna", 
                odds: "50%"
            }
        ]
    },
    {
        "name": "Architect Gizmo Pack",
        "tooltip": "Increases block & wall placement speed\nIncreases block placement & tool range by 3\nAutomatically paints or coats placed objects",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Architect_Gizmo_Pack.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Architect_Gizmo_Pack",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
    },
    {
        "name": "Mining Helmet",
        "tooltip": "Provides light when worn",
        "value": {
            "copper": 0,
            "silver": 80,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mining_Helmet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mining_armor",
        "hardmode": false,
        "tags": [
            "Tools",
            "Defense"
        ],
        location: [
            {
                place: "Undead Miner", 
                odds: "5%"
            }
        ]
    },
    {
        "name": "Night Vision Helmet",
        "tooltip": "Improves vision",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Night_Vision_Helmet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Night_Vision_Helmet",
        "hardmode": false,
        "tags": [
            "Tools",
            "Defense"
        ],
        location: [
            {
                place: "Granite Elemental", 
                odds: "3.3%"
            },
            {
                place: "Granite Golem", 
                odds: "3.3%"
            }
        ]
    },
    {
        "name": "White String",
        "tooltip": "Increases yoyo range",
        "value": {
            "copper": 0,
            "silver": 3,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": "images/icons/White_String.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Strings",
        "hardmode": false,
        "tags": [
            "Melee"
        ],
        location: [
            {
                place: "Granite Elemental", 
                odds: "3.3%"
            },
            {
                place: "Granite Golem", 
                odds: "3.3%"
            }
        ]
    },
    {
        "name": "Adhesive Bandage",
        "tooltip": "Immunity to Bleeding",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Adhesive_Bandage.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Adhesive_Bandage",
        "hardmode": false,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Angler Fish", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Rusty Armored Bones",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Werewolf",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Weighted Pressure Plate",
        "tooltip": "Triggered by player when stepping on or off it",
        "value": {
            "copper": 0,
            "silver": 10,
            "gold": 0,
            "platinum": 0
        },
        "iconLocation": [
            "images/icons/Cyan_Weighted_Pressure_Plate.png",
            "images/icons/Orange_Weighted_Pressure_Plate.png",
            "images/icons/Pink_Weighted_Pressure_Plate.png",
            "images/icons/Purple_Weighted_Pressure_Plate.png"
        ],
        "wikiLink": "https://terraria.wiki.gg/wiki/Pressure_Plates",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Counterweight",
        "tooltip": "Throws a counterweight after hitting an enemy with a yoyo",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": [ // Multiple icons for the counterweight
            "images/icons/Black_Counterweight.png",
            "images/icons/Yellow_Counterweight.png",
            "images/icons/Blue_Counterweight.png",
            "images/icons/Red_Counterweight.png",
            "images/icons/Purple_Counterweight.png",
            "images/icons/Green_Counterweight.png"
        ],
        "wikiLink": "https://terraria.wiki.gg/wiki/Counterweights",
        "hardmode": false,
        "tags": [
            "Melee"
        ],
        location: [
            {
                place: "Purchased from Traveling Merchant", 
                odds: "N/A"
            },
            {
                place: "Purchased from Skeleton Merchant", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Molten Skull Rose",
        "tooltip": "Provides 7 seconds of immunity to lava\nGrants immunity to fire blocks\nReduces damage from touching lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Molten_Skull_Rose.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Molten_Skull_Rose",
        "hardmode": false,
        "tags": [
            "Immunity"
        ]
    },
    {
        "name": "Cell Phone",
        "tooltip": "Displays everything\nAllows you to return home at will",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Cell_Phone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Cell_Phone",
        "hardmode": false,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Angler Tackle Bag",
        "tooltip": "Fishing line will never break, decreases chance of bait consumption, increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Angler_Tackle_Bag.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Angler_Tackle_Bag",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
    },
    {
        "name": "Blue Horseshoe Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Blue_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Blue_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "White Horseshoe Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/White_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/White_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },
    {
        "name": "Yellow Horseshoe Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Yellow_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Yellow_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ]
    },









    // --- Pre-hardmode Items; Final Craft ---
    {
        "name": "Argon Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Argon_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Argon_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Helium Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Helium_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Helium_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Krypton Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Krypton_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Krypton_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Lava Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lava_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Lava_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Xenon Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Xenon_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Xenon_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Neon Moss Fishing Bobber",
        "tooltip": "Increases fishing power by 10",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Neon_Moss_Fishing_Bobber.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fishing_Bobbers#Neon_Moss_Fishing_Bobber",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Fishing"
        ]
    },
    {
        "name": "Ultra Absorbant Sponge",
        "tooltip": "Capable of soaking up an endless amount of liquid",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 30,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ultra_Absorbant_Sponge.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ultra_Absorbant_Sponge",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Lavaproof Tackle Bag",
        "tooltip": "Fishing line will never break, decreases chance of bait consumption, increases fishing power by 10\nAllows fishing in lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lavaproof_Tackle_Bag.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lavaproof_Tackle_Bag",
        "hardmode": false,
        "tags": [
            "Fishing"
        ],
        "finalCraft": true
    },
    {
        "name": "Shellphone",
        "tooltip": "Displays everything\nRight click to toggle destination\n'If you listen closely, you can hear something about your car's warranty'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Shellphone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Shellphone",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "finalCraft": true
    },
    {
        "name": "Amphibian Boots",
        "tooltip": "The wearer can run super fast\nIncreases jump speed and allows auto-jump\nIncreases fall resistance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Amphibian_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Amphibian_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Arctic Diving Gear",
        "tooltip": "Grants the ability to swim and greatly extends underwater breathing\nProvides extra mobility on ice\nGenerates a very subtle glow which becomes more vibrant underwater",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Arctic_Diving_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Arctic_Diving_Gear",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Green Horseshoe Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Green_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Green_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Pink Horseshoe Balloon",
        "tooltip": "Allows the holder to double jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Pink_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Pink_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Amber Horseshoe Balloon",
        "tooltip": "Releases bees and douses the user in honey when damaged\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Amber_Horseshoe_Balloon.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Amber_Horseshoe_Balloon",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Bundle of Horseshoe Balloons",
        "tooltip": "Allows the holder to quadruple jump\nIncreases jump height and negates fall damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Bundle_of_Horseshoe_Balloons.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Bundle_of_Horseshoe_Balloons",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Celestial Cuffs",
        "tooltip": "Increases pickup range for mana stars\nRestores mana when damaged\nIncreases maximum mana by 20",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Celestial_Cuffs.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Celestial_Cuffs",
        "hardmode": false,
        "tags": [
            "Magic"
        ],
        "finalCraft": true
    },
    {
        "name": "Fairy Boots",
        "tooltip": "Allows flight\nThe wearer can run super fast\nFlowers grow on the grass you walk on",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fairy_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fairy_Boots",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Frog Gear",
        "tooltip": "Grants the ability to swim\nAllows the ability to climb walls\nIncreases jump speed and allows auto-jump\nIncreases fall resistance\n'It ain't easy being green'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frog_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frog_Gear",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Hellfire Treads",
        "tooltip": "Allows flight\nThe wearer can run super fast\nLeaves a trail of flames in your wake",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Hellfire_Treads.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Hellfire_Treads",
        "hardmode": false,
        "tags": [
            "Mobility"
        ],
        "finalCraft": true
    },
    {
        "name": "Magnet Flower",
        "tooltip": "8% reduced mana cost\nAutomatically use mana potions when needed\nIncreases pickup range for mana stars",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magnet_Flower.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magnet_Flower",
        "hardmode": false,
        "tags": [
            "Magic"
        ],
        "finalCraft": true
    },
    {
        "name": "Obsidian Horseshoe",
        "tooltip": "Negates fall damage\nGrants immunity to fire blocks",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Obsidian_Horseshoe.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Obsidian_Horseshoe",
        "hardmode": false,
        "tags": [
            "Mobility",
            "Immunity"
        ],
        "finalCraft": true
    },
    {
        "name": "Stinger Necklace",
        "tooltip": "Increases armor penetration by 5\nReleases bees and douses the user in honey when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Stinger_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Stinger_Necklace",
        "hardmode": false,
        "tags": [
            "Damage",
            "Health"
        ],
        "finalCraft": true
    },
    {
        "name": "Sweetheart Necklace",
        "tooltip": "Releases bees, douses the user in honey and increases movement speed when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sweetheart_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sweetheart_Necklace",
        "hardmode": false,
        "tags": [
            "Mobility",
            "Health",
            "Damage"
        ],
        "finalCraft": true
    },
    {
        "name": "Terraspark Boots",
        "tooltip": "Allows flight, super fast running, and extra mobility on ice\n8% increased movement speed\nProvides the ability to walk on water, honey, & lava\nGrants immunity to fire blocks and 7 seconds of immunity to lava\nReduces damage from touching lava",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 15,
            "platinum": 0
        },
        "iconLocation": "images/icons/Terraspark_Boots.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Terraspark_Boots",
        "hardmode": false,
        "tags": [
            "Mobility",
            "Immunity"
        ],
        "finalCraft": true
    },
    {
        "name": "The Grand Design",
        "tooltip": "Allows ultimate control over wires!\nRight click while holding to edit wire settings",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/The_Grand_Design.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/The_Grand_Design",
        "hardmode": false,
        "tags": [
            "Tools"
        ],
        "finalCraft": true
    },
    {
        "name": "Hand of Creation",
        "tooltip": "Increases mining speed by 25%\nIncreases block & wall placement speed\nIncreases block placement & tool range by 3\nIncreases pickup range for items\nAutomatically paints or coats placed objects\nHold Up to reach higher",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Hand_of_Creation.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Hand_Of_Creation",
        "hardmode": false,
        "finalCraft": true,
        "tags": [
            "Tools"
        ]
    },
    {
        "name": "Ultrabright Helmet",
        "tooltip": "Improves vision and provides light when worn\n'The darkness holds no secrets for you'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ultrabright_Helmet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ultrabright_Helmet",
        "hardmode": false,
        "tags": [
            "Tools",
            "Defense"
        ],
        "finalCraft": true
    },
    



    // --- Hardmode Items ---
    {
        "name": "Ankh Charm",
        "tooltip": "Grants immunity to most debuffs",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ankh_Charm.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ankh_Charm",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
    },
    {
        "name": "Armor Bracing",
        "tooltip": "Immunity to Weakness and Broken Armor",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Armor_Bracing.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Armor_Bracing",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
    },
    {
        "name": "The Plan",
        "tooltip": "Immunity to Slow and Confusion",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/The_Plan.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/The_Plan",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
    },
    {
        "name": "Reflective Shades",
        "tooltip": "Immunity to Darkness and Petrification",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Reflective_Shades.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Reflective_Shades",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
    },
    {
        "name": "Putrid Scent",
        "tooltip": "Enemies are less likely to target you\n5% increased damage and critical strike chance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Putrid_Scent.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Putrid_Scent",
        "hardmode": true,
        "tags": [
            "Damage",
            "Other"
        ],
        location: [
            {
                place: "Corrupt Mimic", 
                odds: "20%"
            }
        ]
    },
    {
        "name": "Armor Polish",
        "tooltip": "Immunity to Broken Armor",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Armor_Polish.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Armor_Polish",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Armored Skeleton", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Blue Armored Bones",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Vitamins",
        "tooltip": "Immunity to Weakness",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Vitamins.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Vitamins",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Corruptor", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Floaty Gross",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Avenger Emblem",
        "tooltip": "12% increased damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Avenger_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Avenger_Emblem",
        "hardmode": true,
        "tags": [
            "Damage"
        ],
    },
    {
        "name": "Warrior Emblem",
        "tooltip": "15% increased melee damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Warrior_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Warrior_Emblem",
        "hardmode": true,
        "tags": [
            "Melee",
            "Damage"
        ],
        location: [
            {
                place: "Wall of Flesh drop", 
                odds: "25%"
            }
        ]
    },
    {
        "name": "Ranger Emblem",
        "tooltip": "15% increased ranged damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ranger_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ranger_Emblem",
        "hardmode": true,
        "tags": [
            "Ranged",
            "Damage"
        ],
        location: [
            {
                place: "Wall of Flesh drop", 
                odds: "25%"
            }
        ]
    },
    {
        "name": "Sorcerer Emblem",
        "tooltip": "15% increased magic damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sorcerer_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sorcerer_Emblem",
        "hardmode": true,
        "tags": [
            "Magic",
            "Damage"
        ],
        location: [
            {
                place: "Wall of Flesh drop", 
                odds: "25%"
            }
        ]
    },
    {
        "name": "Summoner Emblem",
        "tooltip": "15% increased summon damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Summoner_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Summoner_Emblem",
        "hardmode": true,
        "tags": [
            "Summon",
            "Damage"
        ],
        location: [
            {
                place: "Wall of Flesh drop", 
                odds: "25%"
            }
        ]
    },
    {
        "name": "Star Cloak",
        "tooltip": "Causes stars to fall after taking damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Star_Cloak.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Star_Cloak",
        "hardmode": true,
        "tags": [
            "Damage"
        ],
        location: [
            {
                place: "Mimic", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Power Glove",
        "tooltip": "Increases melee knockback\n12% increased melee speed\nEnables auto swing for melee weapons\nIncreases the size of melee weapons",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Power_Glove.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Power_Glove",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
    },
    {
        "name": "Flesh Knuckles",
        "tooltip": "Enemies are more likely to target you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Flesh_Knuckles.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Flesh_Knuckles",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Crimson Mimic", 
                odds: "20%"
            }
        ]
    },
    {
        "name": "Celestial Stone",
        "tooltip": "Minor increase to damage, melee speed, critical strike chance, life regeneration, defense, mining speed, and minion knockback",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Celestial_Stone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Celestial_Stone",
        "hardmode": true,
        "tags": [
            "Damage",
            "Health",
            "Defense",
            "Tools",
            "Summon",
            "Melee"
        ],
    },
    {
        "name": "Moon Shell",
        "tooltip": "Turns the holder into a werewolf at night and a merfolk when entering water",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Moon_Shell.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Moon_Shell",
        "hardmode": true,
        "tags": [
            "Other"
        ],
    },
    {
        "name": "Sun Stone",
        "tooltip": "During daytime, grants minor increase to damage, melee speed, critical strike chance, life regeneration, defense, mining speed, and minion knockback",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sun_Stone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sun_Stone",
        "hardmode": true,
        "tags": [
            "Damage",
            "Melee",
            "Health",
            "Defense",
            "Tools",
            "Summon"
        ],
        location: [
            {
                place: "Golem drop", 
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "Moon Stone",
        "tooltip": "During nighttime, grants minor increase to damage, melee speed, critical strike chance, life regeneration, defense, mining speed, and minion knockback",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 7,
            "platinum": 0
        },
        "iconLocation": "images/icons/Moon_Stone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Moon_Stone",
        "hardmode": true,
        "tags": [
            "Damage",
            "Melee",
            "Health",
            "Defense",
            "Tools",
            "Summon"
        ],
        location: [
            {
                place: "Vampire (human or bat)", 
                odds: [
                    {"Classic": "2.86%"},
                    {"Expert": "5.63%"},
                    {"Master": "5.63%"}
                ]
            }
        ]
    },
    {
        "name": "Philosopher's Stone",
        "tooltip": "Reduces the cooldown of healing potions by 25%",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Philosopher's_Stone.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Philosopher%27s_Stone",
        "hardmode": true,
        "tags": [
            "Health"
        ],
        location: [
            {
                place: "Mimic", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Coin Ring",
        "tooltip": "Increases coin pickup range\nHitting enemies will sometimes drop extra coins",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Coin_Ring.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Coin_Ring",
        "hardmode": true,
        "tags": [
            "Other"
        ],
    },
    {
        "name": "Gold Ring",
        "tooltip": "Increases coin pickup range",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Gold_Ring.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Gold_Ring",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Flying Dutchman", 
                odds: "6.67%"
            },
            {
                place: "Pirate Captain", 
                odds: "0.4%"
            },
            {
                place: "Pirate Corsair", 
                odds: "0.1%"
            },
            {
                place: "Pirate Crossbower", 
                odds: "0.1%"
            },
            {
                place: "Pirate Deadeye", 
                odds: "0.1%"
            },
            {
                place: "Pirate Deckhand", 
                odds: "0.1%"
            }
        ]
    },
    {
        "name": "Lucky Coin",
        "tooltip": "Hitting enemies will sometimes drop extra coins\n'I found a coin! It's my lucky day!'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Lucky_Coin.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Lucky_Coin",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Flying Dutchman", 
                odds: "6.67%"
            },
            {
                place: "Pirate Captain", 
                odds: "0.1%"
            },
            {
                place: "Pirate Corsair", 
                odds: "0.025%"
            },
            {
                place: "Pirate Crossbower", 
                odds: "0.025%"
            },
            {
                place: "Pirate Deadeye", 
                odds: "0.025%"
            },
            {
                place: "Pirate Deckhand", 
                odds: "0.025%"
            }
        ]
    },
    {
        "name": "Destroyer Emblem",
        "tooltip": "10% increased damage\n8% increased critical strike chance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Destroyer_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Destroyer_Emblem",
        "hardmode": true,
        "tags": [
            "Damage"
        ],
    },
    {
        "name": "Eye of the Golem",
        "tooltip": "10% increased critical strike chance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Eye_of_the_Golem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Eye_of_the_Golem",
        "hardmode": true,
        "tags": [
            "Damage"
        ],
        location: [
            {
                place: "Golem drop", 
                odds: "14.29%"
            }
        ]
    },
    {
        "name": "Yoyo Glove",
        "tooltip": "Allows the use of two yoyos at once",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Yoyo_Glove.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Yoyo_Glove",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
        location: [
            {
                place: "Purchased from Skeleton Merchant in Hardmode", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Fast Clock",
        "tooltip": "Immunity to Slow",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fast_Clock.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fast_Clock",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Mummy", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Pixie",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Wraith",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Trifold Map",
        "tooltip": "Immunity to Confusion",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Trifold_Map.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Trifold_Map",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Clown", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Giant Bat",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Light Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Spectral Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Rifle Scope",
        "tooltip": "Increases view range for guns\nRight click to zoom out",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Rifle_Scope.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Rifle_Scope",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
        location: [
            {
                place: "Skeleton Sniper",
                odds: [
                    {"Classic": "8.33%"},
                    {"Expert": "15.97%"},
                    {"Master": "15.97%"}
                ]
            }
        ]
    },
    {
        "name": "Cross Necklace",
        "tooltip": "Increases length of invincibility after taking damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Cross_Necklace.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Cross_Necklace",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Mimic", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Necromantic Scroll",
        "tooltip": "Increases your max number of minions by 1\nIncreases summon damage by 10%",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Necromantic_Scroll.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Necromantic_Scroll",
        "hardmode": true,
        "tags": [
            "Summon"
        ],
        location: [
            {
                place: "Mourning Wood", 
                odds: [
                    {"Classic": "2-20%"},
                    {"Expert": "5-20%"},
                    {"Master": "5-20%"}
                ]
            }
        ]
    },
    {
        "name": "Hercules Beetle",
        "tooltip": "Increases summon damage by 15%\nIncreases the knockback of your minions",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Hercules_Beetle.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Hercules_Beetle",
        "hardmode": true,
        "tags": [
            "Summon"
        ],
        location: [
            {
                place: "Purchased from Witch Doctor in the Jungle post-Plantera", 
                odds: "N/A"
            }
        ]
    },
    {
        "name": "Titan Glove",
        "tooltip": "Increases melee knockback\nIncreases the size of melee weapons",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Titan_Glove.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Titan_Glove",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
        location: [
            {
                place: "Mimic", 
                odds: "16.67%"
            }
        ]
    },
    {
        "name": "Sniper Scope",
        "tooltip": "Increases view range for guns\n(Right click to zoom out)\n10% increased ranged damage and critical strike chance",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Sniper_Scope.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Sniper_Scope",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
    },
    {
        "name": "Blindfold",
        "tooltip": "Immunity to Darkness",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Blindfold.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Blindfold",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Corrupt Slime", 
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Shadow Slime",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "N/A"},
                    {"Master": "N/A"}
                ]
            },
            {
                place: "Crimslime",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Blood Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Dark Mummy",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            },
            {
                place: "Slimeling",
                odds: [
                    {"Classic": "1%"},
                    {"Expert": "2%"},
                    {"Master": "2%"}
                ]
            }
        ]
    },
    {
        "name": "Pocket Mirror",
        "tooltip": "Immunity to Petrification",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Pocket_Mirror.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Pocket_Mirror",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        location: [
            {
                place: "Medusa", 
                odds: [
                    {"Classic": "2.5%"},
                    {"Expert": "5%"},
                    {"Master": "5%"}
                ]
            }
        ]
    },
    {
        "name": "Magic Quiver",
        "tooltip": "Increases arrow damage by 10% and greatly increases arrow speed\n20% chance to not consume arrows",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Magic_Quiver.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Magic_Quiver",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
        location: [
            {
                place: "Skeleton Archer", 
                odds: "1.25%"
            }
        ]
    },

    {
        "name": "Moon Charm",
        "tooltip": "Turns the holder into a werewolf at night",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Moon_Charm.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Moon_Charm",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Werewolf", 
                odds: "1.67%"
            }
        ]
    },
    {
        "name": "Neptune's Shell",
        "tooltip": "Transforms the holder into merfolk when entering water",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 7,
            "platinum": 0
        },
        "iconLocation": "images/icons/Neptune's_Shell.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Neptune%27s_Shell",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Creature from the Deep", 
                odds: [
                    {"Classic": "2%"},
                    {"Expert": "3.96%"},
                    {"Master": "3.96%"}
                ]
            }
        ]
    },
    {
        "name": "Tabi",
        "tooltip": "Allows the ability to dash\nDouble tap a direction",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Tabi.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Tabi",
        "hardmode": true,
        "tags": [
            "Mobility"
        ],
        location: [
            {
                place: "Bone Lee", 
                odds: [
                    {"Classic": "8.33%"},
                    {"Expert": "15.97%"},
                    {"Master": "15.97%"}
                ]
            }
        ]
    },
    {
        "name": "Black Belt",
        "tooltip": "Gives a chance to dodge attacks",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Black_Belt.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Black_Belt",
        "hardmode": true,
        "tags": [
            "Defense"
        ],
        location: [
            {
                place: "Bone Lee", 
                odds: [
                    {"Classic": "8.33%"},
                    {"Expert": "15.97%"},
                    {"Master": "15.97%"}
                ]
            }
        ]
    },
    {
        "name": "Discount Card",
        "tooltip": "Shops prices lowered by 20%",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 1,
            "platinum": 0
        },
        "iconLocation": "images/icons/Discount_Card.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Discount_Card",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        location: [
            {
                place: "Flying Dutchman", 
                odds: "6.67%"
            },
            {
                place: "Pirate Captain", 
                odds: "0.2%"
            },
            {
                place: "Pirate Corsair", 
                odds: "0.05%"
            },
            {
                place: "Pirate Crossbower", 
                odds: "0.05%"
            },
            {
                place: "Pirate Deadeye", 
                odds: "0.05%"
            },
            {
                place: "Pirate Deckhand", 
                odds: "0.05%"
            }
        ]
    },
    {
        "name": "Frozen Turtle Shell",
        "tooltip": "Puts a shell around the owner when below 50% life that reduces damage by 25%",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frozen_Turtle_Shell.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frozen_Turtle_Shell",
        "hardmode": true,
        "tags": [
            "Defense"
        ],
        location: [
            {
                place: "Ice Tortoise", 
                odds: "2%"
            }
        ]
    },
    {
        "name": "Paladin's Shield",
        "tooltip": "Absorbs 25% of damage done to players on your team when above 25% life\nGrants immunity to knockback",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Paladin's_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Paladin%27s_Shield",
        "hardmode": true,
        "tags": [
            "Immunity",
            "Defense"
        ],
        location: [
            {
                place: "Paladin", 
                odds: [
                    {"Classic": "10%"},
                    {"Expert": "19%"},
                    {"Master": "19%"}
                ]
            }
        ]
    },
    {
        "name": "Mechanical Glove",
        "tooltip": "Increases melee knockback\n12% increased melee damage and speed\nEnables auto swing for melee weapons\nIncreases the size of melee weapons",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mechanical_Glove.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mechanical_Glove",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
    },



    // --- Hardmode Items; Final Craft ---
    {
        "name": "Ankh Shield",
        "tooltip": "Grants immunity to knockback and fire blocks\nGrants immunity to most debuffs",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Ankh_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Ankh_Shield",
        "hardmode": true,
        "tags": [
            "Immunity"
        ],
        "finalCraft": true
    },
    {
        "name": "Arcane Flower",
        "tooltip": "8% reduced mana cost\nAutomatically use mana potions when needed\nEnemies are less likely to target you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Arcane_Flower.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Arcane_Flower",
        "hardmode": true,
        "tags": [
            "Magic"
        ],
        "finalCraft": true
    },
    {
        "name": "Bee Cloak",
        "tooltip": "Causes stars to fall, releases bees, and douses the user in honey when damaged",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Bee_Cloak.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Bee_Cloak",
        "hardmode": true,
        "tags": [
            "Damage",
            "Health"
        ],
        "finalCraft": true
    },
    {
        "name": "Berserker's Glove",
        "tooltip": "Increases melee knockback\n12% increased melee speed\nEnables auto swing for melee weapons\nIncreases the size of melee weapons\nEnemies are more likely to target you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Berserker's_Glove.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Berserker%27s_Glove",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
        "finalCraft": true
    },
    {
        "name": "Celestial Emblem",
        "tooltip": "Increases pickup range for mana stars\n15% increased magic damage",
        "value": {
            "copper": 0,
            "silver": 20,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Celestial_Emblem.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Celestial_Emblem",
        "hardmode": true,
        "tags": [
            "Magic"
        ],
        "finalCraft": true
    },
    {
        "name": "Celestial Shell",
        "tooltip": "Turns the holder into a werewolf at night\nTurns the holder into a merfolk when entering water\nMinor increase to damage, melee speed, critical strike chance, life regeneration, defense, mining speed, and minion knockback",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 14,
            "platinum": 0
        },
        "iconLocation": "images/icons/Celestial_Shell.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Celestial_Shell",
        "hardmode": true,
        "tags": [
            "Other",
            "Damage",
            "Melee",
            "Health",
            "Defense",
            "Tools",
            "Summon"
        ],
        "finalCraft": true
    },
    {
        "name": "Charm of Myths",
        "tooltip": "Provides life regernation and reduces the cooldown of healing potions by 25%",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 4,
            "platinum": 0
        },
        "iconLocation": "images/icons/Charm_of_Myths.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Charm_of_Myths",
        "hardmode": true,
        "tags": [
            "Health"
        ],
        "finalCraft": true
    },
    {
        "name": "Fire Gauntlet",
        "tooltip": "Increases melee knockback and melee attacks inflict fire damage\n12% increased melee damage and speed\nEnables auto swing for melee weapons\nIncreases the size of melee weapons",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 6,
            "platinum": 0
        },
        "iconLocation": "images/icons/Fire_Gauntlet.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Fire_Gauntlet",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
        "finalCraft": true
    },
    {
        "name": "Frozen Shield",
        "tooltip": "Grants immunity to knockback\nPuts a shell around the owner when below 50% life that reduces damage by 25%\nAbsorbs 25% of damage done to players on your team when above 25% life",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 8,
            "platinum": 0
        },
        "iconLocation": "images/icons/Frozen_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Frozen_Shield",
        "hardmode": true,
        "tags": [
            "Immunity",
            "Defense"
        ],
        "finalCraft": true
    },
    {
        "name": "Greedy Ring",
        "tooltip": "Increases coin pickup range and shops prices lowered by 20%\nHitting enemies will sometimes drop extra coins",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Greedy_Ring.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Greedy_Ring",
        "hardmode": true,
        "tags": [
            "Other"
        ],
        "finalCraft": true
    },
    {
        "name": "Hero Shield",
        "tooltip": "Grants immunity to knockback\nAbsorbs 25% of damage done to players on your team when above 25% life\nEnemies are more likely to target you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Hero_Shield.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Hero_Shield",
        "hardmode": true,
        "tags": [
            "Immunity",
            "Defense"
        ],
        "finalCraft": true
    },
    {
        "name": "Mana Cloak",
        "tooltip": "8% reduced mana cost\nAutomatically use mana potions when needed\nCauses start to fall after taking damage\nStars restore mana when collected",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 3,
            "platinum": 0
        },
        "iconLocation": "images/icons/Mana_Cloak.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Mana_Cloak",
        "hardmode": true,
        "tags": [
            "Magic",
            "Damage"
        ],
        "finalCraft": true
    },
    {
        "name": "Master Ninja Gear",
        "tooltip": "Allows the ability to climb walls and dash\nGives a chance to dodge attacks",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Master_Ninja_Gear.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Master_Ninja_Gear",
        "hardmode": true,
        "tags": [
            "Mobility",
            "Defense"
        ],
        "finalCraft": true
    },
    {
        "name": "Molten Quiver",
        "tooltip": "Increases arrow damage by 10% and greatly increases arrow speed\n 20% chance not to consume arrows\nLights wooden arrows ablaze\n'Quiver in fear!'",
        "value": {
            "copper": 0,
            "silver": 50,
            "gold": 7,
            "platinum": 0
        },
        "iconLocation": "images/icons/Molten_Quiver.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Molten_Quiver",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
        "finalCraft": true
    },
    {
        "name": "Papyrus Scarab",
        "tooltip": "Increases your max number of minions by 1\nIncreases your summon damage by 15% and the knockback of your minions",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 5,
            "platinum": 0
        },
        "iconLocation": "images/icons/Papyrus_Scarab.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Papyrus_Scarab",
        "hardmode": true,
        "tags": [
            "Summon"
        ],
        "finalCraft": true
    },
    {
        "name": "Recon Scope",
        "tooltip": "Increases view range for guns\n(Right click to zoom out)\n10% increased ranged damage and critical strike chance\nEnemies are less likey to target you\n'Enemy spotted'",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Recon_Scope.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Recon_Scope",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
        "finalCraft": true
    },
    {
        "name": "Stalker's Quiver",
        "tooltip": "Increases arrow damage by 10% and greatly increases arrow speed\n20%chance not to consume arrows\nEnemies are less likely to target you",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Stalker's_Quiver.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Stalker%27s_Quiver",
        "hardmode": true,
        "tags": [
            "Ranged"
        ],
        "finalCraft": true
    },
    {
        "name": "Star Veil",
        "tooltip": "Causes stars to fall and increases length of invincibility after taking damage",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 2,
            "platinum": 0
        },
        "iconLocation": "images/icons/Star_Veil.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Star_Veil",
        "hardmode": true,
        "tags": [
            "Defense",
            "Damage"
        ],
        "finalCraft": true
    },
    {
        "name": "Yoyo Bag",
        "tooltip": "Gives the user master yoyo skills",
        "value": {
            "copper": 0,
            "silver": 0,
            "gold": 10,
            "platinum": 0
        },
        "iconLocation": "images/icons/Yoyo_Bag.png",
        "wikiLink": "https://terraria.wiki.gg/wiki/Yoyo_Bag",
        "hardmode": true,
        "tags": [
            "Melee"
        ],
        "finalCraft": true
    }
]